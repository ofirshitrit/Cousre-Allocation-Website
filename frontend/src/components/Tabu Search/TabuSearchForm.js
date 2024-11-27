import React, { useState } from "react";
import Header from "../Header";
import "../../styles/forms.css";
import CoursesAndStudents from "../CoursesAndStudents";
import Results from "../Results";
import TabuSearchParameters from "./TabuSearchParameters";
import RandomPart from "../RandomPart";
import { handleSubmit } from "../utils";

// TODO: fix the GUI
export default function TabuSearchForm({ setSelectedAlgorithm }) {
  const [results, setResults] = useState(null);
  const [displayResults, setDisplayResults] = useState(false);

  const [numOfCourses, setNumOfCourses] = useState(0);
  const [coursesCapacities, setCoursesCapacities] = useState({});

  const [numOfStudents, setNumOfStudents] = useState(0);
  const [budgets, setBudgets] = useState({});
  const [coursesToTake, setCoursesToTake] = useState({});
  const [ratings, setRatings] = useState({});

  const [beta, setBeta] = useState(1);
  const [deltas, setDeltas] = useState([]);

  const [isRandom, setIsRandom] = useState(false);

  const algoName = "Tabu Search";
  let formData = {
    coursesCapacities,
    budgets,
    coursesToTake,
    ratings,
    beta,
    deltas,
    algoName,
  };

  return (
    <>
      {displayResults === false && (
        <>
          <Header
            headerContent="Tabu Search Algorithm"
            setSelectedAlgorithm={setSelectedAlgorithm}
            inHomePage={false}
          />
          <form
            onSubmit={(e) =>
              handleSubmit(e, formData, setResults, setDisplayResults)
            }
            id="tabuSearchForm"
            className="form-container"
          >
            <RandomPart
              parameters={{
                algoName,
                setNumOfCourses,
                setCoursesCapacities,
                setNumOfStudents,
                setBudgets,
                setCoursesToTake,
                setRatings,
                setBeta,
                setDeltas,
                setIsRandom,
              }}
            />

            <CoursesAndStudents
              numOfCourses={numOfCourses}
              numOfStudents={numOfStudents}
              setNumOfCourses={setNumOfCourses}
              setCoursesCapacities={setCoursesCapacities}
              setNumOfStudents={setNumOfStudents}
              setBudgets={setBudgets}
              setCoursesToTake={setCoursesToTake}
              setRatings={setRatings}
              coursesCapacities={coursesCapacities}
              budgets={budgets}
              coursesToTake={coursesToTake}
              ratings={ratings}
              isRandom={isRandom}
            />

            <TabuSearchParameters
              setBeta={setBeta}
              deltas={deltas}
              setDeltas={setDeltas}
              beta={beta}
            />

            <input className="run-button" type="submit" value="Run" />
          </form>
        </>
      )}

      {displayResults === true && (
        <Results
          data={results}
          setSelectedAlgorithm={setSelectedAlgorithm}
          algoName={"Tabu Search"}
        />
      )}
    </>
  );
}
