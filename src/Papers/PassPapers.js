import React from 'react';
//import {useState} from 'react';
//import axios from "axios";
//import Table from 'react-bootstrap/Table';
import "../Forms.css";

import AddPapers from './AddPapers';



export default class PassPapers extends React.Component {

      state = {
        papers: []
    };


    componentDidMount() {
        //this.getMembers();
    }

    /* getMembers =  async () => {
        
        let response = await axios.get('https://dukeappml.herokuapp.com//users')
        this.setState({members: response.data}) 
        console.log("successsssss");     
        console.log(this.state.members);       
        this.forceUpdate();
    }; */

    



  render() {
    return(
    <div>
       
        <AddPapers papers = {this.state.papers} hello = {"helloworld"}/>
        
    </div>
  );
}

}
