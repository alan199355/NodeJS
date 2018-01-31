import React from "react";
import { Form, Icon, Input, Button, Checkbox, Upload, message } from "antd";
import "antd/dist/antd.css";
import axios from "axios";
import { query } from "../../config/config";



class GetUserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.getUserInfo = this.getUserInfo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {}
  handleChange(event) {
    //this.setState({value: event.target.value});
    let data = new FormData();
    let fileData = this.refs.fileUpload.files[0];
    data.append('imgData',fileData);
    query.post("upload", data);
  }
  handleSubmit(event) {
    alert("An essay was submitted: " + this.state.value);
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
        <Button onClick={this.getUserInfo}>get user info</Button>
        
        <form action="http://127.0.0.1:3012/api/upload" method="post" encType="multipart/form-data">
          <input
            ref="fileUpload"
            type="file"
            value={this.state.value}
            onChange={this.handleChange}
            name="imgData"
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default GetUserInfo;
