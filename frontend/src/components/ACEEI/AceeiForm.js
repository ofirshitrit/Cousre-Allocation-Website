import React, {useState} from 'react'
import Header from '../Header';
import '../../styles/forms.css'
import CoursesAndStudents from '../CoursesAndStudents';
import Results from '../Results';

export default function AceeiForm({setSelectedAlgorithm}) {

  const [results, setResults] = useState(null);

  const handleSubmit = async (e) => {

    console.log("in handleSubmit");
    
    e.preventDefault();  // Prevent default form submission behavior
    
    // Gather form data
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      // Send data to Flask backend
      const response = await fetch('http://127.0.0.1:5000/process', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      // Check response status and set results data
      if (response.ok) {
        const jsonResponse = await response.json();
        setResults(jsonResponse.data);  // Store the returned data in state
      } else {
        console.error("Failed to submit form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <>
      <Header headerContent= "ACEEI Algorithm" setSelectedAlgorithm={setSelectedAlgorithm} inHomePage={false}/>
      <form onSubmit={handleSubmit} id="aceeiForm" className="form-container">

          <h2>Insert the parameters and run the algorithm <br /> Or <br /></h2>
          <div className='random-container'>
            <h2>Try with random example: </h2>
          <button>Random</button>
          </div>
          <input type="submit" value="Run" />
          {results && <Results data={results} />}

          <CoursesAndStudents />
      </form>


    </>
  )
}
