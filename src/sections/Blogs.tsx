import BlogCard from "@/components/BlogCard"
import type { Blog } from "@/details"
import { useEffect, useState } from "react"

const Blogs = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    useEffect(() => {
        // fetch blogs from github repo having markdown files and set them to blogs state
        fetch('https://api.github.com/repos/prakhargupta-jan/blogs/contents/blogs').then(res => res.json()).then(data => {
            const blogs: Blog[] = data.map((item: { name: string;}) => {
                const name = item.name;
                const url = `https://raw.githubusercontent.com/prakhargupta-jan/blogs/master/blogs/${name}`;
                return fetch(url).then(res => res.text()).then(text => {
                    const lines = text.split('\n');
                    const title = lines[0].replace('# ', '');
                    const date = lines[1].replace('Date: ', '');
                    const tldr = lines[2].replace('TL;DR: ', '');
                    const body = lines.slice(3).join('\n');
                    return { title, date, tldr, body, url, name };
                });
            });
            Promise.all(blogs).then(blogs => {
                setBlogs(blogs);
            });
        })
    })

    return (
        <div className="h-screen max-h-screen overflow-auto text-white">
            <h1 className="text-4xl font-bold mb-16">Blogs</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {blogs.map((blog, index) => (
                    <BlogCard key={index} {...blog} /> 
                ))}
            </div>
        </div >
    )
}

export default Blogs