import { GET_ALL_POST, ADD_POST } from '../actions/actions';

const initialState = {
  item: {},
  items: [],
};

const getPost = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POST:
      return {
        ...state,
        items: action.posts,
      };
      case ADD_POST: 
      return {
          ...state,
          item: action.post,
      }
    default:
      return state;
  }
};

export default getPost;
