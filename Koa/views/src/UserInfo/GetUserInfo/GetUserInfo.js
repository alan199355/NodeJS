import React from "react";
import { Form, Icon, Input, Button, Checkbox, Upload, message } from "antd";
import "antd/dist/antd.css";
import axios from "axios";
import { query } from "../../config/config";
import $ from 'jquery';


class GetUserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      file:''
    };
    this.getUserInfo = this.getUserInfo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submitImage=this.submitImage.bind(this);
  }

  componentDidMount() {}
  submitImage(event) {
    //this.setState({value: event.target.value});
    // let form = this.state.file;
    // let data = new FormData();
    let config = {
      headers:{'Content-Type':'multipart/form-data'}
    };
    // data.append('file',form.thumb)
    var form = document.forms[0];
    console.log(form)
    var data = new FormData(form);
    // data.append('file',input.files[0])
    // let fileData = this.refs.fileUpload.files[0];
    // data.append('file',fileData);
    // query({
    //   method:'post',
    //   url:'http://127.0.0.1:3012/api/upload',
    //   data:data,
    //   headers:{
    //     'Content-Type': 'application/octet-stream'
    //   }
    // }).then(res=>{
    //   console.log(res,'111')
    // })
    // query.post("upload", data);
    axios.post('http://127.0.0.1:3012/api/upload',data,config)
    .then(res=>{
      console.log(res)
    })
  }
  handleChange(e){
    e.preventDefault()
    let files = e.target.files
    files[0].thumb=URL.createObjectURL(files[0])
    files = Array.prototype.slice.call(files, 0)
    this.setState({
      file:files
    })
  }
  handleSubmit(event) {
    alert("An essay was submitted: " + this.state.value);
    event.preventDefault();
  }
  async getUserInfo() {
    //query.post('auth/getUserInfo');
    //query.post("fileUpload");
    console.log(this.props);
    
  }

  render() {
    return (
      <div>
        <Button onClick={this.getUserInfo}>get user info</Button>
        
        <form name="imageFoem" encType="application/octet-stream">
          <input
            ref="fileUpload"
            type="file"
            onChange={this.handleChange}
            
            name="file"
          />
          <Button onClick={this.submitImage}>submit</Button>
        </form>
      </div>
    );
  }
}
export default GetUserInfo;
