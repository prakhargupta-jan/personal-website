import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    useEffect(() => {
        const screen = document.getElementById('screen');
        const navbar = document.getElementById('navbar');
        const handleScroll = () => {
            if (screen && navbar) {
                if (screen.scrollTop > 50) {
                    // background black with opacity 50% and backdrop blur
                    navbar.classList.add('bg-black/30', 'bg-opacity-50', 'backdrop-blur-xs', 'shadow-lg');
                } else {
                    navbar.classList.remove('bg-black/30', 'bg-opacity-50', 'backdrop-blur-xs', 'shadow-lg');
                }
            }
        };
        screen?.addEventListener('scroll', handleScroll);

        return () => {
            screen?.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className="w-full px-4 py-4 text-white flex justify-end items-top absolute transition-all duration-300" id="navbar">
            <div className="space-x-4">
                <Link to="/" className="hover:underline">Home</Link>
                <Link to="/about" className="hover:underline">About</Link>
                <Link to="/projects" className="hover:underline">Projects</Link>
                <Link to="/blogs" className="hover:underline">Blogs</Link>
            </div>
        </div>
    );
}

export default Navbar