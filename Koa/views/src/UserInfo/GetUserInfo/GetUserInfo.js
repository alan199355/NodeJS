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
  }
  
  componentDidMount() {
    
  }
  handleChange(){
    //this.setState({value: event.target.value});
    console.log(event.target.value);
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
        <form>
          <input type="text" name="value" value={this.state.value} onChange={this.handleChange} />
        </form>
        
      </div>
    );
  }
}
export default GetUserInfo;
