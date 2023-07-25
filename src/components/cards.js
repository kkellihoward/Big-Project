import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { colors } from '@mui/material';

export default function Cards() {
 
    const navigate = useNavigate()

    const handleLogin = () => {
        navigate('/Sleepover')
      }
 
    return (
    <div className='cardContainer'>
        <div className='cards' onClick={handleLogin}>
        <Card sx={{ maxWidth: 345, height: 430,}} >
        <CardContent>
            <br /> <br />
            <Typography gutterBottom variant="h5" component="div" color={'#7f44d4'}>
            Sleepover
            </Typography>
            <hr />
            <Typography variant="body2" color={'#8f57dd'}>
            Date: 
            </Typography>
        </CardContent>
        </Card>
        </div>
    </div>
  );
}