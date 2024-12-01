import React from "react";
import Header from "./Header";
export default function FindManipulationResults({
  data,
  setSelectedAlgorithm,
  algoName,
}) {

  const manipulationStatus = (data === "NO MANIPULATION" ? "NO" : "YES")
  console.log('====================================');
  console.log("manipulationStatus: ", manipulationStatus);
  console.log('====================================');
  return (
    <>
      <Header
        headerContent="Course Allocation Results"
        setSelectedAlgorithm={setSelectedAlgorithm}
        inHomePage={false}
      />

      <div className="results-container">
        <h2>{algoName} Results:</h2>
        {manipulationStatus === "NO" ? (<p>There is no manipulation.</p>) : (<p>There is manipulation.</p>)}
      </div>
    </>
  );
}
