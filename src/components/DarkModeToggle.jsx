import React from 'react'

const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
  // TODO: Implement dark mode toggle logic
  const handleToggle = () => {
    toggleDarkMode(!isDarkMode)
  }
  
  return (
    <button className="theme-toggle-btn" onClick={handleToggle}>
      Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
    </button>
  )
}

export default DarkModeToggle
