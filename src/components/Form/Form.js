import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FileBase from 'react-file-base64';

import {TextField, Button, Typography, Paper} from '@material-ui/core'

import {createPost, updatePost} from '../../actions/posts';

import useStyles from './styles';

const Form = ({currentId, setCurrentId}) => {
  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: ''
  });
  const post = useSelector((state) => currentId? state.posts.find((p) => p._id === currentId): null);
  const classes = useStyles();

  useEffect(() => {
    if(post){
      setPostData(post);
    }
  }, [post])

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if(currentId){
      dispatch(updatePost(currentId, postData));
    }else {
      dispatch(createPost(postData));
    }
    clearForm();
  };

  const clearForm = () => {
    setCurrentId(null);
    setPostData({
      creator: '',
      title: '',
      message: '',
      tags: '',
      selectedFile: ''
    })
  }

  return (
      <Paper className={classes.paper}>
        <form autoComplete="on" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
          <Typography variant="h6">
            {currentId ? 'Editing' : 'Creating'} a Post
          </Typography>
          <TextField 
            name="creator" 
            variant="outlined" 
            label="Creator" 
            fullWidth 
            value={postData.creator} 
            onChange={(e) => setPostData({...postData, creator: e.target.value})}
            >
          </TextField>

          <TextField 
            name="title" 
            variant="outlined" 
            label="Title" 
            fullWidth 
            value={postData.title} 
            onChange={(e) => setPostData({...postData, title:e.target.value})}
            >
          </TextField>

          <TextField 
            name="message" 
            variant="outlined" 
            label="Message" 
            fullWidth 
            value={postData.message} 
            onChange={(e) => setPostData({...postData, message: e.target.value})}
            >
          </TextField>

          <TextField 
            name="tags" 
            variant="outlined" 
            label="Tags" 
            fullWidth 
            value={postData.tags} 
            onChange={(e) => setPostData({...postData, tags: e.target.value.split(',')})}
            >
          </TextField>
          <div className={classes.fileInput}> 
            <FileBase type="file" multiple={false} onDone={({base64}) => setPostData({...postData, selectedFile:base64})}/>
          </div>
          <Button className={classes.buttonSubmit} variant="contained" color="primary" fullWidth type="submit">Submit</Button>
          <Button variant="contained" color="secondary" size="small" fullWidth onClick={clearForm}>Clear</Button>
        </form>
      </Paper>
    );
}

export default Form;