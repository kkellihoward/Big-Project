import React, { useState, useEffect } from 'react';
import './eventspage.css';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Tooltip } from '@mui/material';

export default function EventsNavBar(props) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [firstName, setFirstName] = useState(''); 
    const navigate = useNavigate();
  
    const handleAvatarClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleCloseMenu = () => {
      setAnchorEl(null);
    };
  
    const handleLogout = () => {
      navigate('/')
    };
   
   
    
  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const temp = JSON.parse(window.sessionStorage.getItem("userinfo"));
        const userId = temp._id;
        {console.log({userId})};
        const response = await axios.patch(`https://bp-api-87a503314fa5.herokuapp.com/user/updateAccount/${userId}`); // Replace with your API endpoint
        setFirstName(response.data.username); // Assuming the API response contains firstName
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the function to fetch data when the component mounts
  }, []);
  
    return (
      <>
        <div className='eventNav'> 
        <div className='welcomeTxt'>
        Welcome {firstName}!
        </div>
          <div className='avatar'>
            <Stack>
              <Tooltip title={`${firstName}'s info`} placement='bottom' >
              <Avatar
                sx={{ bgcolor: deepOrange[500], width: 55, height: 55 }}
                onClick={handleAvatarClick}
              >
                {firstName.charAt(0)}
              </Avatar>
              </Tooltip>
            </Stack>
          </div>
        </div>
  
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
        >
          <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </>
    );
  }
