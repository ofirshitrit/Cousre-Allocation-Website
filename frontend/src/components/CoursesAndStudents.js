import React, {useState } from "react";
import "../styles/courses-and-students.css";
import StudentField from './StudentField'
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
  isRandom
}) {
  const [isCourseDataComplete, setIsCourseDataComplete] = useState(false);

  const [courseFields, setCourseFields] = useState([]);

  const [studentFields, setStudentFields] = useState([]);

  const [errorMessage, setErrorMessage] = useState("");

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

  const addCourseFields =  () => {
    
    if (numOfCourses > 0) {
      setIsCourseDataComplete(true);
      console.log(`courses capacities: ${coursesCapacities}`);
      
      const fields = (
        <div className="courseFields">
          {Array.from({ length: numOfCourses }, (_, i) => (
            <CourseField 
              key={i}
              courseIndex = {i+1}
              coursesCapacities = {coursesCapacities}
              handleCousresCapacitiesChange = {handleCousresCapacitiesChange}
            />
          ))}
        </div>
      );
      setCourseFields(fields);
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
      setErrorMessage(
        `You have to fill the courses input first and click on the \u2714 button.`
      );
      setTimeout(() => {
        setErrorMessage("");
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
            handleBudgetsChange={handleBudgetsChange}
            handleNumberOfCoursesToTakeChange={handleNumberOfCoursesToTakeChange}
            handleRatingsChange={handleRatingsChange}
          />
        ))}
      </div>
    );
  
    setStudentFields(fields);
  };
  


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
        <button type="button" onClick={addCourseFields} className="V-Btn">
          &#10004;
        </button>
      </div>
      <div id="courseFields">
        {/* Fields for courses will be added dynamically  */}
        {courseFields}
      </div>
      <p>
        You have to insert the number of courses before continue to the studetns
        part. <br />
        After you insert the number of courses, click on the &#10004; button.
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
        <button type="button" onClick={addStudentFields} className="V-Btn">
          &#10004;
        </button>
      </div>
      {isRandom === false && errorMessage && <p className="error-message">{errorMessage}</p>}

      <div id="studentFields">
        {/* Fields for students will be added dynamically */}
        {studentFields}
      </div>
    </div>
  );
}
