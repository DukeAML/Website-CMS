import React, {Component, Fragment} from 'react';
import '../Forms.css';
import axios from "axios";
import Table from 'react-bootstrap/Table';

export default class PaginateProjects extends React.Component{
    
    state = {
        members: []
    };


    componentDidMount() {
        this.getMembers();
    }

    getMembers =  async () => {
        var members = []
        let response = await axios.get('https://dukeappml.herokuapp.com//projects')
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
                <td> {this.state.members[i].title} </td>
                <td>{this.state.members[i].description}</td>
                </tr>


            );
        }
    }
        
        return(
            <div>{array}</div>
        );
       
    };

    render() {
       
        return(
            <div>
            {this.getJSX()}
            
            </div>
            );
       
    }
}


