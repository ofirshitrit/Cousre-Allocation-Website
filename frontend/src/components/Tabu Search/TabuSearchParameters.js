import React, { useState, useEffect } from 'react'

export default function TabuSearchParameters({setBeta, deltas, setDeltas}) {
  const [deltaInputs, setDeltaInputs] = useState([]);


  const handleBetaChange = (e) => {
    setBeta(parseInt(e.target.value) || 0)
    
  }

  const handleDeltaChange = (e, index) => {
  const newDelta = parseFloat(e.target.value) || 0;
  const updatedDeltas = [...deltas];
  updatedDeltas[index] = newDelta;
  setDeltas(updatedDeltas);
  }
 
  const addDelta = () => {
    setDeltaInputs([...deltaInputs, deltaInputs.length]);
    setDeltas([...deltas, 0]);
    console.log('Current deltas:', deltas);

    
  }

  const removeDelta = (indexToRemove) => {
    const filteredInputs = deltaInputs.filter(index => index !== indexToRemove);
    const updatedDeltas = deltas.filter((_, index) => index !== indexToRemove);
    
    setDeltaInputs(filteredInputs);
    setDeltas(updatedDeltas);
  }
 
  useEffect(() => {
    console.log('Deltas updated:', deltas);
  }, [deltas]);

  return (
    <div className='tabu-search-parameters'>
      <div className="fields-container">
        <label htmlFor="beta">Beta (β):</label>
        <input
          className="beta-input"
          type="number"
          id="beta"
          name="beta"
          step="1"
          min="1"
          onChange = {handleBetaChange}
          required
        />
      </div>

      <div className="fields-container">
        <label htmlFor="delta">Delta (δ):</label>
        <input className='delta-input' type="number" id="delta" name="delta" step="0.001" min="0.001" onChange={handleDeltaChange} required />
        <button type="button" onClick={addDelta} className="addDeltaBtn">Add Delta</button>
      </div>
      
      {deltaInputs.map((_, index) => (
        <div key={index} className="fields-container">
          <label htmlFor={`delta-${index + 1}`}>Delta (δ):</label>
          <input 
            className='delta-input' 
            type="number" 
            id={`delta-${index + 1}`} 
            name={`delta-${index + 1}`} 
            step="0.001" 
            min="0.001" 
            onChange={(e) => handleDeltaChange(e, index + 1)} 
            required 
          />
          <button type="button" onClick={addDelta} className="addDeltaBtn">Add Delta</button>

          <button 
            type="button" 
            onClick={() => removeDelta(index)} 
            className="removeDeltaBtn"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  )
}
