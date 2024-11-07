import React from 'react'

export default function AlgoCard({algoName, algoDetailes}) {
  return (
    <>
      <div className="algoContainer">
        <h3 id="titleOfAlgorCard">
            {algoName}
        </h3>
        <p>{algoDetailes}</p>
        <button className="learnMoreBtn" onclick="openPopup('aceeiPopup')">Learn More</button>
      </div>
    </>
  )
}
