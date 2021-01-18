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