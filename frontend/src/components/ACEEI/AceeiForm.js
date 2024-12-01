import React, { useState } from "react";
import Header from "../Header";
import "../../styles/forms.css";
import CoursesAndStudents from "../CoursesAndStudents";
import Results from "../Results";
import AceeiParameters from "./AceeiParameters";
import RandomPart from "../RandomPart";
import { handleSubmit } from "../utils";

export default function AceeiForm({ setSelectedAlgorithm }) {
  const [results, setResults] = useState(null);
  const [displayResults, setDisplayResults] = useState(false);

  const [numOfCourses, setNumOfCourses] = useState(0);
  const [coursesCapacities, setCoursesCapacities] = useState({});

  const [numOfStudents, setNumOfStudents] = useState(0);
  const [budgets, setBudgets] = useState({});
  const [coursesToTake, setCoursesToTake] = useState({});
  const [ratings, setRatings] = useState({});

  const [epsilon, setEpsilon] = useState(0);
  const [delta, setDelta] = useState(0);
  const [eftbStatus, setEftbStatus] = useState("no-eftb");

  const [isRandom, setIsRandom] = useState(false);
  const [loading, setLoading] = useState(false);

  const algoName = "ACEEI";
  let formData = {
    coursesCapacities,
    budgets,
    coursesToTake,
    ratings,
    epsilon,
    delta,
    eftbStatus,
    algoName,
  };

  return (
    <>
      {displayResults === false && (
        <>
          <Header
            headerContent="ACEEI Algorithm"
            setSelectedAlgorithm={setSelectedAlgorithm}
            inHomePage={false}
          />
          <form
            onSubmit={(e) =>
              {
                const parameters = [
                  e,
                  formData,
                  setResults,
                  setDisplayResults,
                  setLoading,
                ];
                handleSubmit(parameters)
              }
            }
            id="aceeiForm"
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
                setEpsilon,
                setDelta,
                setEftbStatus,
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

            <AceeiParameters
              setEpsilon={setEpsilon}
              setDelta={setDelta}
              setEftbStatus={setEftbStatus}
              epsilon={epsilon}
              delta={delta}
              eftbStatus={eftbStatus}
            />

            <input className="run-button" type="submit" value="Run" />
          </form>

          {loading && (
            <div className="loading-modal">
              <p>Loading...</p>
            </div>
          )}
        </>
      )}

      {displayResults === true && (
        <Results
          data={results}
          setSelectedAlgorithm={setSelectedAlgorithm}
          algoName={"ACEEI"}
          setDisplayResults={setDisplayResults}
        />
      )}
    </>
  );
}
