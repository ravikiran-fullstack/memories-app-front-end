export const reducer = (posts = [], action) => {
  switch(action.type){
    case 'UPDATE_POST':
      return posts.map((post) => post._id === action.payload._id? action.payload : post);
    case 'FETCH_ALL_POSTS':
      return action.payload;
    case 'CREATE_POST':
      return [...posts, action.payload];
    default:
      return posts;    
  }
}