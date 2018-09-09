import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/postActions';

class Posts extends React.Component{
    
    componentWillMount(){
        this.props.fetchPosts();
    }
    render(){
        let postdata = this.props.posts.map((data,key)=>{
            return <div key={key}><h1>{data.title}</h1><p>{data.body}</p></div>
        });
        return(
            <div>{postdata}</div>
        );
    }
}

const mapStateToProps = state =>({
    posts:state.posts.items
})

export default connect(mapStateToProps,{fetchPosts})(Posts);