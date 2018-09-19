import React from 'react';
import {userAPI} from '../../services/user'

class UserList extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    return <p>{this.state.someKey}</p>;
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
    this.getUserList=this.getUserList.bind(this)
    this.getUserList()
  }

  async getUserList(){
      try {
        let res=await userAPI.getUserList()
        console.log(res)
      } catch (error) {
          
      }
  }
}

export default UserList;
