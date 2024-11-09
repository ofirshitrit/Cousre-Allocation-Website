import './App.css';
import Header from './components/Header';
import AlgoCardsContainer from './components/AlgoCardsContainer';
import SelectAlgoForm from './components/SelectAlgoForm';
import { useState } from 'react'
import TabuSearchForm from './components/TabuSearchForm';
import FindManipulationForm from './components/FindManipulationFrom'
import AceeiForm from './components/AceeiForm';

function App() {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("");

  return (
    <div className='app-container'>
      {selectedAlgorithm === "" && (
        <>
          <Header headerContent="Course Allocation Algorithms" setSelectedAlgorithm= {setSelectedAlgorithm} inHomePage={true}/>
          <AlgoCardsContainer />
          <SelectAlgoForm selectedAlgorithm={selectedAlgorithm} setSelectedAlgorithm={setSelectedAlgorithm} />
          
        </>
      )}
      
      {selectedAlgorithm === "aceei" && <AceeiForm setSelectedAlgorithm={setSelectedAlgorithm}/>}
      {selectedAlgorithm === "manipulation" && <FindManipulationForm setSelectedAlgorithm={setSelectedAlgorithm}/>}
      {selectedAlgorithm === "tabusearch" && <TabuSearchForm setSelectedAlgorithm={setSelectedAlgorithm} />}

    </div>
    
  );
}

export default App;
