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


export const LoginModal = props => {
  const {open, onClose, onSubmit} = props;

  const [loginErrorMsg, setLoginErrorMsg] = useState('');
  const [regErrorMsg, setRegErrorMsg] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [ready, setReady] = useState(false);

  const validate = field => {

  }

  const onEmailChange = e => {
    const email = e.target.value;
    if (email.length < 3) {
      setLoginErrorMsg('Email is too short');
    } else {
      setLoginErrorMsg('');
    }
  }

  const onPassChange = e => {
    const pass = e.target.value;
    if (pass.length < 3) {
      setRegErrorMsg('Password is too short');
    } else {
      setRegErrorMsg('');
    }
  }

  return (
    <div>
      <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Login for an employer</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please, login in order to post a job
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            onChange={onEmailChange}
            error={loginErrorMsg !== ''}
            helperText={loginErrorMsg !== '' ? loginErrorMsg : ''}
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            onChange={onPassChange}
            error={regErrorMsg !== ''}
            helperText={regErrorMsg !== '' ? regErrorMsg : ''}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={onSubmit}
            color="primary"
            disabled={!ready}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}