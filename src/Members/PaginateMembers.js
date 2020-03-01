import React, {Component, Fragment} from 'react';
import '../Forms.css';
import axios from "axios";
import Table from 'react-bootstrap/Table';

export default class PaginateMembers extends React.Component{
    
    state = {
        members: []
    };


    componentDidMount() {
        this.getMembers();
    }

    getMembers =  async () => {
        var members = []
        let response = await axios.get('https://dukeappml.herokuapp.com//users')
        this.setState({members: response.data}) 
        console.log("successsssss");     
        console.log(response);       
  
    };

    getJSX = () => {
        var array = [];
        if (this.state.members.length > 0){
        for(let i = 0;i<this.state.members.length;i++){
            array.push(
                
                <tr>
                <td>{i+1}</td>
                <td> {this.state.members[i].firstName} </td>
                <td>{this.state.members[i].lastName}</td>
                </tr>


            );
        }
    }
        
        return(
            <div>{array}</div>
        );
       
    };

    render() {
        //let members = this.state.members;
        return(
            <div>
            {this.getJSX()}
            
            </div>
            );
       /*  return (
            <tbody>
                {members.map((member) => {
                    return(
                        <tr>
                            <td>member.firstName</td>
                            <td>member.lastName</td>
                            <td>member.firstName</td>
                        </tr>
                    )
                })}
            </tbody>
        ); */
    }
}


