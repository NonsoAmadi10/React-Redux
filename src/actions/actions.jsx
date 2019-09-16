export const GET_ALL_POST = 'GET_POST';
export const ADD_POST = 'ADD_POST';

export const fetchPost = () => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => dispatch({
      type: GET_ALL_POST,
      posts: data,
    }));
};

export const addPost = (postData) => (dispatch) => {
    console.log('action..')
    fetch('https://jsonplaceholder.typicode.com/posts', {
              method: 'POST',
              headers:{
                  'content-type': 'application/json'
              },
              body: JSON.stringify(postData)
          })
          .then((res) => res.json())
          .then((data) => dispatch({
              type: ADD_POST,
              post: data,
          }))
     }

