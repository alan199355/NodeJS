import React from "react";
import {
    Layout,
    Menu,
    Icon
} from 'antd';
import "antd/dist/antd.css";
import Sider from "antd/lib/layout/Sider";

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
            </Layout>
        )
    }
}
export default LayoutContainer