import React from 'react'
import Header from '../Header';
import '../../styles/forms.css'
import CoursesAndStudents from '../CoursesAndStudents';

export default function AceeiForm({setSelectedAlgorithm}) {
  return (
    <>
      <Header headerContent= "ACEEI Algorithm" setSelectedAlgorithm={setSelectedAlgorithm} inHomePage={false}/>
      <div className="form-container">
        <h2>Insert the parameters and run the algorithm <br /> Or <br /></h2>
        <div className='random-container'>
          <h2>Try with random example: </h2>
         <button>Random</button>
        </div>
        <CoursesAndStudents />
      </div>
    </>
  )
}
