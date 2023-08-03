import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Cards() {
  const navigate = useNavigate();
  const [hostedEventIds, setHostedEventIds] = useState([]);


  useEffect(() => {
    // You may need to fetch the user ID from your authentication system or store it in the frontend state
    const temp = JSON.parse(window.sessionStorage.getItem('userinfo'));
    const host_id = temp._id;

    // Fetch user data to get the hosted_event_ids array
    axios
      .patch(`https://bp-api-87a503314fa5.herokuapp.com/user/updateAccount/${host_id}`)
      .then((response) => {
        const hosted_event_ids = response.data.hosted_event_ids || [];
        setHostedEventIds(hosted_event_ids); // Save the hosted_event_ids array in the state
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <div className='cardContainer' style={{ display: 'flex', flexWrap: 'wrap', gap: '25px' }}>
      {hostedEventIds.map((event_id) => (
        <EventCard key={event_id} eventId={event_id} />
      ))}
    </div>
  );
}

const EventCard = ({eventId}) =>{

  const navigate = useNavigate();
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    // Fetch event data for the given eventId
    axios
      .get(`https://bp-api-87a503314fa5.herokuapp.com/event/getEvent/${eventId}`)
      .then((response) => {
        const eventData = response.data; // Assuming the API response contains title, date, and description
        setEventData(eventData); // Save the event data in the state
      })
      .catch((error) => {
        console.error('Error fetching event data:', error);
      });
  }, [eventId]);

  const handleCardClick = () => {
    // Handle the click event here, e.g., navigate to a specific route
    // based on the card id or perform other actions
    navigate(`/event/${eventId}`);
  };


  
  if (!eventData) {
    return null; // Return null or a loading indicator while waiting for the data
  }

  return (
    <div
      className='cards'
      onClick={handleCardClick}
      style={{ height: '200px', width: '400px' }}
    >
      <Card sx={{ maxWidth: 400, height: 200 }}>
        <CardContent>
          <br />
          <Typography gutterBottom variant="h5" component="div" color={'#7f44d4'}>
            {eventData.title}
          </Typography>
          <hr />
          <Typography variant="body2" color={'#8f57dd'}>
            Date: {eventData.date}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};