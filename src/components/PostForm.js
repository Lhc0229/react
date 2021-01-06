import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { createPost } from "../actions/postactions";
import { connect } from 'react-redux';

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:'',
            body:''
        }
        this.submit = this.submit.bind(this)
        this.change = this.change.bind(this)
    }
    change(e){
        this.setState({[e.target.name]:e.target.value})
    }
    submit(e){
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
        }
        this.props.createPost(post);
    }
    render() {
        return (
            <div>
               <h1>添加内容</h1>
                <form action="" onSubmit={this.submit}>
                    <div>
                        <label>title</label>
                        <br/>
                        <input type="text" name="title"
                               autoComplete="off"
                               onChange={this.change}
                               value={this.state.title}
                        />
                    </div>
                    <div>
                        <label>body</label>
                        <br/>
                        <textarea name="body"
                                  autoComplete="off"
                                  onChange={this.change}
                                  value={this.state.body}
                        >

                        </textarea>
                        <br/>
                        <button type="submit">添加</button>
                    </div>
                </form>
            </div>
        );
    }
}
PostForm.propTypes = {
    createPost: PropTypes.func.isRequired,
    index_post:PropTypes.array,
}
const mapStateToProps = state => {
    return {
        posts: state.index_post.post_reducers
    }
}
export default connect(mapStateToProps,{createPost})(PostForm);