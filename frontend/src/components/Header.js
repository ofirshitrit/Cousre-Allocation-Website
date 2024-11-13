import React from 'react'
import "../styles/header.css"
// TODO: fix the GUI
export default function Header({headerContent, setSelectedAlgorithm, inHomePage}) {

  const handleHomeButton = () => {
    setSelectedAlgorithm("")

  };

  return (
    <header>
    <div className="backgroundHeader">
        {inHomePage === false && <button id='home-btn' onClick={handleHomeButton}>Home</button>}
        <h1 id='header-content'>{headerContent}</h1>
        
    </div>
</header>
  )
}
