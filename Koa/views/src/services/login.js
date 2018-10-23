import buildService from '@/helper/service'

// 值类型为String或Object,String为url(method),Object同axios(config)参数支持相同,data和params只能为对象类型
const settings = {
  login: {
    url: '/service-user/admin/user/login',
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    data: {}
  },
  loginOut: {
    url: '/service-user/admin/user/logout',
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    data: {}
  }
}

export default buildService(settings)
