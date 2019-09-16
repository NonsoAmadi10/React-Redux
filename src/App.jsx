import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import Posts from './components/Post';
import PostForm from './components/PostForm';


import reactLogo from './assets/React-icon.png';

const App = () => (
  <Provider store={store}>
    <main className="container">
      <div>
      <h1>hello world!</h1>
      <img className="container__image" alt="react logo" src={reactLogo} />
      <p>If you see this everything is working!</p>
    </div>
      <PostForm />
      <Posts />
    </main>
  </Provider>

);

export default App;
