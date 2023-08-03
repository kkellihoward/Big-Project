import React, { useState } from 'react';
import './eventspage.css';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';

const CreateEventPage = () => {

  const [eventData, setEventData] = useState(null);
  const [hostId, setHostId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate()

    const handleExit = () => {
        navigate('/Events')
      }

  useEffect(() => {

    const temp = JSON.parse(window.sessionStorage.getItem("eventinfo"));
    const eventId = temp;
    // console.log(eventId);

    const temp2 = JSON.parse(window.sessionStorage.getItem('userinfo'));
    const host_id = temp2._id;
    setHostId(host_id);

    axios
      .get(`https://bp-api-87a503314fa5.herokuapp.com/event/getEvent/${eventId}`)
      .then((response) => {
        const eventData = response.data; // Assuming the API response contains title, date, and description
        setEventData(eventData); // Save the event data in the state
      })
      .catch((error) => {
        console.error('Error fetching event data:', error);
      });

  }, []);


    const handleEdit = () => {
      // Implement your logic for editing the event
      console.log('Edit event clicked');
    };
  
    const handleDelete = () => {
      console.log(eventData._id);
      
      if (!eventData) {
        return; // Do nothing if eventData is null
      }
    
      const eventId = eventData._id;
    
      axios
        .delete(`https://bp-api-87a503314fa5.herokuapp.com/event/deleteEvent/${eventData._id}`)
        .then((response) => {
          console.log('Event successfully deleted');
          // Optionally, you can perform additional actions after deletion
    
          // Update eventData with the new hosted_event_ids from the response
          setEventData((prevData) => ({
            ...prevData,
            hosted_event_ids: response.data.hosted_event_ids, // Assuming the API returns updated hosted_event_ids
          }));
        })
        .catch((error) => {
          console.error('Error deleting event:', error);
        });

        handleExit();
    };

    const eventDataDate = eventData ? new Date(eventData.date) : null;
  const formattedDate = eventDataDate
    ? `${(eventDataDate.getUTCMonth() + 1).toString().padStart(2, '0')}/${eventDataDate.getUTCDate().toString().padStart(2, '0')}/${eventDataDate.getUTCFullYear()}`
    : '';

  return (
    <div className="event-container">
      {eventData && (
        <>
        <div className="dropdown-menu">
          <button className="dropdown-button">&#8942;</button>
          <div className="dropdown-content">
            <button onClick={handleEdit}>Edit</button>
            <button onClick={() => setShowModal(true)}>Delete</button>
          </div>
        </div>

          <h1 className="event-title">{eventData.title}</h1>
          <p className="event-date" style={{ fontSize: '16px' }}>
            {formattedDate}
          </p>
        
          <div className="description-box">
            <p className= "event-description-title"style={{fontSize: '20px'}}>
            More info
            </p>
            <p className="event-description" style={{ fontSize: '14px' }}>
              {eventData.description}
            </p>
          </div>
        </>
      )}

<Dialog open={showModal} onClose={() => setShowModal(false)}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>Are you sure you want to delete?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDelete} variant="contained" color="error">
            Yes
          </Button>
          <Button onClick={() => setShowModal(false)} color="primary" autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>
    


{/* {showModal && (
        <div className="modal">
          <p>Are you sure you want to delete?</p>
          <button onClick={handleDelete}>Yes</button>
          <button onClick={() => setShowModal(false)}>No</button>
        </div>
      )} */}

    </div>
  );

}


export default CreateEventPage;