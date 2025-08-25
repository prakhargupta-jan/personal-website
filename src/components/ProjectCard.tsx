import type { Project } from "@/details"

const ProjectCard = ({ name, description, techStack, repoUrl, liveUrl}: Project) => {
    return (
        <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition duration-300 ease-in-out flex flex-col justify-between h-full">
            <div>
            <h2 className="text-lg font-semibold mb-2">{name}</h2>
            <p className="text-gray-400 mb-4 max-h-18 overflow-hidden">{description}</p>
            </div>
            <div>
            <p className="text-sm text-gray-500 mb-4">Tech Stack: {techStack.join(', ')}</p>
            <div className="flex space-x-4">
                {repoUrl && <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Repository</a>}
                {liveUrl && <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Live Demo</a>}
            </div>
            </div>
        </div>
    )
}



export default ProjectCard