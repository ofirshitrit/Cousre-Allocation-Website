import React from "react";

export default function TabuSearchPopup() {
  return (
    <div className="popup-content">
      <h2 id="algoName">Tabu Search</h2>
      <div className="intro-container">
        <h3 className="intro-text">
          The goal of the TABU SEARCH algorithm is to find a course allocation
          where the demand excess is zero, <br />
          meaning the number of students wanting a course matches the number of
          available spots in that course.
        </h3>
      </div>
      <h4>Algorithms parameters: </h4>
      <ul>
        <li>Number of courses and its capacities</li>
        <li>
          Number of students, the number of courses each student needs to take
          and course ratings from each student
        </li>
        <li>
          Delta parameter related to prices courses updates, it can be more than
          one delta
        </li>
        <li>
          Beta parameter related to the distribution of student budgets and
          course prices
        </li>
      </ul>

      <h4>How the algorithm works: </h4>
      <ul>
        <li>
          It starts with initial course prices generated using the beta
          parameter.
        </li>
        <li>
          It then computes the allocation and the demand excess is zero, the
          algorithm ends.
        </li>
        <li>
          If not, it searches for all price vectors similar to the current
          vector that yield the same allocation and demand excess.
        </li>
        <li>The algorithm then updates the prices in two ways:</li>
        <ol >
          <li> Using the delta parameter</li>
          <li>
            Increasing the prices of highly demanded courses to reduce their
            total demand by one, while setting prices of less demanded courses
            to zero.
          </li>
        </ol>
        <li>
          With the new set of prices, the algorithm checks if any of these
          results in a demand excess of zero.
        </li>
        <li>
          If one does, it returns the allocation associated with that price set.
        </li>
        <li>
          If not, it takes the prices that resulted in the minimum demand excess
          and repeats the process.
        </li>
      </ul>
    </div>
  );
}
