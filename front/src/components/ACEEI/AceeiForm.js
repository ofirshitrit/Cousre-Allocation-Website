import React from 'react'
import Header from '../Header';

export default function AceeiForm({setSelectedAlgorithm}) {
  return (
    <>
      <Header headerContent= "ACEEI Algorithm" setSelectedAlgorithm={setSelectedAlgorithm} inHomePage={false}/>
    </>
  )
}
