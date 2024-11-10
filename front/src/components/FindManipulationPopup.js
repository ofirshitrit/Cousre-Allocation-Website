import React from "react";
import "../styles/popups.css";

export default function FindManipulationPopup() {
  return (
    <div className="popup-content">
      <h2 id="algoName">Find a profitable manipulation for a student</h2>
      <div className="intro-container">
        <h3 className="intro-text">
          This algorithm is used to determine if a course allocation algorithm
          is strategy-proof.
          <br />
          A strategy-proof algorithm ensures that it is always better for
          participants to be truthful rather than lie.
          <br />
          In other words, if a participant lies they will get less benefit than
          if they were honest.
        </h3>
      </div>
      <h4>Algorithms parameters: </h4>
      <ul>
        <li>Course allocation algorithm to be tested and its parameters</li>
        <li>
          Student name to be checked for possible profitable manipulation and
          his course ratings
        </li>
        <li>
          Criterion for manipulation which tells how to sample the budgets for
          the allocation algorithm
        </li>
        <li>Eta parameter related to changes in the student's preferences.</li>
      </ul>

      <h4>How the algorithm works: </h4>
      <ul>
        <li>
          It starts with the student's true preferences and creates new false
          preferences using the eta parameter.
        </li>
        <li>
          For both the true and false preferences, it runs the course allocation
          algorithm and calculates the student's utility for each report.
        </li>
        <li>
          It then selects the preference that provided the highest utility.
        </li>
        <li>
          If this preference matches the student's true preferences exactly, the
          algorithm is strategy-proof.
        </li>
        <li>
          If not, the algorithm repeats the process using the preference that
          yielded the highest utility and returns that the algorithm is not
          strategy-proof.
        </li>
      </ul>
    </div>
  );
}
