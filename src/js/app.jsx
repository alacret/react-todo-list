import React from 'react';
import PostCard from './postcard'

export default class App extends React.Component{
    render(){
        return (<div>
        <h1>Hello World</h1>
        <PostCard a="Angel"/>
        </div>);
    }
}