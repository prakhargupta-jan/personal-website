import './App.css'
import Navbar from './components/navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './sections/Home'
import About from './sections/About'
import { useEffect, useReducer } from 'react'
import Blogs from './sections/Blogs'
import BlogPage from './sections/BlogPage'
import Projects from './sections/Projects'
import { FetcherContext, reducer } from './components/Fetcher'

function App() {
  const [state, dispatch] = useReducer(reducer, { loading: true, error: null, data: null });
  const { loading } = state;
  useEffect(() => {
    // check if document.readyState
    const onLoad = () => {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
    if (document.readyState === 'complete') {
      onLoad();
    } else {
      window.addEventListener('load', onLoad);
      return () => {
        window.removeEventListener('load', onLoad);
      }
    }
  }, []);

  return (
    <>
      <FetcherContext.Provider value={{ state, dispatch }}>
        <div className={`flex items-center justify-center h-screen bg-black text-foreground w-screen bg-cover bg-fixed scroll-auto max-h-screen overflow-auto ${loading ? '' : 'hidden'}`}>
          <div className="text-white text-2xl">Loading...</div>
        </div>
        <div className={loading ? 'hidden' : ''}>
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
          </div></div>
      </FetcherContext.Provider>
    </>
  )
}

export default App
