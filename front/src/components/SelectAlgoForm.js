import React from 'react'
import "../styles/selectAlgoForm.css"


export default function SelectAlgoForm({selectedAlgorithm, setSelectedAlgorithm}) {

const handleSubmit = (e) => {
    e.preventDefault();
    setSelectedAlgorithm(e.tarfet.value)
}

  return (

    <div className='form-container'>
      <h2>Try Our Algorithms Yourself</h2>
      <form action="/form" method="GET" id="algorithmForm" onSubmit={handleSubmit}>
          <label for="algorithm">Select an Algorithm:</label>
          <select id="algorithmSelect" name="algorithm">
              <option value="">Select</option>
              <option value="aceei">ACEEI</option>
              <option value="manipulation">Find Manipulation</option>
              <option value="tabusearch">Tabu Search</option>
          </select>
          <button type="submit" id="tryButton">
              Try
              <div className="arrow">
                  <span></span>
                  <span></span>
                  <span></span>
              </div></button>
      </form>
    </div>
  )
}
