import React from 'react';
import "./Forms.css";
import { Row, Col} from 'reactstrap';
import {Input} from 'reactstrap';




export default class UploadImages extends React.Component {

  state = {
    loading: false,
    currenturl: ""
  };
  
  imageUpload =  async (e) => {
   

    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'damlImages')
    this.setState({loading: true});
    this.setState({currenturl: "Loading..."})
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/dndwfzjzr/image/upload', 
      {
        method: 'POST',
        body: data
    }
    ) 
    const file = await res.json()
    console.log(file);
    this.setState({loading:false})
    this.setState({currenturl: "https://res.cloudinary.com/dndwfzjzr/" + file.public_id});

    
  }

  isLoading = () => {
    if (this.state.loading){
      return (<h3>"-Loading..."</h3>)
    }
    else
      return ""
    
  }


  render() {
    return(
      <div className = "fullpage">
      <Row>
        <Col md = {6}>
        <div className = "left">
        <h1>Image Upload {this.isLoading}</h1>
        <br/>
        <h3>1. Upload File</h3>
        <h3>2. Copy URL</h3>
        <h3>3. Submit URL on relevant form</h3>
        <br/>
        </div>
        </Col>
        <Col md = {6} className = "right">
          <div >
          <br/>
          <br/>
          <br/>
          <h3>URL:  </h3>
          <Input type = "text" defaultValue = {this.state.currenturl}/>
          </div>
        </Col>
      </Row>
       <Row className="fullpage">
      <input className = "left" type = 'file' onChange ={this.imageUpload}/>
      </Row>
    </div>


    
  );
}

}








