import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import type { Blog } from "@/details"
import {  useEffect, useState } from 'react'

const BlogPage = () => {
    const { name } = useParams();
    const [blog, setBlog] = useState<Blog | null>(null);
    useEffect(() => {
        if (!name) return;
        fetch(`https://raw.githubusercontent.com/prakhargupta-jan/blogs/master/blogs/${name}`).then(res => res.text()).then(text => {
            const lines = text.split('\n');
            const title = lines[0].replace('# ', '');
            const date = lines[1].replace('Date: ', '');
            const tldr = lines[2].replace('TL;DR: ', '');
            const body = lines.slice(3).join('\n');
            const url = `https://raw.githubusercontent.com/prakhargupta-jan/blogs/master/blogs/${name}`;
            setBlog({ title, date, tldr, body, url, name });
        });
    }, [name]);
    if (!name) {
        return <div className="h-screen max-h-screen overflow-auto text-white p-4">No blog found</div>;
    }
    if (!blog) {
        return <div>Loading...</div>;
    }
    const { title, date, tldr, body, url } = blog;
    return (
        <div className="text-white p-4 bg-black/30 backdrop backdrop-blur-xs rounded-lg mt-2">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <p className="text-sm text-gray-400 mb-2">Published on: {new Date(date).toLocaleDateString()}</p>
            <p className="text-lg italic mb-8">{tldr}</p>
            <div className="prose prose-invert markdown">
                <ReactMarkdown>
                    {body}
                </ReactMarkdown>
            </div>
            {name && <p className="mt-8 text-sm text-gray-400">Source: <a href={url}>{name}</a></p>}
        </div>
    )
}

export default BlogPage