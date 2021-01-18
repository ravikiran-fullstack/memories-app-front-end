import {CREATE_POST, FETCH_ALL_POSTS, UPDATE_POST, DELETE_POST, LIKE_POST} from '../constants/actionTypes';

export const reducer = (posts = [], action) => {
  switch(action.type){
    case LIKE_POST: 
      return posts.map((post) => post._id === action.payload._id? action.payload: post);
    case DELETE_POST:
      return posts.filter(post => post._id !== action.payload);
    case UPDATE_POST:
      return posts.map((post) => post._id === action.payload._id? action.payload : post);
    case FETCH_ALL_POSTS:
      return action.payload;
    case CREATE_POST:
      return [...posts, action.payload];
    default:
      return posts;    
  }
}