"use client";

import Link from "next/link"
import { Menu } from "lucide-react"
import { useState } from "react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-background text-foreground border-b border-border">
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold transition-transform duration-300 transform hover:scale-105"
          >
            LS
          </Link>
          <div className="hidden md:flex space-x-6 items-center">
            <Link
              href="/"
              className="transition-transform duration-300 transform hover:scale-105 hover:text-accent-foreground transition-colors"
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="transition-transform duration-300 transform hover:scale-105 hover:text-accent-foreground transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/resume"
              className="transition-transform duration-300 transform hover:scale-105 hover:text-accent-foreground transition-colors"
            >
              Resume
            </Link>
            <a
              href="https://lekan.blog"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 transform hover:scale-105 hover:text-accent-foreground transition-colors"
            >
              Blog
            </a>
          </div>
          <button
            className="md:hidden transition transform duration-300 hover:scale-110"
            onClick={toggleMenu}
          >
            <Menu size={24} />
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link
              href="/"
              className="block transition-transform duration-300 transform hover:scale-105 hover:text-accent-foreground transition-colors"
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="block transition-transform duration-300 transform hover:scale-105 hover:text-accent-foreground transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/resume"
              className="block transition-transform duration-300 transform hover:scale-105 hover:text-accent-foreground transition-colors"
            >
              Resume
            </Link>
            <a
              href="https://lekan.blog"
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-transform duration-300 transform hover:scale-105 hover:text-accent-foreground transition-colors"
            >
              Blog
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header

