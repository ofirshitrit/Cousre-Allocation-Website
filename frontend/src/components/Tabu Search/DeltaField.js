import React from "react";

export default function DeltaField({ deltas, handleDeltaChange, index, setDeltas, deltaComponents, setDeltaComponents }) {

  const removeDelta = (indexToRemove) => {
    const filteredDeltas = deltaComponents.filter(
      (index) => index !== indexToRemove
    );
    const updatedDeltas = deltas.filter((_, index) => index !== indexToRemove);
    setDeltaComponents(filteredDeltas)
    setDeltas(updatedDeltas);
  };

  return (
    <div className="fields-container">
      <label htmlFor={`delta-${index + 1}`}>Delta (δ):</label>
      <input
        className="delta-input"
        type="number"
        id={`delta-${index + 1}`}
        name={`delta-${index + 1}`}
        step="0.001"
        min="0.001"
        value={deltas[index]}
        onChange={(e) => handleDeltaChange(e, index + 1)}
        required
      />

      <button
        type="button"
        onClick={() => removeDelta(index)}
        className="removeDeltaBtn"
      >
        Remove
      </button>
    </div>
  );
}
