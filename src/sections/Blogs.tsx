import BlogCard from "@/components/BlogCard"
import type { Blog } from "@/details"

const demoBlogs: Blog[] = [
    {
        title: "Understanding React Hooks",
        date: "2023-10-01",
        body: "React Hooks are functions that let you use state and other React features without writing a class...",
        tldr: "An introduction to React Hooks and how they can simplify your React components."
    },
    {
        title: "A Guide to Node.js Streams",
        date: "2023-09-15",
        body: "Node.js streams are a powerful way to handle data reading and writing in a       memory-efficient way...",
        tldr: "Learn about Node.js streams and how to use them for efficient data handling."
    },
    {
        title: "CSS Grid vs. Flexbox",
        date: "2023-08-30",
        body: "CSS Grid and Flexbox are two powerful layout systems in CSS. While they have some similarities...",
        tldr: "A comparison between CSS Grid and Flexbox to help you choose the right tool for your layout needs."
    }
]
const Blogs = () => {
    return (
        <div className="h-screen max-h-screen overflow-auto text-white">
            <h1 className="text-4xl font-bold mb-16">Blogs</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {demoBlogs.map((blog, index) => (
                    <BlogCard key={index} {...blog} /> 
                ))}
            </div>
        </div >
    )
}

export default Blogs