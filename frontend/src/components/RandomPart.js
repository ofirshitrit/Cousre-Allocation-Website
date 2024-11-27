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
                setDelate,
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
                setDelate,
                setEftbStatus,
                setIsRandom,
              });
            } else if (algoName === "Find Manipulation") {
              const {
                setEpsilon,
                setDelate,
                setEftbStatus,
                setEta,
                setBeta,
                // TODO: FILL THIS FOR MANIPULATION
              } = parameters;

              handleRandomFindManipulation({
                setNumOfStudents,
                setBudgets,
                setCoursesToTake,
                setRatings,
                setIsRandom,
              });
            } else if (algoName === "Tabu Search") {
              const {
                setBeta,
                setDeltas,
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
