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

  const [epsilon, setEpsilon] = useState(0.001);
  const [delta, setDelate] = useState(0.001);
  const [eftbStatus, setEftbStatus] = useState("no-eftb");

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
      "algoName": "ACEEI"
    }

    

    const data = Object.fromEntries(Object.entries(formData));
    
    try {
      // Send data to Flask backend
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
              <button>Random</button>
            </div>
            <input type="submit" value="Run" />

            <CoursesAndStudents
              numOfCourses={numOfCourses}
              numOfStudents={numOfStudents}
              setNumOfCourses={setNumOfCourses}
              setCoursesCapacities={setCoursesCapacities}
              setNumOfStudents={setNumOfStudents}
              setBudgets={setBudgets}
              setCoursesToTake={setCoursesToTake}
              setRatings={setRatings}
            />

            <AceeiParameters 
            setEpsilon={setEpsilon}
            setDelate={setDelate}
            setEftbStatus={setEftbStatus}

             />
            
          </form>
        </>
      )}

      {displayResults === true && (
        <Results data={results} setSelectedAlgorithm={setSelectedAlgorithm} algoName={"ACEEI"} />
      )}
    </>
  );
}
