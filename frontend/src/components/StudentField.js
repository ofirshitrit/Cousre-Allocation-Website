import React from 'react'
import CourseRatings from './CourseRatings'

export default function StudentField({ studentIndex, numOfCourses,budgets,coursesToTake,ratings, handleBudgetsChange, handleNumberOfCoursesToTakeChange, handleRatingsChange }) {
  return (
    <div className="studentField">
    <div className="studentLabel">Student {studentIndex + 1}</div>
    <div className="budget-container">
      <label className="labelBudget">Student's Budget: </label>
      <input
        type="number"
        min="1"
        className="input-budget"
        required
        value={budgets[`s${studentIndex + 1}`]}
        onChange={(e) => handleBudgetsChange(studentIndex + 1, e)}
      />
    </div>
    <div className="num-of-courses-container">
      <label className="labelCoursesToTake">
        Number of courses to take:
      </label>
      <input
        type="number"
        min="1"
        className="input-courses-to-take"
        required
        value={coursesToTake[`s${studentIndex + 1}`]}
        onChange={(e) => handleNumberOfCoursesToTakeChange(studentIndex + 1, e)}
      />
    </div>
    <CourseRatings
      studentIndex={studentIndex}
      numOfCourses={numOfCourses}
      ratings={ratings}
      handleRatingsChange={handleRatingsChange}
    />
  </div>
  )
}
