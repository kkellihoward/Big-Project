// EventModal.js
import React from 'react';
import { Modal, Card, CardContent, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function EventModal({ eventData, open, onClose, onDelete, onEdit }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    handleMenuClose();
    onDelete(eventData._id);
  };

  const handleEdit = () => {
    handleMenuClose();
    onEdit(eventData._id);
  };

  const eventDataDate = new Date(eventData.date);
  const formattedDate = `${(eventDataDate.getUTCMonth() + 1).toString().padStart(2, '0')}/${(eventDataDate.getUTCDate()).toString().padStart(2, '0')}/${eventDataDate.getUTCFullYear()}`;

  return (
    <Modal open={open} onClose={onClose}>
      <div>
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" color="#7f44d4">
              {eventData.title}
            </Typography>
            <hr />
            <Typography variant="body2" color="#8f57dd">
              Date:
            </Typography>
            <Typography variant="body2">{formattedDate}</Typography>
            <br />
            <div className="description">
              <Typography color="#8f57dd">Description:</Typography>
            </div>
            <Typography variant="body2">{eventData.description}</Typography>
            <IconButton onClick={handleMenuOpen}>
              <MoreVertIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleDelete}>Delete</MenuItem>
              <MenuItem onClick={handleEdit}>Edit</MenuItem>
            </Menu>
          </CardContent>
        </Card>
      </div>
    </Modal>
  );
}