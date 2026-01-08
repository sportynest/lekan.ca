"use client"

import { Github01Icon, Linkedin01Icon } from "hugeicons-react"
import { ThemeToggle } from "../../components/ui/theme-toggle"
import "../footer.css"

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-left">
        <div className="footer-social-links">
          <a
            href="https://github.com/sportynest"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-icon first-child"
          >
            <Github01Icon size={16} />
          </a>
          <a
            href="https://linkedin.com/in/lekan-soyewo"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-icon"
          >
            <Linkedin01Icon size={16} />
          </a>
          <ThemeToggle className="last-child" />
        </div>
      </div>
    </footer>
  )
}

export default Footer

