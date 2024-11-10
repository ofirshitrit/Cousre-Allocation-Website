import React, {useState} from 'react'
import Popup from 'reactjs-popup';
import AceeiPopup from './AceeiPopup';

export default function AlgoCard({algoName, algoDetailes}) {

  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="algoContainer">
        <h3 id="titleOfAlgorCard">
            {algoName}
        </h3>
        <p>{algoDetailes}</p>
        <button className="learnMoreBtn" onClick={openPopup}>Learn More</button>
      </div>

      {/* Popup modal */}
      <Popup open={isOpen} onClose={closePopup} modal nested>
        <div className="modal">
          <button className="close" onClick={closePopup}>
            &times;
          </button>
          {algoName === 'ACEEI' ? (
            <AceeiPopup />
          ) : (
            <p>No additional information available for this algorithm.</p>
          )}
          
        </div>
      </Popup>
    </>
  )
}
