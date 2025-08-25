import { projectDetails } from "@/details"

import ProjectCard from "../components/ProjectCard"

const Projects = () => {
    return (
        <div className="text-white">
            <h1 className="text-4xl font-bold mb-16">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projectDetails.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div >
    )
}

export default Projects