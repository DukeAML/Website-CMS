import React, {Component, Fragment} from 'react';
import '../Forms.css';
import axios from "axios";
import Table from 'react-bootstrap/Table';

export default class PaginatePapers extends React.Component{
    
    state = {
        members: []
    };


    componentDidMount() {
        this.getMembers();
    }

    getMembers =  async () => {
        var members = []
        let response = await axios.get('https://dukeappml.herokuapp.com/papers')
        this.setState({members: response.data}) 
        console.log("success");     
        console.log(response);       
  
    };

    getJSX = () => {
        var array = [];
        array.push(
            <thead>
                <tr >
                <th>#</th>
                <th>Title</th>
                <th>Description</th>
                
                </tr>
            </thead>
        );
        if (this.state.members.length > 0){
        for(let i = 0;i<this.state.members.length;i++){
            array.push(
                
                <tr>
                <td>{i+1}</td>
                <td> {this.state.members[i].title} </td>
                <td>{this.state.members[i].authorLastName}</td>
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


