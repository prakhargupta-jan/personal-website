import { motion } from 'framer-motion'
import { aboutDetails } from '@/details'
// Will have details about me
// Name, Intro, Experience, Skills, Experience, Education, etc.
const About = () => {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-white bg-black/30 backdrop-blur-xs p-6 rounded-lg mt-2">
            <h1 className="text-4xl font-bold mb-4">About Me
            </h1>
            <p className="mb-4">
                {aboutDetails.introMsg}
            </p>
            {/* Showing experience as timeline */}
            {aboutDetails.experience.length > 0 && (
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">Experience</h2>
                    <ul className="list-disc list-inside w-2/3">
                        {aboutDetails.experience.map((exp, index) => (
                            <li key={index} className="mb-2">
                                <span className="font-semibold">{exp.role}</span> at <span className="font-semibold">{exp.company}</span> ({exp.duration})
                                <p className="mt-1 ml-2 text-sm text-gray-300">
                                    {/* margin on wrapping */}
                                    {exp.details?.map((detail, idx) => (
                                        <div key={idx} className="flex items-start">
                                            <span className="mx-2">- </span><span key={idx} className="block">{detail}</span>
                                        </div>
                                    ))}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {aboutDetails.skills && <>
                <h2 className="text-2xl font-semibold mb-2">Skills</h2>
                {
                    Object.entries(aboutDetails.skills).map(([category, skills], index) => (
                        <div key={index} className="mb-2 flex w-2/3 justify-between">
                            <span className="font-semibold w-1/2">{category}:</span>
                            <span className='italic w-1/2'>
                                {skills.join(', ')}
                            </span>
                        </div>
                    ))
                }
            </>
            }

            {
                aboutDetails.education && aboutDetails.education.length > 0 && (
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">Education</h2>
                        {/* 2 line per education */}
                        <ul className="list-disc list-inside mb-2">
                            {
                                aboutDetails.education.map((edu, index) => (
                                    <li key={index} className="mb-2">
                                        <span className="font-semibold">{edu.degree}</span> from <span className="font-semibold">{edu.institution}</span> ({edu.year})
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                )
            }
            {
                aboutDetails.profiles && Object.keys(aboutDetails.profiles).length > 0 && (
                    <div className="mb-4">
                        <h2 className="text-2xl font-semibold mb-2">Profiles</h2>
                        <div className='mb-2 flex flex-wrap space-x-8' >
                            {
                                Object.entries(aboutDetails.profiles).map(([platform, url], index) => (
                                    url ? <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline" key={index}>
                                        {platform.charAt(0).toUpperCase() + platform.slice(1)}
                                    </a>
                                        : null
                                ))
                            }</div>
                    </div>
                )
            }
            {aboutDetails.interests && aboutDetails.interests.length > 0 && (
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">Interests</h2>
                    <ul className="list-disc list-inside flex space-x-4 flex-wrap w-1/2">
                        {aboutDetails.interests.map((interest, index) => (
                            <li key={index}>{interest}</li>
                        ))}
                    </ul>
                </div>
            )}
        </motion.div>
    );
}

export default About