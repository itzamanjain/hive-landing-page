"use client"
import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { title: "Team", path: "/mentors" },
    { title: "About", path: "/about" },
    { title: "Resources", path: "/" },
    { title: "Mentors", path: "/mentors" },
    { title: "Events", path: "/" },
    { title: "Community", path: "" },
    { title: "Contact", path: "/" },
  ]

  return (
    <nav className="relative w-full px-4 py-5 mx-auto sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <img src="/hivedark.svg" width={150} height={70} alt="Hive Resource Hub" className="h-20 w-auto" />
        </Link>
        <div className="flex items-center lg:hidden">
          <button
            className="text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        <div className="hidden lg:flex lg:items-center lg:justify-between lg:w-full lg:ml-12">
          <ul className="flex space-x-8">
            {navigation.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.path}
                  className="text-gray-500 hover:text-yellow-400 text-lg transition-colors duration-200"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <button className="inline-flex h-12 items-center justify-center font-geist rounded-3xl border border-gray-800 bg-white px-6 font-medium text-gray-950 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50">
            Get Started
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden mt-4">
          <ul className="flex flex-col space-y-4">
            {navigation.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.path}
                  className="text-gray-500 hover:text-yellow-400 text-lg transition-colors duration-200 block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <button className="mt-6 w-full inline-flex h-12 items-center justify-center font-geist rounded-3xl border border-gray-800 bg-white px-6 font-medium text-gray-950 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50">
            Get Started
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar

