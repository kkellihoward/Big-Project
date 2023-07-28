import React, { useState } from 'react';
import './eventspage.css';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';

export default function EventsNavBar(props) {
    const [anchorEl, setAnchorEl] = useState(null);
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

    const firstLetter = document.cookie.username;
    console.log(document.cookie.username);
  
  
    return (
      <>
        <div className='eventNav'> 
  
          <div className='avatar'>
            <Stack>
              <Avatar
                sx={{ bgcolor: deepOrange[500], width: 55, height: 55 }}
                onClick={handleAvatarClick}
              >
                {firstLetter}
              </Avatar>
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
