import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import BlogDetail  from './pages/BlogDetail'
import NotFound from './pages/NotFound'

import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {

  React.useEffect(() => {
    AOS.init({
      duration: 800, // animasyon süresi (ms)
      once: true,    // sadece bir kez animasyon oynat
    })
  }, [])
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:slug" element={<BlogDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
