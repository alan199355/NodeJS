import React from "react";
import { Layout, Menu, Icon } from "antd";
import { Switch, Route, NavLink } from "react-router-dom";
import "antd/dist/antd.css";
import GetUserInfo from "../UserInfo/GetUserInfo/GetUserInfo";
import UserList from "../User/UserList/UserList";
import Test from "../User/UserList/Test";
import Debounce from "../Animate/Debounce";
import Throttle from "../Animate/Throttle";
import BubbleSort from "../Animate/Sort/BubbleSort";
import QuickSort from "../Animate/Sort/QuickSort";
import QuickSortInplace from "../Animate/Sort/QuickSortInPlace";
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
// import Sider from "antd/lib/layout/Sider";

class LayoutContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    console.log(e);
  }
  render() {
    return (
      <Layout>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0
          }}
        >
          <Menu
            onClick={this.handleClick}
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["4"]}
          >
            <Menu.Item key="1">
              <Icon type="user" />
              <span className="nav-text">yeqiang111</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="mail" />
                  <span>Navigation One</span>
                </span>
              }
            >
              <Menu.Item key="5">
                <NavLink to="/home/userList">userList</NavLink>
              </Menu.Item>
              <Menu.Item key="6">
                <NavLink to="/home/test">test</NavLink>
              </Menu.Item>
              <Menu.Item key="7">
                <NavLink to="/home/debounce">防抖动画</NavLink>
              </Menu.Item>
              <Menu.Item key="8">
                <NavLink to="/home/throttle">节流动画</NavLink>
              </Menu.Item>
              <Menu.Item key="9">
                <NavLink to="/home/bubblesort">冒泡排序</NavLink>
              </Menu.Item>
              <Menu.Item key="10">
                <NavLink to="/home/quicksort">快速排序-非原地版</NavLink>
              </Menu.Item>
              <Menu.Item key="10">
                <NavLink to="/home/quicksortInplace">快速排序-原地版</NavLink>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ marginLeft: 200 }}>
          <Header style={{ background: "#fff", padding: 0 }} />
          <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
            <div>
              <Switch>
                <Route path="/home/getUserInfo" component={GetUserInfo} />
                <Route path="/home/userList" component={UserList} />
                <Route path="/home/test" component={Test} />
                <Route path="/home/debounce" component={Debounce} />
                <Route path="/home/throttle" component={Throttle}></Route>
                <Route path="/home/bubbleSort" component={BubbleSort}></Route>
                <Route path="/home/quickSort" component={QuickSort}></Route>
                <Route
                  path="/home/quickSortInplace"
                  component={QuickSortInplace}
                ></Route>
              </Switch>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
export default LayoutContainer;
