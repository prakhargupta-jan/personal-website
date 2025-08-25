import type { Blog } from "@/details";
import { Link } from "react-router-dom";

const BlogCard = ({ title, date, tldr, name }: Blog) => {
    return (
        < Link to={`/blogs/${name}`} className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition-all duration-300">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">{tldr}</p>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">Published on: {new Date(date).toLocaleDateString()}</p>
        </Link >
    )
}

export default BlogCard