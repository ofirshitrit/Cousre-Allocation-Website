import React from "react";

export default function CourseField({ courseIndex, coursesCapacities,  handleCousresCapacitiesChange }) {
  return (
    <div className="courseField">
      <label className="capacityLabel">Course {courseIndex + 1} Capacity: </label>
      <input
        type="number"
        min="1"
        name={`c${courseIndex + 1} Capacity`}
        className="capacity-input"
        required
        value={coursesCapacities[`c${courseIndex +1}`] || ""}
        onChange={(e) => handleCousresCapacitiesChange(courseIndex, e)}
      />
    </div>
  );
}
