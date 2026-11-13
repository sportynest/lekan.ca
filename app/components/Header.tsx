"use client";

import Link from "next/link"
import { Home01Icon, File02Icon, News01Icon } from "hugeicons-react";
import ThemeLink from "./ThemeLink"
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
            <Link
              href="/resume"
              className="header-nav-link"
            >
              <File02Icon size={16} />
              Resume
            </Link>
            <ThemeLink
              href="https://lekan.blog"
              className="header-nav-link last-child"
            >
              <News01Icon size={16} />
              Blog
            </ThemeLink>
          </div>
      </nav>
    </header>
  )
}

export default Header