import {motion} from 'framer-motion'
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className="absolute top-1/2 transform -translate-y-1/2  text-white">
            <span className="text-4xl font-[Rubik] text-green-400" >Hello I'm</span>
            {/* TypeWriter Effect */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-7xl font-bold my-2">Prakhar Gupta</motion.div>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}  className="text-2xl mt-4">A passionate Software Engineer</motion.div>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0, transition: { delay: 0.4 } }}  className="text-xl mt-2">Specializing in building exceptional Backend Systems.</motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.6 } }} className="mt-6">
                <Link to="/about" className="bg-green-600 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                    Learn More About Me
                </Link>
            </motion.div>
        </div>
    )
}

export default Home