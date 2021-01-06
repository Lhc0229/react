import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { post } from "../actions/postactions";
import { connect } from 'react-redux';

class Post extends Component {
    componentDidMount(){
        // 触发action操作
        this.props.post();
    }
    componentWillReceiveProps(nextProps, nextContext) {
        if(nextProps.newPost){
            console.log(nextProps.newPost)
            this.props.posts.unshift(nextProps.newPost);
        }
    }

    render() {
        const postItem = this.props.posts.map(post=>(
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))
        return (
            <div>
                <h1>Posts</h1>
                {postItem}
            </div>
        );
    }
}
Post.propTypes = {
    post: PropTypes.func.isRequired,
    index_post:PropTypes.array,
}
const mapStateToProps = state => {
    return {
        posts: state.index_post.post_reducer,
        newPost:state.index_post.post_reducers
    }
}
export default connect(mapStateToProps, { post })(Post);