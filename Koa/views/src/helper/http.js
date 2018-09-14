/**
 * axios实例的包装方法,返回axios实例,调用和原始axios实例方法相同
 * then通过拦截器,返回接口原始数据(axios返回{config,data,header,request},其中data为原始数据),
 * 拦截会在retCode等于0000才会正常返回,否则会进入catch(reject),把错误信息反馈给用户,使用时一般不用自己处理catch,但要写catch(()=>{})捕获
 * 如需跳过拦截器,可通过设置intercept值
 * @returns axios interceptor instance
 */
import Axios from 'axios'
// import qs from 'qs'
import util from './util'
// import { Message } from 'element-ui'
// import thisVue from '../mian.js';

// 创建自定义实例默认值
const instance = Axios.create({
  baseURL: util.apiServer,
  url: '/web/service-activity',
  timeout: 20000,
  responseType: 'json',
  withCredentials: true,
  headers: {
    
  },
  intercept: 'all' // 拦截器选项,all:then和catch均通过拦截器,resolve:只有then通过拦截器,reject:只有catch通过拦截器,none:then和catch均不通过拦截器
})
instance.interceptors.request.use((config) => {
  console.log(config,'123456')
  // axios post请求data值类型为urlencode或URLSearchParams,Content-Type会默认设置为application/x-www-form-urlencoded,但在http请求为参数统一,不允许使用对象类型外值,还是显示设置Content-Type
  if (config.method === 'post') {
    // config.data = qs.stringify(config.data)
  }
  // var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1bmlvbklkIjpudWxsLCJwaG9uZSI6bnVsbCwibmlja05hbWUiOiJzdXBlck1hbmFnZXIiLCJvcGVuSWQiOm51bGwsInVzZXJUeXBlIjoyLCJ1c2VyTmFtZSI6bnVsbCwidXNlcklkIjoxLCJ0cyI6MTUyNDIxNjc4Njc5N30.j_c4vgYTi-IIPwzdJD9xLzAQVAiU0bIkiYzeAXULWVc'
  var token = window.sessionStorage.getItem('token') ? window.sessionStorage.getItem('token') : ''
  if (token) {
    config.headers['token'] = token
  }

  return config
})

// 自定义实例添加拦截器
instance.interceptors.response.use((res) => {
  if (res.config.intercept !== 'none' && res.config.intercept !== 'reject') {
    // console.log('interceptors.response:', res)
    if (res.data.retCode === '0000') {
      // return res
    } else if (res.data.retCode === '9003') {
      util.setupWebViewJavascriptBridge((bridge) => {
        bridge.callHandler('letmeLogin', function (response) {})
      })
    } else {
      // if(Axios.isCancel(res))
      // 如果intercept设置为resolve,then拦截会判断返回码状态,不会弹出错误信息,如果设置为reject,catch拦截只会处理原始错误信息
      if (res.config.intercept !== 'none' && res.config.intercept !== 'resolve') {
        // Message.error(`${res.data.retCode}：${res.data.retMsg}`)
      }
      // return Promise.reject(res)
    }
  }
  return res
  // 拦截器中不return返回,then同样会执行
}, (err) => {
  if (err.config.intercept !== 'none' && err.config.intercept !== 'resolve') {
    // 这里错误拦截只会是err原始对象,不用判断err.response
    // Message.error(
    //   //`${err.response.status}：${err.response.statusText}`
    // )
  }
  // promise reject后必须有catch捕获错误,否则浏览器会报错,想在else中返回reject,就可以只在catch不启用拦截的情况,返回reject(但这样也有弊端,虽然可以不用必须写catch,但拦截器和catch不能同时链式使用),then拦截中不成功其他编码reject没法处理
  return Promise.reject(err)
}
)

export default instance
