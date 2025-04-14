import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Post from './pages/Post'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:slug" element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
