import React from "react";
import Header from "../Header";
import CoursesAndStudents from "../CoursesAndStudents";
// TODO: add all the TabuSearchForm parameters
// TODO: fix the GUI
export default function TabuSearchForm({ setSelectedAlgorithm }) {
  return (
    <>
      <Header
        headerContent="Tabu Search Algorithm"
        setSelectedAlgorithm={setSelectedAlgorithm}
        inHomePage={false}
      />
      <div className="form-container">
        <h2>Insert the parameters and run the algorithm <br /> Or <br /></h2>
        <div className='random-container'>
          <h2>Try with random example: </h2>
         <button>Random</button>
        </div>
        <CoursesAndStudents />
      </div>
    </>
  );
}
