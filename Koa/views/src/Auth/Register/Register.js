import React from "react";
import { withRouter, BrowserRouter, NavLink } from "react-router-dom";
import { Form, Icon, Input, Button, Checkbox, message } from "antd";
import "antd/dist/antd.css";
import axios from "axios";
import {userAPI} from '../../services/user'
const FormItem = Form.Item;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submitData = this.submitData.bind(this);
  }

  async submitData(val) {
    // const res = await axios.post(
    //   "http://127.0.0.1:3012/api/auth/register",
    //   val
    // );
    // if (res.data.error) {
    //   message.error(res.data.message);
    // } else {
    //   message.info(res.data.message);
    //   this.props.history.push('login')
    // }
   
    try {
      let res=await userAPI.register({
        url:'http://127.0.0.1:3012/api/auth/register',
        data:val
      })
      console(res,'res')
    } catch (error) {
      console.log(error)
    }
    // console.log(userAPI.register)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.submitData(values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator("username", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator("email", {
            rules: [{ required: true, message: "Please input your Email!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Email"
            />
          )}
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Register
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const Login = Form.create()(LoginForm);
export default Login;
