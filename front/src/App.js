import './App.css';
import Header from './components/Header';
import AlgoCardsContainer from './components/AlgoCardsContainer';
import SelectAlgoForm from './components/SelectAlgoForm';
import { useState } from 'react'

function App() {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("");


  return (
    <div className='app-container'>
      <Header headerContent= "Course Allocation Algorithms"/>
      <AlgoCardsContainer />
      <SelectAlgoForm selectedAlgorithm={selectedAlgorithm} setSelectedAlgorithm={setSelectedAlgorithm}/>
    </div>
    
  );
}

export default App;
