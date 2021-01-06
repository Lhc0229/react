import {FETCh_POSTS, New_POSTS} from "../actions/type";

const states = {
    post_reducer:[],
    post_reducers:{}
}
export  default function (state =states,action) {
    console.log('reducers')
    switch (action.type) {
        case FETCh_POSTS:
            return {
                ...state,
                post_reducer:action.post
            }
        case New_POSTS:
            return {
                ...state,
                post_reducers:action.post
            }
        default:
            return state;
    }
}