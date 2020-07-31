
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
            <form >
                First Name<br/>
                <input type='text' name='userName' value={this.state.firstName} onChange = {(e) => this.setState({ firstName : e.target.value})}/><br/>
                last Name<br/>
                <input type='text' name='userName' value={this.state.lastName} onChange = {(e) => this.setState({ lastName : e.target.value})}/><br/>
                Password<br/>
                <input type='password' name='password' value={this.state.password} onChange = {(e) => this.setState({ password : e.target.value})}/><br/>
                Age<br/>
                <input type='number' name='age' value={this.state.age} onChange = {(e) => this.setState({ age : e.target.value})}/><br/>
                Gender<br/>
                <input type='text' name='gender' value={this.state.gender} onChange = {(e) => this.setState({ gender : e.target.value})}/><br/>
                Occupation<br/>
                <input type='text' name='age' value={this.state.occupation} onChange = {(e) => this.setState({occupation : e.target.value})}/><br/>
                <button type='submit' value='submit'onClick={this.handleUpdate}>submit</button>

                

            </form>
        )
    }
}
export default Form;