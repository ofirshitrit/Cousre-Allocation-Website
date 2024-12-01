import React from "react";
import Header from "./Header";
import '../styles/results.css'

export default function Results({ data, setSelectedAlgorithm, algoName, setDisplayResults }) {
  
  const renderCourses = (courses) => {
    return Object.keys(courses).map(courseId => {
      return `Course ${courses[courseId].slice(1)}`;
    }).join(', ');
  };

  const renderStudents = (studentId) => {
      return "Student " + studentId.slice(1);;
  };

  const handleTryAgainButton = () => {
      if (algoName === 'ACEEI') {
        setSelectedAlgorithm('aceei')
      } else if (algoName === 'Tabu Search') {
        setSelectedAlgorithm('tabusearch')
      }
      else {
        setSelectedAlgorithm('')
      }
      setDisplayResults(false)
  }
  return (
    <>
      <Header
            headerContent="Course Allocation Results"
            setSelectedAlgorithm={setSelectedAlgorithm}
            inHomePage={false}
          />

      <div className="results-container">
        <h2>{algoName} Results:</h2> 
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Courses The Student Gets</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(data).map((studentKey) => (
                <tr key={studentKey}>
                  <td>{renderStudents(studentKey)}</td>
                  <td>{renderCourses(data[studentKey])}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="try-again-button" onClick={handleTryAgainButton}>
          Try The Algorithm Again
          </button>
        </div>

        
      </div>        
    </>
  );
}
