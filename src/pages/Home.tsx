import React,{useEffect, useState} from 'react'

import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'

import { blogData } from "../data/blogData"
import { BlogCard } from "../components/BlogCard"

import Navbar from "../components/Navbar"

import { useLocation } from 'react-router-dom'

const Home = () => {

  const location = useLocation();

  const [path, setPath] = useState("")

  useEffect(() => {
    if (path) {
      const section = document.getElementById(path);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [path]);

  return (
  <main className="bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100">
        <Navbar setPath={setPath} path={path}/>
      <section
      id='home'
  data-aos="fade-down"
  className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] dark:from-gray-900 dark:to-gray-800"
>
  <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-yellow-300 opacity-20 rounded-full blur-3xl z-0 animate-pulse" />
  <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-indigo-300 opacity-20 rounded-full blur-2xl z-0 animate-pulse" />

  <h1 className="text-5xl md:text-7xl font-golden mb-6 text-gray-900 dark:text-white drop-shadow-2xl z-10">
    Burhan Saglik
  </h1>
  <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl z-10">
    Frontend geliştiricisi olarak blog yazılarımla tecrübelerimi ve öğrendiklerimi paylaşıyorum.
  </p>

  <div className="flex gap-5 mt-6 z-10">
  <a
    href="https://github.com/BurhanSglk"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white text-2xl transition-colors"
  >
    <FaGithub />
  </a>
  <a
    href="www.linkedin.com/in/burhan-sağlık"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-white text-2xl transition-colors"
  >
    <FaLinkedin />
  </a>
  <a
    href="https://twitter.com/burhansaglik"
    target="_blank"
    rel="noopener noreferrer"
    className="text-sky-500 hover:text-sky-700 dark:text-sky-400 dark:hover:text-white text-2xl transition-colors"
  >
    <FaTwitter />
  </a>
  <a
    href="https://www.instagram.com/burhan.sglk/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-pink-500 hover:text-pink-700 dark:text-pink-400 dark:hover:text-white text-2xl transition-colors"
  >
    <FaInstagram />
  </a>
</div>

{/* Scroll Down */}
<div className="absolute bottom-10 z-10 flex flex-col items-center animate-bounce">
  <a
    href="#blogs"
    className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
  >
    ↓ Bloglara Göz At
  </a>
</div>
      </section>

      <section data-aos="fade-down" id="blogs" className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-10">Bloglarım</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {blogData.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      {/* About Me Section */}
      <section data-aos="fade-down" id="about" className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Hakkımda</h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg">
          Merhaba! Ben Burhan, React.js ve modern web teknolojileri ile ilgilenen bir frontend geliştiricisiyim. Yazılımı, kullanıcı deneyimini ve minimalist tasarımları severim. Blog yazarak öğrendiklerimi paylaşmayı çok seviyorum.
        </p>
      </section>

      {/* Contact Section */}
      <section data-aos="fade-down" id="contact" className="py-20 px-6 bg-gray-100 dark:bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-8">İletişim</h2>
        <form className="max-w-xl mx-auto space-y-4">
          <input
            type="text"
            placeholder="Adınız"
            className="w-full p-3 rounded bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
          />
          <input
            type="email"
            placeholder="E-posta adresiniz"
            className="w-full p-3 rounded bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
          />
          <textarea
            placeholder="Mesajınız"
            rows={5}
            className="w-full p-3 rounded bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded transition"
          >
            Gönder
          </button>
        </form>
      </section>
    </main>
  )
}

export default Home
