import React from 'react';
import {useState} from 'react';
import axios from "axios";
import Table from 'react-bootstrap/Table';
import "../Forms.css";
import AddDnews from './AddDnews';



export default class PassNews extends React.Component {

      state = {
        members: [1]
    };


   /*  componentDidMount() {
        this.getMembers();
    }

    getMembers =  async () => {
        
        let response = await axios.get('https://dukeappml.herokuapp.com//users')
        this.setState({members: response.data}) 
        console.log("successsssss");     
        console.log(this.state.members);       
        this.forceUpdate();
    };

     */



  render() {
    return(
    <div>
       
        <AddDnews members = {this.state.members} hello = {"helloworld"}/>
        
    </div>
  );
}

}
