import './App.css'
import Navbar from './components/navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './sections/Home'
import About from './sections/About'
import { useEffect, useState } from 'react'
import Blogs from './sections/Blogs'
import BlogPage from './sections/BlogPage'
import Projects from './sections/Projects'

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    window.onload = () => {
      // time at which loading stops in miliseconds
      setTimeout(() => {
        setLoading(false);
      }, 100); // simulate loading time
    }
    return () => {
      window.onload = null;
    }
  }, []);
  if (loading) {
    return <>
      <div className="flex items-center justify-center h-screen bg-black text-foreground w-screen bg-cover bg-fixed scroll-auto max-h-screen overflow-auto">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    </>
  }

  return (
    <>
      <Navbar />
      <div className='p-12'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={< About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" >
            <Route index element={<Blogs />} />
            <Route path=":name" element={<BlogPage />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
