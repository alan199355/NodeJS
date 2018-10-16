 import buildService from '../../helper/service'
// 值类型为String或Object,String为url(method),Object同axios(config)参数支持相同,data和params只能为对象类型
const settings = {
  // 登陆
  login: {
    url: 'api/auth/login',
    method: 'post',
    data: {}
  },
  // 注册
  register: {
    url: 'api/auth/register',
    method: 'post',
    data: {}
  },
  // 获取用户列表
  getUserList: {
    url: 'api/user/getUserList',
    method: 'get',
    params: {}
  },
  // 删除用户
  deleteUser:{
    url:'api/user/deleteUser',
    method:'post',
    data:{}
  }
}

export default buildService(settings)
