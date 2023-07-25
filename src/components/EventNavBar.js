import React, { useState } from 'react';
import './eventspage.css';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, orange } from '@mui/material/colors';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

export default function EventsNavBar(props) {
 

    return (
        <>
        <div className='eventNav'> 
            <div className='search'>
            <Paper
            component="form"
            sx={{ p: '2px 4px', width: 500 }}
            >
                <IconButton type="button" sx={{ p: '10px'}} aria-label="search">
                    <SearchIcon />
                </IconButton>
                <InputBase
                    sx={{ ml: 1, flex: 2 }}
                    placeholder="Search for Event"
                    inputProps={{ 'aria-label': 'Search for Event' }}
                />
            </Paper>

        
            </div> 
            <div className='avatar'>
                <Stack direction='row' spacing={1}>
                    <Avatar sx ={{bgcolor : deepOrange[500], width:55, height: 55}}>M</Avatar>
                </Stack>

            </div>
        </div>
        </>
    );
};

