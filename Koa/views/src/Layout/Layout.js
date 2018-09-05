import React from "react";
import {
    Layout,
    Menu,
    Icon,
} from 'antd';
import {Switch,Route} from 'react-router-dom'
import "antd/dist/antd.css";
import GetUserInfo from '../UserInfo/GetUserInfo/GetUserInfo'
const { Header, Content, Footer, Sider } = Layout;
// import Sider from "antd/lib/layout/Sider";

class LayoutContainer extends React.Component {
    constructor(props) {
        super(props)

    }
    render(){
        return(
            <Layout>
                <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                    <Menu.Item key="1">
                        <Icon type="user" />
                        <span className="nav-text">nav 1</span>
                    </Menu.Item>
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