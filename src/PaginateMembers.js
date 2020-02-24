import React from 'react';
import './Forms.css';
import axios from "axios";
import Table from 'react-bootstrap/Table';

export default class PaginateMembers extends React.Component{
    
    state = {
        members: []
    };


    componentDidMount() {
        this.getMembers();
    }

     getMembers =  () => {

    axios.get('https://dukeappml.herokuapp.com//users')
    .then(data => this.setState({ members: data }))
    .catch(err => {
        console.log(err);
       
  });
};

    render() {
        for (let i = 0; i < this.state.members.length; i++ ) {
            let first = this.state.members[i].firstName;
            let last = this.state.members[i].lastName;
          return (
                <tr>
                  <td>{i}</td>
                  <td>{first}</td>
                  <td>{last}</td>
                </tr>
          );
        }
    }

    

}




