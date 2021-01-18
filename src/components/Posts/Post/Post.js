import React from 'react';

import { useDispatch } from 'react-redux';

import moment from 'moment';

import {Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
// import ThumbUpAlIcon from '@material-ui/icons';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import { deletePost, likePost } from '../../../actions/posts'

import useStyles from './styles';

const Post = ({post, setCurrentId}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleDeletePost = (id) => {
    dispatch(deletePost(id));
  }

  const handleLikePost = (id) => {
    dispatch(likePost(id));
  }
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button 
          style={{color: 'white'}} 
          size='small' 
          onClick={() => setCurrentId(post._id)} >
          <MoreHorizIcon fontSize="default"></MoreHorizIcon>
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map(tag => `#${tag} `)}
        </Typography>
      </div>
      <div className={classes.title}>
        <Typography variant="h6">{post.title}</Typography>
      </div>
      <CardContent>
        <Typography variant="body2" color="textSecondary" gutterBottom>{post.message}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions} onClick={() => handleLikePost(post._id)}>
        <Button size="small" color="primary">
            <ThumbUpIcon fontSize="small"/>
            Like
            {post.likeCount}
        </Button>
        <Button size="small" color="primary" onClick={() => handleDeletePost(post._id)}>
            <DeleteIcon fontSize="small"/>
            Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default Post;