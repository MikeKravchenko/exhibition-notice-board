import React, { useState, Fragment, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Grid from '@material-ui/core/Grid';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { getJobs, postJob, updateJob } from '../utils/api';

import { JobPost } from './JobPost';
import { NewJobModal } from './NewJob';

// TODO: move to constans/etc
const SUCCESS_APPLY = 'Congrats, you\'ve applied succesfully';
const SUCCESS_NEW_JOB = 'Congrats, you\'ve created a new job post';
const FAIL_COMMON_MSG = 'Something went wrong, try again';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 2,
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const serialize = job => {
  return {
    ...job,
    categories: job.categories.split(':::'),
    applicants: job.applicants.split(':::')
  }
}


export const PostContainer = () => {
  const classes = useStyles();

  const [newPostOpen, setNewPostOpen] = useState(false);

  const [jobPosts, setJobPosts] = useState([]);

  const [successShow, setSuccessShow] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const [failShow, setFailShow] = useState(false);

  useEffect(() => {
    getJobs().then(data => {
      setJobPosts(data.map(job => serialize(job)))
    });
  }, []);

  const handleNewJobSubmit = (contact, title, description, categories) => {
    // TODO: add Loading...
    postJob({
      title: title,
      description: description,
      categories: categories.join(':::'),
      contact: contact
    }).then(data => {
      if (!data) {
        setFailShow(true);
        return;
      }
      const newJob = {
        id: data.id,
        contact,
        title,
        description,
        categories,
        applicants: [],
      };
      setJobPosts([...jobPosts, newJob]);
      setSuccessMessage(SUCCESS_NEW_JOB);
    })
  }

  const handleApplySubmit = (id, data) => {
    const index = jobPosts.findIndex(job => job.id === id);
    const toUpdate = jobPosts[index];
    const applicants = [...toUpdate.applicants, data];

    const updatedJob = {
      title: toUpdate.title,
      description: toUpdate.description,
      categories: toUpdate.categories.join(':::'),
      contact: toUpdate.contact,
      applicants: applicants.join(':::')
    }
    updateJob(
      toUpdate.id,
      updatedJob
    ).then(data => {
      if (!data) {
        setFailShow(true);
        return;
      }
      setJobPosts([
        ...jobPosts.slice(0, index),
        {
          ...toUpdate,
          applicants: applicants
        },
        ...jobPosts.slice(index + 1),
      ]);
      setSuccessMessage(SUCCESS_APPLY);
      setSuccessShow(true);
    })
  }

  const Modals = () => (
    <Fragment>
      <NewJobModal
        open={newPostOpen}
        onClose={() => setNewPostOpen(false)}
        onSubmit={handleNewJobSubmit}
      />
    </Fragment>
  )

  const Messages = () => (
    <Fragment>
      <Snackbar open={successShow} autoHideDuration={6000} onClose={() => setSuccessShow(false)}>
        <Alert onClose={() => setSuccessShow(false)} severity="success">
          {successMessage}
        </Alert>
      </Snackbar>

      <Snackbar open={failShow} autoHideDuration={6000} onClose={() => setFailShow(false)}>
        <Alert onClose={() => setFailShow(false)} severity="error">
          {FAIL_COMMON_MSG}
        </Alert>
      </Snackbar>
    </Fragment>
  )

  return (
    <Fragment>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Job Posting Board
          </Typography>
          <Button color="inherit" onClick={() => setNewPostOpen(true)}>Post New Job</Button>
        </Toolbar>
      </AppBar>

      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="center"
      >
      {
        jobPosts.map(post =>
          <JobPost
            id={post.id}
            title={post.title}
            description={post.description}
            categories={post.categories}
            contact={post.contact}
            applicants={post.applicants}
            handleApplySubmit={handleApplySubmit}
          />)
      }
      </Grid>

      <Modals/>
      <Messages/>
    </Fragment>
  );
}