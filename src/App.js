import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';

import  { Provider } from 'react-redux'
import { store } from './store'

import Post from "./components/Post";
import PostForm from "./components/PostForm";

class App extends Component {
    constructor(props) {
        super(props);
        this.hu = React.createRef();
    }
    hand = ()=>{
        console.log(this.hu.current.style);
    }
    Foucs = (e)=>{
        console.log(e)
    }
    componentDidMount() {
        console.log($('button').eq(0).css({color:'red'}))
    }

    render(){
        return (
            <Provider store={store}>
                <div className="App">
                    <header className="App-header">
                        <img src={ logo } className="App-logo" alt="logo" />
                    </header>
                    <input type="text" ref={ this.hu } onFocus={this.Foucs}/>
                    <button onClick = { this.hand }>点我</button>
                    <PostForm/>
                    <Post/>
                </div>
            </Provider>
        );
    }
}

export default App;
