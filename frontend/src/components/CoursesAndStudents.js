import React, { useEffect, useState } from "react";
import "../styles/courses-and-students.css";
import StudentField from "./StudentField";
import CourseField from "./CourseField";

export default function CoursesAndStudents({
  numOfCourses,
  numOfStudents,
  setNumOfCourses,
  setCoursesCapacities,
  setNumOfStudents,
  setBudgets,
  setCoursesToTake,
  setRatings,
  coursesCapacities,
  budgets,
  coursesToTake,
  ratings,
  isRandom,
}) {
  const [isCourseDataComplete, setIsCourseDataComplete] = useState(false);

  const [courseFields, setCourseFields] = useState([]);

  const [studentFields, setStudentFields] = useState([]);

  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessage2, setErrorMessage2] = useState("");

  const handleCourseNumberChange = (e) => {
    setNumOfCourses(parseInt(e.target.value) || 0);
  };

  const handleStudentNumberChange = (e) => {
    setNumOfStudents(parseInt(e.target.value) || 0);
  };

  const handleCousresCapacitiesChange = (courseIndex, e) => {
    setCoursesCapacities((prevState) => {
      const newState = {
        ...prevState,
        [`c${courseIndex}`]: parseInt(e.target.value) || 0,
      };
      return newState;
    });
  };

  const addCourseFields = () => {
    if (numOfCourses > 0) {
      setIsCourseDataComplete(true);
      const fields = (
        <div className="courseFields">
          {Array.from({ length: numOfCourses }, (_, i) => (
            <CourseField
              key={i}
              courseIndex={i}
              coursesCapacities={coursesCapacities}
              handleCousresCapacitiesChange={handleCousresCapacitiesChange}
            />
          ))}
        </div>
      );

      setCourseFields(fields);
    }
    else {
      setErrorMessage("The number of courses must be more than 0.");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
      return;
    }
  };

  const handleBudgetsChange = (studentIndex, e) => {
    setBudgets((prevState) => {
      const newState = {
        ...prevState,
        [`s${studentIndex}`]: parseFloat(e.target.value) || 0,
      };
      return newState;
    });
  };

  const handleNumberOfCoursesToTakeChange = (studentIndex, e) => {
    setCoursesToTake((prevState) => {
      const newState = {
        ...prevState,
        [`s${studentIndex}`]: parseInt(e.target.value) || 0,
      };
      return newState;
    });
  };

  const handleRatingsChange = (studentIndex, courseIndex, e) => {
    const rating = parseInt(e.target.value) || 0;
    setRatings((prevState) => {
      const newState = { ...prevState };

      if (!newState[`s${studentIndex}`]) {
        newState[`s${studentIndex}`] = {};
      }

      newState[`s${studentIndex}`][`c${courseIndex}`] = rating;

      console.log(newState);
      return newState;
    });
  };

  const addStudentFields = () => {
    if (isCourseDataComplete === false) {
      setErrorMessage2(
        `You have to insert the number of courses before countinue to the studetns part.`
      );
      setTimeout(() => {
        setErrorMessage2("");
      }, 5000);
      return;
    }

    const fields = (
      <div className="studentFields">
        {Array.from({ length: numOfStudents }, (_, i) => (
          <StudentField
            key={i}
            studentIndex={i}
            numOfCourses={numOfCourses}
            budgets={budgets}
            coursesToTake={coursesToTake}
            ratings={ratings}
            handleBudgetsChange={handleBudgetsChange}
            handleNumberOfCoursesToTakeChange={
              handleNumberOfCoursesToTakeChange
            }
            handleRatingsChange={handleRatingsChange}
          />
        ))}
      </div>
    );

    setStudentFields(fields);
  };

  useEffect(() => {
    if (isRandom) {
      addCourseFields();
    }
  }, [numOfCourses, isRandom]);

  useEffect(() => {
    if (isRandom && numOfCourses > 0 && numOfStudents > 0) {
      setIsCourseDataComplete(true);
      addStudentFields();
    }
  }, [courseFields, numOfStudents]);

  return (
    <div className="courses-and-students-container">
      <div className="fields-container">
        <label>Number Of Courses:</label>
        <input
          type="number"
          id="numberOfCourses"
          name="numberOfCourses"
          min="1"
          required
          className="num-of-courses-input"
          value={numOfCourses}
          onChange={handleCourseNumberChange}
        />
        <button type="button" onClick={addCourseFields} className="course-capacities-button">
          Next
        </button>
        
      </div>
      {isRandom === false && errorMessage && (
        <p className="error-message">{errorMessage}</p>
      )}
      <div id="courseFields">{courseFields}</div>
      <p>
        You have to insert the number of courses before continue to the studetns
        part. <br />
        After you insert the number of courses, click on the Next button.
      </p>
      <div className="fields-container">
        <label>Number Of Students:</label>
        <input
          type="number"
          id="numberOfStudents"
          name="numberOfStudents"
          min="1"
          required
          className="num-of-students-input"
          disabled={!isCourseDataComplete}
          value={numOfStudents}
          onChange={handleStudentNumberChange}
        />
        <button type="button" onClick={addStudentFields} className="students-fildes-button">
          Next
        </button>
      </div>
      {isRandom === false && errorMessage2 && (
        <p className="error-message">{errorMessage2}</p>
      )}

      <div id="studentFields">{studentFields}</div>
    </div>
  );
}
