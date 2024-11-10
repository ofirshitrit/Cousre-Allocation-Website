import React from "react";
import "../../styles/popups.css";

export default function AceeiPopup() {
  return (
    <div className="popup-content">
      <h2 id="algoName">
        ACEEI - Approximate Competitive Equilibrium From Equal Incomes
      </h2>
      <div className="intro-container">
        <h3 className="intro-text">
          The ACEEI algorithm aims to find a fair distribution of courses that
          satisfies
          <br />
          the Envy-Free-but-for-Tie-Breaking (EF-TB) condition. <br />
          <br />
          The goal is to achieve a distribution where the number of available
          spots
          <br />
          in each course matches the number of students wanting that course
          <br />
          making the excess demand of the courses to be zero.
        </h3>
      </div>
        <h4>Algorithms parameters: </h4>
        <ul>
          <li>Number of courses and its capacities</li>
          <li>
            Number of students, the number of courses each student needs to
            take, course ratings from each student and their initial budgets
          </li>
          <li>Delta parameter related to prices courses updates</li>
          <li>
            Epsilon parameter related to the budget range being tested for each
            student
          </li>
          <li>Type of EF-TB constraint</li>
        </ul>

        <h4>EF-TB condition: </h4>
        <ul>
          <li>
            Envy-Free-but-for-Tie-Breaking (EF-TB) means that no student should
            envy another student's allocation when considering their initial
            budget.
          </li>
          <li>
            If a student with a higher initial budget does not envy a student
            with a lower initial budget in the final allocation, it meets the
            EF-TB condition.
          </li>
          <li>
            The Contested EF-TB constraint also considers courses with a price
            of zero.
          </li>
        </ul>

        <h4>How the algorithm works: </h4>
        <ul>
          <li>
            During its run, the algorithm adjusts course prices and student
            budgets to make the demand excess zero.{" "}
          </li>
          <li>
            It examines the range of budgets each student has, checking which
            courses they can afford within their budget plus or minus epsilon.{" "}
          </li>
          <li>
            If the demand excess is zero, the algorithm terminates and returns
            the allocation found with the prices and budgets.{" "}
          </li>
          <li>
            If not, it updates the prices using delta and repeats the process.
          </li>
        </ul>
      </div>
  );
}
