import React from 'react'
import "../styles/header.css"

export default function Header({headerContent, setSelectedAlgorithm, inHomePage}) {

  const handleHomeButton = () => {
    setSelectedAlgorithm("")

  };

  return (
    <header>
    <div className="backgroundHeader">
        {inHomePage === false && <button onClick={handleHomeButton}>Home</button>}
        <h1>{headerContent}</h1>
        
    </div>
</header>
  )
}
