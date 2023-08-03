import React, {useState} from 'react';
import './eventspage.css';
import Draggable from 'react-draggable';

export default function PopupAd () {

    const [holdStarted, setHoldStarted] = useState(false);

  const handleHoldStart = () => {
    setHoldStarted(true);
  };

  const handleHoldEnd = () => {
    if (holdStarted) {
      // It was a hold event
      console.log('Hold event triggered');
      setHoldStarted(false); // Reset the flag
    }
  };

    const handleLink  = () => {
        window.open(
        'https://starbucks.eightfold.ai/careers?query=Barista&location=Orlando%2C%20Florida%2C%20US&pid=481052434432&domain=starbucks.com&sort_by=relevance&microsite=Retail',
      '_blank'
        );
    };

    return (
        
    <div className='adContainer'>
        <Draggable>
           {/* <Draggable onMouseDown={handleHoldStart} onMouseUp={handleHoldEnd}> */}
            <div  onClick={handleLink}> 
                    <img src={require('../assets/images/Screenshot_2023-07-27_173618.jpg')}
                    alt='PopupAd' 
                    style={{ cursor: 'pointer', border: '2px solid red' }}
                    />
            </div>
        </Draggable>
    </div>
    );
  
}



