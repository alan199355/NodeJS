import React from "react";
import {
    Layout,
    Menu,
    Icon,
} from 'antd';
import {Switch,Route,NavLink} from 'react-router-dom'
import "antd/dist/antd.css";
import GetUserInfo from '../UserInfo/GetUserInfo/GetUserInfo'
const { Header, Content, Footer, Sider } = Layout;
const SubMenu=Menu.SubMenu
// import Sider from "antd/lib/layout/Sider";

class LayoutContainer extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick(e){
        console.log(e)
    }
    render(){
        return(
            <Layout>
                <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
                    <Menu onClick={this.handleClick} theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                        <Menu.Item  key="1">
                            <Icon type="user" />
                            <span className="nav-text">nav 1</span>
                        </Menu.Item>
                        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                            <Menu.Item  key="5">Option 5</Menu.Item>
                            <Menu.Item key="6">Option 6</Menu.Item>
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{ marginLeft: 200 }}>
                    <Header style={{ background: '#fff', padding: 0 }} /> 
                    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                        <div>
                            <Switch>
                                <Route path="/home/getUserInfo" component={GetUserInfo}></Route>
                            </Switch>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}
export default LayoutContainer