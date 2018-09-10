import React from 'react';
import {connect} from 'react-redux';
import {newPost} from '../actions/newPostActions';

class PostForm extends React.Component{
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
   
    onSubmit(e){
        e.preventDefault();
        const post = {
            title:this.props.post.title,
            body:this.props.post.body
        }
        console.log(post);
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(post)
        }).then(res => res.json())
        .then(data => console.log(data))
    }
    
    render(){
        return(
            <div>
                <h1>Add Posts</h1>
                <br/>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title</label><br/>
                        <input type="text" onChange={this.props.newPost} value={this.props.title} name="title"/><br/>
                        <label>Body</label><br/>
                        <textarea onChange={this.props.newPost} value={this.props.body} name="body"/><br/>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state =>({
    post:state.posts.item
})

export default connect(mapStateToProps,{newPost})(PostForm);