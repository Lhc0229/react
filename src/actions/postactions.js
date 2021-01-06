import {FETCh_POSTS, New_POSTS} from "./type";
// 分发操作，相当于提供dispatch.type的值，让reducer的action.type来决定执行那个函数
export  const post = () => dispatch=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>
            dispatch({
                type:FETCh_POSTS,
                post:data
            })
        )
}

export  const createPost = postData => dispatch =>{
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:"POST",
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(postData)
    })
        .then(res=>res.json())
        .then(data=>
            dispatch({
                type:New_POSTS,
                post:data
            })
        )
}