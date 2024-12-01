import React from "react";
import DeltaField from "./DeltaField";

export default function TabuSearchParameters({
  setBeta,
  deltas,
  setDeltas,
  beta,
  deltaComponents,
  setDeltaComponents,
  handleDeltaChange,
}) {



  const handleBetaChange = (e) => {
    setBeta(parseInt(e.target.value) || 0);
  };
    

  const addDelta = () => {
    setDeltaComponents((prev) => [
      ...prev,
      <DeltaField
        key={prev.length}
        id={prev.length + 1}
        deltas={deltas}
        handleDeltaChange={handleDeltaChange}
        index={prev.length + 1}
        setDeltas={setDeltas}
        deltaComponents={deltaComponents}
        setDeltaComponents={setDeltaComponents}
      />,
    ]);

  };

  return (
    <div className="tabu-search-parameters">
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

        <label htmlFor="delta">Delta (δ):</label>
        <input
          className="delta-input"
          type="number"
          id="delta"
          name="delta"
          step="0.001"
          min="0.001"
          value={deltas[0]}
          onChange={(e) => {
            handleDeltaChange(e, 0);
          }}
          required
        />
        <button type="button" onClick={addDelta} className="add-delta-button">
          Add Delta
        </button>
      </div>


      {deltaComponents.map((deltaComponent) => deltaComponent)}



    </div>
  );
}
