import React from 'react'
import "../styles/header.css"

export default function Header({headerContent}) {
  return (
    <header>
    <div className="backgroundHeader">
        <h1>{headerContent}</h1>
    </div>
</header>
  )
}
