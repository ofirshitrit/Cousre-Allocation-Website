import React from "react";

export default function FindManipulationParameters({
  eta,
  setEta,
  beta,
  setBeta,
  cretiriaForManipulation,
  setCretiriaForManipulation,
}) {

  const handleEtaChange = (e) => {
    setEta(parseInt(e.target.value))
  }

  const handleBetaChange = (e) => {
    setBeta(parseInt(e.target.value))
  }

  const handlecretiriaForManipulationChange = (e) => {
    setCretiriaForManipulation(e.target.value)
  }
  return (
    <div className="findmanipulation-parameters">
      <div className="fields-container">
        <label htmlFor="eta">Eta (η):</label>
        <input
          className="eta-input"
          type="number"
          id="eta"
          name="eta"
          step="1"
          min="1"
          value={eta}
          onChange={handleEtaChange}
          required
        />
      </div>
      <div className="fields-container">
        <label htmlFor="beta">Beta (β):</label>
        <input
          className="beta-input"
          type="number"
          id="beta"
          name="beta"
          step="1"
          min="1"
          value={beta}
          onChange={handleBetaChange}
          required
        />
      </div>
      <div className="fields-container">
        <label htmlFor="criteria-for-profitable-manipulation-selection">
          Criteria for Profitable Manipulation:
        </label>
        <select
          className="criteria-for-profitable-manipulation-input"
          id="criteria-for-profitable-manipulation-selection"
          name="criteria-for-profitable-manipulation-selection"
          value={cretiriaForManipulation}
          onChange={handlecretiriaForManipulationChange}
          required
        >
          <option value="criteria_for_profitable_manipulation.randomness">
            Randomness
          </option>
          <option value="criteria_for_profitable_manipulation.population">
            Population
          </option>
        </select>
      </div>
    </div>
  );
}
