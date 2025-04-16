import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-white dark:bg-neutral-900 border-t border-gray-200 dark:border-neutral-700 pt-10 pb-6 mt-12 text-sm text-gray-600 dark:text-gray-400">
      <div className="max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-3 items-start">
        {/* Site Haritası */}
        <div>
          <h4 className="font-semibold text-gray-700 dark:text-white mb-2">Site Haritası</h4>
          <ul className="space-y-1">
            <li><a href="#home" className="hover:underline">Ana Sayfa</a></li>
            <li><a href="#about" className="hover:underline">Hakkımda</a></li>
            <li><a href="#blogs" className="hover:underline">Blog</a></li>
            <li><a href="#projects" className="hover:underline">Projeler</a></li>
            <li><a href="#contact" className="hover:underline">İletişim</a></li>
          </ul>
        </div>

        {/* İletişim */}
        <div>
          <h4 className="font-semibold text-gray-700 dark:text-white mb-2">İletişim</h4>
          <p>sglk.burhan@gmail.com</p>
          <p>Niğde, Türkiye</p>
        </div>

        {/* Sosyal & Yukarı Düğmesi */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-4">
            <a href="https://github.com/BurhanSglk" target="_blank" aria-label="GitHub">
              <Github size={20} className="hover:text-black dark:hover:text-white transition" />
            </a>
            <a href="https://www.linkedin.com/in/burhan-sağlıkk" target="_blank" aria-label="LinkedIn">
              <Linkedin size={20} className="hover:text-blue-700 dark:hover:text-blue-400 transition" />
            </a>
            <a href="mailto:sglk.burhan@gmail.com" aria-label="Mail">
              <Mail size={20} className="hover:text-red-600 dark:hover:text-red-400 transition" />
            </a>
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-xs text-gray-600 hover:text-black dark:hover:text-white transition"
          >
            <ArrowUp size={16} /> Yukarı Çık
          </button>
        </div>
      </div>

      <div className="text-center mt-8 text-xs text-gray-500 dark:text-gray-500">
        © {new Date().getFullYear()} Burhan Sağlık. Tüm hakları saklıdır.
      </div>
    </footer>
  )
}

export default Footer
