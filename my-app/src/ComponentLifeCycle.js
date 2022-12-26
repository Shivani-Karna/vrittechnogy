import React, { Component } from 'react';

class ComponentLifeCycle extends Component {
    constructor(props){
        super(props);
            this.state = {name:'Santosh'};
        }
        // static getDerivedStateFromProps(props, state) {
        //     return {name:props.name1};
        // }   
    // componentDidMount(){
    //     setTimeout(() => {
    //         this.setState({name:'Python'});
    //     }, 1000);
    // }
    // should component update
    shouldComponentUpdate(){
        return true;
    }

    
    // function to change name
    changeName = () => {
        this.setState ({name:'Python'});
    };

    // can access the values of previous state and props
    getSnapshotBeforeUpdate(prevProps, prevState){
        document.getElementById('div1').innerHTML ='Before:' + prevState.name;
    }
    // component did update
    componentDidUpdate(){
        document.getElementById('div2').innerHTML ='After:'+ this.state.name;
    }
    render() {
        console.log(this,'this');
        return <>{this.state.name}
        <button onClick ={this.changeName}>Change Name</button>
        <div id='div1'></div>
        <div id='div2'></div>
        </>
    ;
        }
    
    }


export default ComponentLifeCycle ; 


