import React, { useState } from "react";
import Header from "../Header";
import "../../styles/forms.css";
import CoursesAndStudents from "../CoursesAndStudents";
import Results from "../Results";
import AceeiParameters from "./AceeiParameters";

// TODO: fix the GUI

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
  const [delta, setDelate] = useState(0);
  const [eftbStatus, setEftbStatus] = useState("no-eftb");

  const [isRandom, setIsRandom] = useState(false)

  const handleRandomClick = () => {
    setIsRandom(true);
    const randomNumOfCourses = Math.floor(Math.random() * 5) + 2;
    const randomNumOfStudents = Math.floor(Math.random() * 10) + 1;

    const randomCoursesCapacities = {};
    for (let i = 0; i < randomNumOfCourses; i++) {
      randomCoursesCapacities[`course${i+1}`] =
        Math.floor(Math.random() * 10) + 5;
    }

    const randomBudgets = {};
    for (let i = 0; i < randomNumOfStudents; i++) {
      randomBudgets[`student${i}`] = Math.floor(Math.random() * 100) + 30;

      const randomCoursesToTake = {};
      for (let i = 0; i < randomNumOfStudents; i++) {
        randomCoursesToTake[`student${i}`] = Array.from(
          { length: Math.floor(Math.random() * randomNumOfCourses) + 1 },
          () => `course${Math.floor(Math.random() * randomNumOfCourses)}`
        );
      }

      const randomRatings = {};
      for (let i = 0; i < randomNumOfStudents; i++) {
        randomRatings[`student${i}`] = {};
        for (let j = 0; j < randomNumOfCourses; j++) {
          randomRatings[`student${i}`][`course${j}`] =
            Math.floor(Math.random() * 30) + 1;
        }
      }

      const randomEpsilon = parseFloat((Math.random() * 0.1).toFixed(3));
      const randomDelta = parseFloat((Math.random() * 0.5).toFixed(3));
      const eftbOptions = [
        "EFTBStatus.NO_EF_TB",
        "EFTBStatus.EF_TB",
        "EFTBStatus.CONTESTED_EF_TB",
      ];
      const randomEftbStatus =
        eftbOptions[Math.floor(Math.random() * eftbOptions.length)];

      // Update state
      setNumOfCourses(randomNumOfCourses);
      setCoursesCapacities(randomCoursesCapacities);
      setNumOfStudents(randomNumOfStudents);
      setBudgets(randomBudgets);
      setCoursesToTake(randomCoursesToTake);
      setRatings(randomRatings);
      setEpsilon(randomEpsilon);
      setDelate(randomDelta);
      setEftbStatus(randomEftbStatus);
    }
  }

    const handleSubmit = async (e) => {
      console.log("in handleSubmit");

      e.preventDefault();

      const formData = {
        coursesCapacities,
        budgets,
        coursesToTake,
        ratings,
        epsilon,
        delta,
        eftbStatus,
        algoName: "ACEEI",
      };

      const data = Object.fromEntries(Object.entries(formData));

      try {
        const response = await fetch("http://127.0.0.1:5000/process", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          const jsonResponse = await response.json();
          setResults(jsonResponse.results);
          setDisplayResults(true);
        } else {
          console.error("Failed to submit form.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
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
              onSubmit={handleSubmit}
              id="aceeiForm"
              className="form-container"
            >
              <h2>
                Insert the parameters and run the algorithm <br /> Or <br />
              </h2>
              <div className="random-container">
                <h2>Try with random example: </h2>
                <button className="random-button" onClick={handleRandomClick}>
                  Random
                </button>
              </div>

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
                isRandom={isRandom}
              />

              <AceeiParameters
                setEpsilon={setEpsilon}
                setDelate={setDelate}
                setEftbStatus={setEftbStatus}
                epsilon={epsilon}
                delta={delta}
                eftbStatus={eftbStatus}
              />

              <input className="run-button" type="submit" value="Run" />
            </form>
          </>
        )}

        {displayResults === true && (
          <Results
            data={results}
            setSelectedAlgorithm={setSelectedAlgorithm}
            algoName={"ACEEI"}
          />
        )}
      </>
    );
  };
