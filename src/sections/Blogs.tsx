import { FetcherContext } from '@/components/Fetcher'
import BlogCard from "@/components/BlogCard"
import { aboutDetails, type Blog } from "@/details"
import { useEffect, useContext } from "react"
import { motion } from "framer-motion"

const Blogs = () => {
    const { state, dispatch } = useContext(FetcherContext);
    const { data: blogs} = state;
    useEffect(() => {
        // fetch blogs from github repo having markdown files and set them to blogs state
        dispatch({ type: 'SET_LOADING', payload: true });
        fetch( `https://api.github.com/repos/${aboutDetails.profiles.github?.split("/")[3]}/blogs/contents/blogs`).then(res => {
            console.log(res);
            return res.json()
        }).then(data => {
            console.log(data);
            const blogs: Blog[] = data.map((item: { name: string;}) => {
                const name = item.name;
                // https://raw.githubusercontent.com/prakhargupta-jan/blogs/refs/heads/main/blogs/a.md
                const url = `https://raw.githubusercontent.com/${aboutDetails.profiles.github?.split("/")[3]}/blogs/refs/heads/main/blogs/${name}`;
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
                console.log(blogs);
                dispatch({ type: 'SET_DATA', payload: blogs });
            }).catch(err => {
                dispatch({ type: 'SET_ERROR', payload: 'Failed to fetch blogs' + err.toString() });
            });
        })
    }, [dispatch])

    if (!blogs || !Array.isArray(blogs) || blogs.length === 0) {
        return <div className="h-screen max-h-screen overflow-auto text-white p-4">No blogs found</div>;
    }

    return (
        <div className="h-screen max-h-screen overflow-auto text-white">
            <h1 className="text-4xl font-bold mb-16">Blogs</h1>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {blogs.map((blog, index) => (
                    <BlogCard key={index} {...blog} /> 
                ))}
            </motion.div>
        </div >
    )
}

export default Blogs