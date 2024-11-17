import React from "react";
import "../../styles/aceei-parameters.css";

export default function AceeiParameters({setEpsilon,setDelate,setEftbStatus}) {
  
  const handleEpsilonChange = (e) => {
    setEpsilon(parseFloat(e.target.value) || 0.001)
  }

  const handleDeltaChange = (e) => {
    setDelate(parseFloat(e.target.value) || 0.001)
  }

  const handleEFTBChange = (e) => {
    setEftbStatus(e.target.value)
  }
  
  return (
    <div className="aceei-parameters">
      <div className="fields-container">
        <label htmlFor="epsilon">Epsilon (ε):</label>
        <input
          className="epsilon-input"
          type="number"
          id="epsilon"
          name="epsilon"
          step="0.001"
          min="0.001"
          onChange = {handleEpsilonChange}
          required
        />
      </div>
      <div class="fields-container">
        <label htmlFor="delta">Delta (δ):</label>
        <input
          className="delta-input"
          type="number"
          id="delta"
          name="delta"
          step="0.001"
          min="0.001"
          onChange={handleDeltaChange}
          required
        />
      </div>
      <div className="fields-container">
        <label htmlFor="eftb-selection">EF-TB status:</label>
        <select
          className="eftb-input"
          id="eftb-selection"
          name="eftb-selection"
          onChange={handleEFTBChange}
          required
        >
          <option value="EFTBStatus.NO_EF_TB">No EFTB</option>
          <option value="EFTBStatus.EF_TB">EFTB</option>
          <option value="EFTBStatus.CONTESTED_EF_TB">Contested EFTB</option>
        </select>
      </div>
    </div>
  );
}
