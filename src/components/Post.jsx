import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/actions';

class Post extends Component {
  componentDidMount() {
    this.props.fetchPost();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.post) {
      this.props.posts.unshift(nextProps.post);
    }
  }

  render() {
    console.log(this.props.posts);
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (

      <div>
        <h1>Posts</h1>
        { postItems }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  post: state.posts.item,
});
export default connect(mapStateToProps, { fetchPost })(Post);
