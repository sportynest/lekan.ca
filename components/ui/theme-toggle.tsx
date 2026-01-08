'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'
import { Sun01Icon, Moon01Icon, ComputerIcon } from 'hugeicons-react'

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button className={`theme-toggle${className ? ` ${className}` : ''}`}>
        <ComputerIcon size={16} />
      </button>
    )
  }

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else if (theme === 'dark') {
      setTheme('system')
    } else {
      setTheme('light')
    }
  }

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun01Icon size={16} />
      case 'dark':
        return <Moon01Icon size={16} />
      default:
        return <ComputerIcon size={16} />
    }
  }

  return (
    <button
      className={`theme-toggle${className ? ` ${className}` : ''}`}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'} mode`}
    >
      {getIcon()}
    </button>
  )
}
