import React from "react";
import { connect } from "react-redux";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import "antd/dist/antd.css";
import "./Login.scss";
import axios from "axios";
import { saveToken } from "../../store/home/action";
import AddToken from "../container/test";
import TokenVal from '../container/test2';
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
    const res = await axios.post("http://127.0.0.1:3012/api/auth/login", val);            
    localStorage.setItem('token',res.data.token);
    if(res.data.result){
      this.context.router.history.push('/getUserInfo');
    }
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
          {getFieldDecorator("userName", {
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
          {getFieldDecorator("remember", {
            valuePropName: "checked",
            initialValue: true
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <a href="">register now!</a>
        </FormItem>
      </Form>
    );
  }
}
LoginForm.contextTypes = {
  router: React.PropTypes
};
let LoginComponent = Form.create()(LoginForm);
const Login = (token,dispatch) => {
  return (
    <div>      
      <AddToken />
      <LoginComponent val={token} />      
      
    </div>
  );
};
const mapStateToProps = state => ({
  token: state.appData
});

export default connect(mapStateToProps, {
  saveToken
})(LoginComponent);
