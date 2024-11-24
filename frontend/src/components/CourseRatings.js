import React from 'react'

export default function CourseRatings({ studentIndex, numOfCourses, handleRatingsChange }) {
  return (
    <div className="ratingsGroup">
    <label className="labelRating">Ratings for Courses: </label>
    {Array.from({ length: Math.ceil(numOfCourses / 3) }, (_, rowIndex) => (
      <div className="ratingRow" key={rowIndex}>
        {Array.from({ length: 3 }, (_, j) => {
          const courseIndex = rowIndex * 3 + j;
          return courseIndex < numOfCourses ? (
            <div key={courseIndex} className="courseRating">
              <label className="labelCourseName">
                c{courseIndex + 1}:{" "}
              </label>
              <input
                type="number"
                min="1"
                className="input-course-name"
                required
                onChange={(e) =>
                  handleRatingsChange(studentIndex + 1, courseIndex + 1, e)
                }
              />
            </div>
          ) : null;
        })}
      </div>
    ))}
  </div>
  )
}
