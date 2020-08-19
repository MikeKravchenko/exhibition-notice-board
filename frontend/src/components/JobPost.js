import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Chip from '@material-ui/core/Chip';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { ApplyModal }  from './ApplyModal';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    minWidth: 345,
    margin: '10px 10px 10px 10px'
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));


export const JobPost = props => {
  const {id, contact, applicants, title, description, categories, handleApplySubmit} = props;
  const classes = useStyles();


  const [applyOpen, setApplyOpen] = useState(false);
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Contact: {contact}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Already applied: {applicants && applicants.map(one => <p>{one}</p>)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button style={{flex: 1}} variant="outlined" color="primary" onClick={() => setApplyOpen(true)}>
          Apply
        </Button>
      </CardActions>
      {
        categories.map(category => <Chip className={classes.chip} label={category}/>)
      }
      <ApplyModal
        id={id}
        open={applyOpen}
        onClose={() => setApplyOpen(false)}
        onSubmit={handleApplySubmit}
      />
    </Card>
  );
}
