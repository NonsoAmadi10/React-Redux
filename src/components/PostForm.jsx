import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions/actions';

 class PostForm extends Component {
     state = {
         title: '',
         body: ''
     }

     onChange=(e)=>{
         this.setState({[e.target.name]: e.target.value});
     }

     onSubmit=(e)=> {
          e.preventDefault();
          const newPost = {
              title: this.state.title,
              body: this.state.body
          }

          this.props.addPost(newPost)

        }
    render() {
        return (
            <div>
                <h1>Add Posts</h1>
                <form onSubmit = {this.onSubmit}>
                    <div>
                        <label htmlFor="Title">Title: </label> <br />
                        <input type="text" name="title" id="" value={this.state.title} onChange={this.onChange}/>
                    </div>
                    <br/>
                    <div>
                        <label htmlFor="Title">Body: </label> <br />
                        <textarea name="body" id="" value={this.state.body} onChange={this.onChange}/>
                       <br/>
                        <button type="submit">Add</button>
                    </div>
                </form>
            </div>
        );
    }
}



  export default connect(null, { addPost })(PostForm);
  
