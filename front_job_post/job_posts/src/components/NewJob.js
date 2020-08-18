/**
 * Just a modal, let's make it as simple as possible,
 * one page app for real, no routes even
 */
import React, { useState } from 'react';

import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "300px",
  },
}));

const CATEGORIES = [
  'web',
  'js',
  'python',
  'c#',
  'other'
];

export const NewJobModal = props => {
  const { open, onClose, onSubmit } = props;
  const classes = useStyles();

  const [title, setTitle] = useState('');
  const [contact, setContact] = useState('');
  const [description, setDescription] = useState('');
  const [categories, setCategories] = useState([]);

  return (
    <div>
      <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add a new job</DialogTitle>
        <DialogContent>
          <TextField
            classes={{ root: classes.root }}
            select
            name="categories"
            id="categories"
            variant="outlined"
            label="Categories"
            SelectProps={{
              multiple: true,
              value: categories,
              onChange: e => setCategories(e.target.value)
            }}
          >
            {
              CATEGORIES.map(category => (
                <MenuItem value={category}>{category}</MenuItem>
              ))
            }
          </TextField>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="text"
            fullWidth
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <TextField
            autoFocus
            multiline
            rows={4}
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="contact"
            label="Contact email"
            type="email"
            fullWidth
            value={contact}
            onChange={e => setContact(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={() => {
            onSubmit(contact, title, description, categories);
            onClose();
          }}
            color="primary"
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}