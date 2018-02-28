import React from 'react';

export default class PostCard extends React.Component{
    
    constructor(props) {
        super();
        console.log(props.a);
        this.state = {
            "text": ""
        };
    }
    changeButtonText(event){
        this.setState({"text":"TEST"+event.target.value});
    }
    
    render(){
        return (<div>
        <h1>PostCard Title</h1>
        <p>POst Card paragraph</p>
        <p> Value of the Text: {this.state.text} </p>
        <input onChange={(e) => this.setState({"text":e.target.value})} />
        <input onChange={(e) => this.changeButtonText(e)} />
        </div>);
    }
}