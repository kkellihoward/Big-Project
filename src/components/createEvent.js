import React, { useState } from 'react';
import './eventspage.css';
import { useEffect } from 'react';
import axios from 'axios';

const CreateEventPage = () => {

  const [eventData, setEventData] = useState(null);
  const [hostId, setHostId] = useState(null);

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

      console.log(hostId)
      console.log(eventData._id)

      // if (!eventData || !eventData.hosted_event_ids) {
      //   return; // Do nothing if eventData is null
      // }
 
      const eventId = eventData._id;
      axios
      .patch(`https://bp-api-87a503314fa5.herokuapp.com/user/updateAccount/${hostId}`, {
      })
      .then((response) => {
        
        axios.patch(`https://bp-api-87a503314fa5.herokuapp.com/user/updateAccount/${hostId}`, {
          hosted_event_ids: response.hosted_event_ids.filter((id) => id !== eventId),
        });
      })
      .catch((error) => {
        console.error('Error deleting event:', error);
      });

      console.log('Delete event clicked');


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
            <button onClick={handleDelete}>Delete</button>
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
    </div>
  );

}


export default CreateEventPage;