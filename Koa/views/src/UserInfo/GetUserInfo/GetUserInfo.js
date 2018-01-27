import React from "react";
import { Form, Icon, Input, Button, Checkbox, Upload, message } from "antd";
import "antd/dist/antd.css";
import axios from "axios";
import { query } from "../../config/config";

const props = {
  name: 'file',
  //action: '//jsonplaceholder.typicode.com/posts/',
  action: '//127.0.0.1:3012/api/fileUpload',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

class GetUserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      value:''
    };
    this.getUserInfo = this.getUserInfo.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentDidMount() {
    
  }
  handleChange(event){
    this.setState({value: event.target.value});
    console.log(event.target.value);
  }
  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }
  async getUserInfo() {
    //query.post('auth/getUserInfo');
    query.post("fileUpload");
    console.log(this.props);   
  }

  render() {
   
    return (
      <div>
        <Button  onClick={this.getUserInfo}>get user info</Button>
        <Upload {...props}>
          <Button>
            <Icon type="upload" /> Click to Upload
          </Button>
        </Upload>
        <form onSubmit={this.handleSubmit}>
          <input type="text"  value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
        
      </div>
    );
  }
}
export default GetUserInfo;
