import React, { useState } from "react";
import '../styles/courses-and-students.css'

export default function CoursesAndStudents() {
  const [isNumCoursesFilled, setIsNumCoursesFilled] = useState(false);

  const [numOfCourses, setNumOfCourses] = useState(0);
  const [courseFields, setCourseFields] = useState([]);

  const [numOfStudents, setNumOfStudents] = useState(0);
  const [studentFields, setStudentFields] = useState([]);

  const [errorMessage, setErrorMessage] = useState("");


  const handleCourseNumberChange = (e) => {
    setNumOfCourses(parseInt(e.target.value) || 0);
  };

  const handleStudentNumberChange = (e) => {
    setNumOfStudents(parseInt(e.target.value) || 0);
  };

  const addCourseFields = () => {
    if (numOfCourses > 0) {
      setIsNumCoursesFilled(true);

      const fields = (
        <div className="courseFields">
          {Array.from({ length: numOfCourses }, (_, i) => (
            <div className="courseField" key={i}>
              <label>Course {i + 1} Capacity: </label>
              <input
                type="number"
                min="1"
                name={`c${i + 1}Capacity`}
                className="capacityInput"
                required
              />
            </div>
          ))}
        </div>
      );
      setCourseFields(fields);
    }
  };

  const addStudentFields = () => {

    if (isNumCoursesFilled === false) {
      setErrorMessage(`You have to fill the courses input first and click on the \u2714 button;.`);
      setTimeout(() => {
        setErrorMessage('');
      }, 5000);
      return;
    }

    const fields = (
      <div className="studentFields">
        {Array.from({ length: numOfStudents }, (_, i) => (
          <div key={i} className="studentField">
            <div className="studentLabel">Student {i + 1}</div>
            <div className="budget-container">
              <label className="labelBudget">Student's Budget: </label>
              <input type="number" min="1" required />
            </div>
            <div className="fieldGroup">
              <label className="labelCoursesToTake">Number of courses to take: </label>
              <input type="number" min="1" required />
            </div>
            <div className="ratingsGroup">
              <label className="labelRating">Ratings for Courses: </label>
              <div className="ratingRow">
                {Array.from({ length: numOfCourses }, (_, j) => (
                  <div key={j} className="courseRating">
                    <label className="labelCourseName">c{j + 1}: </label>
                    <input type="number" min="1" required />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))};
      </div>
    );
    setStudentFields(fields);
  };

  return (
    <div className="CoursesAndStudents-container">
      <div class="fieldsContainer">
        <label for="numberOfCourses">Number of Courses:</label>
        <input
          type="number"
          id="numberOfCourses"
          name="numberOfCourses"
          min="1"
          required
          className="numOfCoursesInput"
          onChange={handleCourseNumberChange}
        />
        <button type="button" onClick={addCourseFields} class="V-Btn">
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
      <div class="fieldsContainer">
        <label for="numberOfStudents">Number of Students:</label>
        <input
          type="number"
          id="numberOfStudents"
          name="numberOfStudents"
          min="1"
          required
          className="numOfStudentsInput"
          disabled={!isNumCoursesFilled}
          onChange={handleStudentNumberChange}
        />
        <button type="button" onClick={addStudentFields} class="V-Btn">
          &#10004;
        </button>
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <div id="studentFields">
        {/* Fields for students will be added dynamically */}
        {studentFields}
      </div>
    </div>
  );
}
