import React from "react";
import { withRouter, BrowserRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import "antd/dist/antd.css";
import "./Login.scss";
import { userAPI } from "../../services/user";
import { saveToken } from "../../store/home/action";
import AddToken from "../container/test";

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
  /**
   * 登录
   * @param {obj} userInfo-用户名及密码数据
   */
  async login(userInfo) {
    try {
      let res = await userAPI.login({
        data: userInfo
      });
      if (res.data.result) {
        this.props.history.push("home/getUserInfo");
      }
    } catch (error) {
      message.error(error);
    }
  }
  /**
   * 表单提交
   * @param {*} event
   */
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.login(values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {" "}
          {getFieldDecorator("userName", {
            rules: [
              {
                required: true,
                message: "Please input your username!"
              }
            ]
          })(
            <Input
              prefix={
                <Icon
                  type="user"
                  style={{
                    color: "rgba(0,0,0,.25)"
                  }}
                />
              }
              placeholder="Username"
            />
          )}{" "}
        </FormItem>
        <FormItem>
          {" "}
          {getFieldDecorator("password", {
            rules: [
              {
                required: true,
                message: "Please input your Password!"
              }
            ]
          })(
            <Input
              prefix={
                <Icon
                  type="lock"
                  style={{
                    color: "rgba(0,0,0,.25)"
                  }}
                />
              }
              type="password"
              placeholder="Password"
            />
          )}
        </FormItem>
        <FormItem>
          {" "}
          {getFieldDecorator("remember", {
            valuePropName: "checked",
            initialValue: true
          })(<Checkbox> Remember me </Checkbox>)}{" "}
          <a className="login-form-forgot" href="">
            Forgot password{" "}
          </a>{" "}
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <NavLink to="/register"> register now! </NavLink>
        </FormItem>{" "}
      </Form>
    );
  }
}
// LoginForm.contextTypes = {
//   router: React.PropTypes
// };
let LoginComponent = Form.create()(LoginForm);
const Login = (token, dispatch) => {
  return (
    <div>
      <AddToken />
      <LoginComponent val={token} />{" "}
    </div>
  );
};
const mapStateToProps = state => ({
  token: state.appData
});

export default connect(
  mapStateToProps,
  {
    saveToken
  }
)(LoginComponent);
