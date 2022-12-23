import React, { Component } from 'react';

class ClassComponentDemo extends Component {
//state full component(class component)
    constructor(props){
        super(props);
        this.state={
            fullName: 'Damon',
        };
    }
    changeName =() =>{
        // console.log(test);
        this.setState({fullName:'Shivani'});
        // console.log(this.setState);
    }
    //state full component

    render() {
        return (
    // Fragments
        <React.Fragment>
            <div>{this.state.fullName}</div>
            <button onClick={this.changeName.bind(this)}>Change Name</button>
        </React.Fragment>
    );
    }
}

export default ClassComponentDemo;
