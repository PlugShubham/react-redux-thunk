import {NEW_POST} from './types';

export function newPost(event){
    
    return function(dispatch){
       
        dispatch({
            type:NEW_POST,
            payload:{[event.target.name]:event.target.value}
        })           
    }
}