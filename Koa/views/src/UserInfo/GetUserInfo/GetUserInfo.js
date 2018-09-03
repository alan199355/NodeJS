import React from "react";
import { Form, Icon, Input, Button, Checkbox, Upload, message } from "antd";
import "antd/dist/antd.css";
import axios from "axios";
import { query } from "../../config/config";
import $ from "jquery";

class GetUserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      file: "",
      imgUrl: ""
    };
    this.getUserInfo = this.getUserInfo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submitImage = this.submitImage.bind(this);
  }

  componentDidMount() {}
  submitImage(event) {
    let config = {
      headers: { "Content-Type": "multipart/form-data" }
    };
    var form = document.forms[0];
    console.log(form);
    var data = new FormData(form);

    axios.post("http://127.0.0.1:3012/api/upload", data, config).then(res => {
      this.setState({
        imgUrl: res.data.url
      });
      console.log(this.state);
    });
  }
  handleChange(e) {
    e.preventDefault();
    let files = e.target.files;
    files[0].thumb = URL.createObjectURL(files[0]);
    files = Array.prototype.slice.call(files, 0);
    this.setState({
      file: files
    });
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
        <img src={this.state.imgUrl} />
      </div>
    );
  }
}
export default GetUserInfo;
