import {FETCH_POSTS} from './types';

export function fetchPosts(){
    return function(dispatch){
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(posts => posts.json())
            .then(data => dispatch({
                type:FETCH_POSTS,
                payload:data
            }));
            
    }
}
