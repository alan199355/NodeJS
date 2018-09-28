import React from "react";
import { Table, Divider, Tag,Button } from "antd";
const { Column, ColumnGroup } = Table;
import { userAPI } from "../../services/user";



class UserList extends React.Component {
  constructor() {
    super();
    this.state = { userList: [] };
    this.columns=[
      {
        title:'username',
        dataIndex:'username'
      },
      {
        title:'password',
        dataIndex:'password'
      },
      {
        title:'email',
        dataIndex:'email'
      },
      {
        title:'action',
        dataIndex:'action',
        render:record => (
          <span>
            <a href="javascript:;">编辑</a> 
            <Divider type="vertical" />
            <a href="javascript:;">删除</a>
          </span>
        )
        
      }
    ]
  }
  
  

  render() {
    return (
      <Table 
        columns={this.columns}
        rowKey={record => record._id}
        dataSource={this.state.userList}
       />
      // <Table dataSource={this.state.userList}>
      //   <Column title="username" dataIndex="username" key="username" />
      //   <Column title="password" dataIndex="password" key="password" />
      //   <Column title="email" dataIndex="email" key="email" />
      //   <Column
      //     title="Action"
      //     key="action"
      //     dataIndex="action"
      //     render={record => (
      //       <span>
      //         <a href="javascript:;">编辑</a>
      //         <Divider type="vertical" />
      //         <a href="javascript:;">删除</a>
      //       </span>
      //     )}
      //   />
      // </Table>
    );
  }

  componentDidMount() {
    // this.setState({ someKey: 'otherValue' });
    this.getUserList = this.getUserList.bind(this);
    this.getUserList();
  }

  async getUserList() {
    try {
      let res = await userAPI.getUserList();
      this.setState({
        userList: res.data
      });
      console.log(this.state.userList, "adsdas");
    } catch (error) {}
  }
}

export default UserList;
