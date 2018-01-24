import React from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import "antd/dist/antd.css";
import axios from "axios";
import { query } from "../../config/config";

class GetUserInfo extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.getUserInfo = this.getUserInfo.bind(this);
  }
  async getUserInfo() {
    //query.post('auth/getUserInfo');
    query.post('fileUpload');
    console.log();
    // const res = await axios.post("http://127.0.0.1:3012/api/auth/getUserInfo");
    // console.log(res);
  }
  render() {
    return (
      <div>
        <Button onClick={this.getUserInfo}>get user info</Button>
      </div>
    );
  }
}
export default GetUserInfo;
