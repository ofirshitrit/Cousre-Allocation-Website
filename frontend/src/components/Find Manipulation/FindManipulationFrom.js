import React, { useState } from "react";
import Header from "../Header";
import CoursesAndStudents from "../CoursesAndStudents";
import Results from "../Results";
import AceeiParameters from "../ACEEI/AceeiParameters";
import RandomPart from "../RandomPart";
import { handleSubmit } from "../utils";
import FindManipulationParameters from "./FindManipulationParameters";
import FindManipulationResults from "../FindManipulationResults";

// TODO: add all the FindManipulationForm parameters
// TODO: fix the GUI
export default function FindManipulationForm({ setSelectedAlgorithm }) {
  const [results, setResults] = useState(null);
  const [manipulationStatus, setManipulationStatus] = useState("");
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
  const [choosenStudent, setChoosenStudent] = useState("");
  const [eta, setEta] = useState(0);
  const [beta, setBeta] = useState(1);
  const [cretiriaForManipulation, setCretiriaForManipulation] = useState("");

  const [isRandom, setIsRandom] = useState(false);

  const [loading, setLoading] = useState(false);

  const algoName = "Find Manipulation";
  let formData = {
    coursesCapacities,
    budgets,
    coursesToTake,
    ratings,
    epsilon,
    eftbStatus,
    algoName,
    delta,
    choosenStudent,
    eta,
    beta,
    cretiriaForManipulation,
  };

  const handleChoosenStudentChange = (e) => {
    setChoosenStudent(e.target.value);
  };

  return (
    <>
      {displayResults === false && (
        <>
          <Header
            headerContent="Find Manipulation Algorithm"
            setSelectedAlgorithm={setSelectedAlgorithm}
            inHomePage={false}
          />
          <form
            onSubmit={(e) => {
              const parameters = [
                e,
                formData,
                setResults,
                setDisplayResults,
                setLoading,
                { setManipulationStatus },
              ];

              handleSubmit(parameters);
            }}
            id="findManipulationForm"
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
                setEftbStatus,
                setDelta,
                setChoosenStudent,
                setEta,
                setBeta,
                setCretiriaForManipulation,
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

            <div className="choosen-student-container">
              <div className="fields-container">
                <label htmlFor="student-selection">Choose Student:</label>
                <select
                  className="student-input"
                  id="student-selection"
                  name="student-selection"
                  value={choosenStudent}
                  onChange={handleChoosenStudentChange}
                  required
                >
                  {Array.from({ length: numOfStudents }, (_, i) => (
                    <option key={i} value={`s${i + 1}`}>{`Student ${
                      i + 1
                    }`}</option>
                  ))}
                </select>
              </div>
            </div>

            <AceeiParameters
              setEpsilon={setEpsilon}
              setDelta={setDelta}
              setEftbStatus={setEftbStatus}
              epsilon={epsilon}
              delta={delta}
              eftbStatus={eftbStatus}
            />

            <FindManipulationParameters
              eta={eta}
              setEta={setEta}
              beta={beta}
              setBeta={setBeta}
              cretiriaForManipulation={cretiriaForManipulation}
              setCretiriaForManipulation={setCretiriaForManipulation}
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
        <FindManipulationResults
          data={manipulationStatus}
          setSelectedAlgorithm={setSelectedAlgorithm}
          algoName={"Find Maipulation"}
          setDisplayResults={setDisplayResults}
        />
      )}
    </>
  );
}
