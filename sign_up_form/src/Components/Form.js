import React, { Component } from 'react';

class Form extends Component{
    constructor(props){
        super(props)
        this.state={
            firstName : 'First Name',
            lastName : 'Last Name',
            password : '*****',
            age : '25',
            gender : 'Male/Female/Other',
            occupation : 'Programmer'
        }
        
    }
    handleUpdate = () => alert(`Hello, Your name is ${this.state.firstName} ${this.state.lastName}, Gender is ${this.state.gender}, and your occupation is ${this.state.occupation}` );
    render(){
        return(
            <form onClick={this.handleUpdate}>
                First Name<br/>
                <input type='text' name='userName' value={this.state.firstName} onClick = {(e) => this.setState({ firstName : e.target.value})}/><br/>
                last Name<br/>
                <input type='text' name='userName' value={this.state.lastName} onClick = {(e) => this.setState({ lastName : e.target.value})}/><br/>
                Password<br/>
                <input type='password' name='password' value={this.state.password} onClick = {(e) => this.setState({ password : e.target.value})}/><br/>
                Age<br/>
                <input type='number' name='age' value={this.state.age} onClick = {(e) => this.setState({ age : e.target.value})}/><br/>
                Gender<br/>
                <input type='text' name='gender' value={this.state.gender} onClick = {(e) => this.setState({ gender : e.target.value})}/><br/>
                Occupation<br/>
                <input type='text' name='age' value={this.state.occupation} onClick = {(e) => this.setState({occupation : e.target.value})}/><br/>
                <button type='submit'>submit</button>

                

            </form>
        )
    }
}
export default Form;