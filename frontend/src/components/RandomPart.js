import React from "react";
import {
  handleRandomAceei,
  handleRandomFindManipulation,
  handleRandomTabuSearch,
} from "./utils";

export default function RandomPart({ parameters }) {

  const {
    algoName,
    setNumOfCourses,
    setCoursesCapacities,
    setNumOfStudents,
    setBudgets,
    setCoursesToTake,
    setRatings,
    setIsRandom,
  } = parameters;


  return (
    <>
      <h2>
        Insert the parameters and run the algorithm <br /> Or <br />
      </h2>
      <div className="random-container">
        <h2>Try with random example: </h2>
        <button
          className="random-button"
          type="button"
          onClick={() => {
            if (algoName === "ACEEI") {
              const {
                setEpsilon,
                setDelta,
                setEftbStatus,
              } = parameters;
            
              handleRandomAceei({
                setNumOfCourses,
                setCoursesCapacities,
                setNumOfStudents,
                setBudgets,
                setCoursesToTake,
                setRatings,
                setEpsilon,
                setDelta,
                setEftbStatus,
                setIsRandom,
              });
            } else if (algoName === "Find Manipulation") {
              const {
                setEpsilon,
                setDelta,
                setEftbStatus,
                setEta,
                setBeta,
                setChoosenStudent,
                setCretiriaForManipulation,
              } = parameters;

              handleRandomFindManipulation({
                setNumOfCourses,
                setCoursesCapacities,
                setNumOfStudents,
                setBudgets,
                setCoursesToTake,
                setRatings,
                setEpsilon,
                setDelta,
                setEftbStatus,
                setEta,
                setBeta,
                setChoosenStudent,
                setCretiriaForManipulation,
                setIsRandom,

              });
            } else if (algoName === "Tabu Search") {
              const {
                setBeta,
                setDeltas,
                setDeltaComponents,
                deltas, 
                handleDeltaChange, 
                deltaComponents,
              } = parameters;

              handleRandomTabuSearch({
                setNumOfCourses,
                setCoursesCapacities,
                setNumOfStudents,
                setBudgets,
                setCoursesToTake,
                setRatings,
                setBeta,
                setDeltas,
                setDeltaComponents,
                deltas, 
                handleDeltaChange, 
                deltaComponents,
                setIsRandom,
              });
            } else {
              console.error(
                "No handler function found for the specified algoName."
              );
            }
          }}
        >
          Random
        </button>
      </div>
    </>
  );
}
