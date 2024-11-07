import React from 'react'
import Header from './Header';

export default function FindManipulationForm({setSelectedAlgorithm}) {
  return (
    <>
      <Header headerContent= "Find Manipulation Algorithm" setSelectedAlgorithm={setSelectedAlgorithm} inHomePage={false}/>
    </>
  )
}
