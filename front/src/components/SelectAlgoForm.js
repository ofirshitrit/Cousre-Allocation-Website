import React, {useState} from 'react'
import "../styles/select-algo-form.css"


export default function SelectAlgoForm({selectedAlgorithm, setSelectedAlgorithm}) {
  const [errorMessage, setErrorMessage] = useState("");


const handleSubmit = (e) => {
    e.preventDefault();
    const selectedValue = e.target.elements.algorithmSelect.value;
    if (selectedValue === "") {
      setErrorMessage("You have to choose an algorithm to continue.");
      setTimeout(() => {
        setErrorMessage('');
      }, 5000);
      return;
      
    }
    setErrorMessage("");
    setSelectedAlgorithm(selectedValue);
}

  return (

    <div className='form-container'>
      <h2>Try Our Algorithms Yourself</h2>
      <form action="/form" method="GET" id="algorithmForm" onSubmit={handleSubmit}>
          <label for="algorithm" className='select-algo'>Select an Algorithm:</label>
          <select id="algorithmSelect" name="algorithm">
              <option value="">Select</option>
              <option value="aceei">ACEEI</option>
              <option value="manipulation">Find Manipulation</option>
              <option value="tabusearch">Tabu Search</option>
          </select>
          {errorMessage && <p className="error-message">{errorMessage}</p>}

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
