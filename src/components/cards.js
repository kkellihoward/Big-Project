import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Cards() {
  const navigate = useNavigate();
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    // Fetch card event data from the API
    axios.get('/api/events')
      .then((response) => {
        // Assuming the API returns an array of card event data
        setCardData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching card events:', error);
      });
  }, []);

  const handleCardClick = (id) => {
    // Handle the click event here, e.g., navigate to a specific route
    // based on the card id or perform other actions
    navigate(`/event/${id}`);
  };

  return (
    <div className='cardContainer' style={{ display: 'flex', flexWrap: 'wrap', gap: '25px' }}>
      {cardData.map((card) => (
        <div
          key={card._id}
          className='cards'
          onClick={() => handleCardClick(card._id)}
          style={{ height: '200px', width: '400px' }}
        >
          <Card sx={{ maxWidth: 400, height: 200 }}>
            <CardContent>
              <br />
              <Typography gutterBottom variant="h5" component="div" color={'#7f44d4'}>
                {card.title}
              </Typography>
              <hr />
              <Typography variant="body2" color={'#8f57dd'}>
                Date: {card.date}
              </Typography>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}