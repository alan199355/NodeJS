import React from "react";
import { Table, Divider, Tag,Button,message } from "antd";
const { Column, ColumnGroup } = Table;
import { userAPI } from "../../services/user";
import './UserList.scss'


class UserList extends React.Component {
  constructor() {
    super();
    this.state = { userList: [] };
    this.columns=[
      {
        title:'用户名',
        dataIndex:'username'
      },
      {
        title:'密码',
        dataIndex:'password'
      },
      {
        title:'邮箱',
        dataIndex:'email'
      },
      {
        title:'操作',
        dataIndex:'action',
        render:(text,record) => {
          return (
            <span className="action">
              <a href="javascript:;">编辑</a> 
              <i className="divider"></i>
              <a  onClick={() => this.delete(record)} href="javascript:;">删除</a>
            </span>
          )
        }
        
      }
    ]
  }
  
  async delete(record){
    try {
      let res = await userAPI.deleteUser({
        data:{id:record._id}
      })
      let data=res.data
      message.info(data.message)
      this.getUserList()
    } catch (error) {
      
    }
  }

  render() {
    const columns = this.columns
    return (
      <div className="user-list-container">
        <Button onClick={this.getUserList} type="primary" 
          className="refresh-button">
          刷新
        </Button>
        <Table 
        columns={columns}
        rowKey={record => record._id}
        dataSource={this.state.userList}
        className="user-list-table"
      />
      </div>
     
     
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
