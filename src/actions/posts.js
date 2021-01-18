import * as api from '../api';

export const getPosts = () => async (dispatch) => {
  
  try{
    const { data } = await api.fetchPosts();
    const action = {type: 'FETCH_ALL_POSTS', payload: data};
    return dispatch(action);
  }catch(err){
    console.log(err.message);
  }
}

export const createPost = (post) => async (dispatch) =>  {
  try{
    const { data } = await api.createPost(post);
    const action = {type: 'CREATE_POST', payload: data};
    return dispatch(action);

  }catch(err){
    console.log(err.message);
  }
}

export const updatePost = (id, post) => async (dispatch) => {
  try{
    const { data } = await api.updatePost(id, post);
    const action = {type: 'UPDATE_POST', payload: data};
    return dispatch(action);

  }catch(err){
    console.log(err.message);
  }
}

export const deletePost = (id) => async (dispatch) => {
  try{
    await api.deletePost(id);
    const action = {type: 'DELETE_POST', payload: id};
    return dispatch(action);
  }catch(err){
    console.error(err);
  }
}

export const likePost = (id) => async (dispatch) => {
  try{
    const { data } = await api.likePost(id);
    const action = {type: 'LIKE_POST', payload: data};
    return dispatch(action);
  }catch(err){
    console.error(err);
  }
}