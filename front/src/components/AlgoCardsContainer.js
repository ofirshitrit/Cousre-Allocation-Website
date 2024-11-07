import React from 'react';
import AlgoCard from './AlgoCard';
import "../styles/algoCards.css"


export default function AlgoCardsContainer() {
  return (
    <div className='algosCardContainer'>
      <AlgoCard algoName = "ACEEI" algoDetailes = "Find a fair and envy-free allocation of courses to students." />
      <AlgoCard algoName = "Find Manipulation" algoDetailes = "Check whether ACEEI algorithm is manipulation-resistant." />
      <AlgoCard algoName = "Tabu Search" algoDetailes = "Find a fair allocation while considering the students' preferences." />
    </div>
  )
}
