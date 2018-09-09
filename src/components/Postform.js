import React from 'react';

class PostForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          title:'',
          body:''
        }
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onBodyChange = this.onBodyChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onTitleChange(e){
        if(e.target.name === 'title'){
            this.setState({
                title:e.target.value
            })
        }
    }
    onBodyChange(e){
        if(e.target.name === 'body'){
            this.setState({
                body:e.target.value
            })
        }
    }
    onSubmit(e){
        e.preventDefault();
        const post = {
            title:this.state.title,
            body:this.state.body
        }
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
                        <input type="text" onChange={this.onTitleChange} value={this.state.title} name="title"/><br/>
                        <label>Body</label><br/>
                        <textarea onChange={this.onBodyChange} value={this.state.body} name="body"/><br/>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default PostForm;