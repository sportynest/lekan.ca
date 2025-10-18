"use client";

import Link from "next/link"
import { Home01Icon, File02Icon, News01Icon } from "hugeicons-react";
import "../header.css"

const Header = () => {
  return (
    <header className="header">
      <nav className="header-nav">
          <div className="header-left">
            <Link
              href="/"
              className="header-logo"
            >
              
            </Link>
          </div>
          <div className="header-nav-links">
            <Link
              href="/"
              className="header-nav-link first-child"
            >
              <Home01Icon size={16} />
              Home
            </Link>
            <a
              href="https://cdn.cognora.ca/Lekan.blog/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="header-nav-link"
            >
              <File02Icon size={16} />
              Resume
            </a>
            <a
              href="https://lekan.blog"
              target="_blank"
              rel="noopener noreferrer"
              className="header-nav-link last-child"
            > 
              <News01Icon size={16} />
              Blog
            </a>
          </div>
      </nav>
    </header>
  )
}

export default Header