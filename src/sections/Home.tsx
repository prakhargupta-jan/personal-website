import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className="absolute top-1/2 transform -translate-y-1/2  text-white">
            <span className="text-4xl font-[Rubik] text-green-400" >Hello I'm</span>
            {/* TypeWriter Effect */}
            <div className="text-7xl font-bold my-2">Prakhar Gupta</div>
            <div className="text-2xl mt-4">A passionate Software Engineer</div>
            <div className="text-xl mt-2">Specializing in building exceptional Backend Systems.</div>
            <div className="mt-6">
                <Link to="/about" className="bg-green-600 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                    Learn More About Me
                </Link>
            </div>
        </div>
    )
}

export default Home