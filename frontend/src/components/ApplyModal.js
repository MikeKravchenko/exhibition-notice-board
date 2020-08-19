/**
 * Just a modal, let's make it as simple as possible,
 * one page app for real, no routes even
 */
import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export const ApplyModal = props => {
  const {id, open, onClose, onSubmit} = props;

  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [name, setName] = useState('');
  const [cv, setCV] = useState('');

  return (
    <div>
      <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Apply to a job</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add details about yourself
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="location"
            label="Location"
            type="text"
            fullWidth
            value={location}
            onChange={e => setLocation(e.target.value)}
          />
          <TextField
            autoFocus
            multiline
            rows={4}
            margin="dense"
            id="cv"
            label="CV"
            type="text"
            fullWidth
            value={cv}
            onChange={e => setCV(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={() => {
              onSubmit(id, [email, location, cv, name].join(' '));
              onClose();
            }} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}