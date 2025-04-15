import { Link, NavLink } from "react-router-dom"
import { useState, useEffect } from "react"
import { Menu, X, Sun, Moon } from "lucide-react"

type NavbarProps = {
  setPath: (path: string) => void
  path: string
}

const Navbar = ({setPath , path} : NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark", !darkMode)
    localStorage.setItem("theme", !darkMode ? "dark" : "light")
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      setDarkMode(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const navItems = [
    { name: "Home", path: "home" },
    { name: "Blogs", path: "blogs" },
    { name: "About Me", path: "about" },
    { name: "Contact", path: "contact" },
  ]

  return (
    <nav className="bg-white dark:bg-gray-900 shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
            <div className="text-5xl drop-shadow-2xl font-golden dark:text-gray-300">
            <Link to="/">Burhan Saglik</Link>
        </div>

        {/* Menü - Masaüstü */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.path}
              onClick={() => setPath(item.path)}
              className={`cursor-pointer transition-colors duration-200 ${
                path === item.path
                  ? 'text-blue-600 font-semibold underline underline-offset-4'
                  : 'text-gray-600 hover:text-blue-500'
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>


        {/* Dark Mode + Mobil Menü Butonu */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobil Menü Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700 dark:text-gray-200"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobil Menü */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `block py-2 transition ${
                  isActive
                    ? "text-blue-600 dark:text-blue-400 font-semibold"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
