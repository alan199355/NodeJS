import React from 'react';
import { Table, Divider, Tag } from 'antd';
const { Column, ColumnGroup } = Table;
import {userAPI} from '../../services/user'

class UserList extends React.Component {
  constructor() {
    super();
    this.state = { userList:[] };
  }

  render() {
    return (
        <Table dataSource={this.state.userList}>
            <Column title="_id" key="_id" />
            <Column title="username" key="username" />
            <Column title="password" key="password" />
            <Column title="email" key="email" />

        </Table>
    )
  }

  componentDidMount() {
    // this.setState({ someKey: 'otherValue' });
    this.getUserList=this.getUserList.bind(this)
    this.getUserList()
  }

  async getUserList(){
      try {
        let res=await userAPI.getUserList()
        this.setState({
            userList:res.data
        })
        console.log(this.state.userList,'adsdas')
      } catch (error) {
          
      }
  }
}

export default UserList;
