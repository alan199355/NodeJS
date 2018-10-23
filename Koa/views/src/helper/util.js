
export default {
  // 全局路径
  // apiServer: 'https://idream.zfaex.com',
  // 正式环境
  // apiServer: 'https://api.fenghezhumeng.cn',
  // 预发布环境地址
  // apiServer: 'https://uatapi.fenghezhumeng.cn/',
  // 测试环境
  apiServer: 'http://127.0.0.1:3012/',
  // 开发环境
  // apiServer: 'http://192.168.37.137:8201',
  /* apiServer () {
    return '/'
  }, */
  imageServer: '/',
  // 本地存储
  setStorage (name, content) {
    if (!name) return
    if (typeof content !== 'string') {
      content = JSON.stringify(content)
    }
    window.localStorage.setItem(name, content)
  },
  getStorage (name) {
    if (!name) return
    let content = window.localStorage.getItem(name)
    return JSON.parse(content)
  },
  removeStorage (name) {
    if (!name) return
    window.localStorage.removeItem(name)
  },
  // android初始化
  connectWebViewJavascriptBridge (callback) {
    if (window.WebViewJavascriptBridge) {
      callback(WebViewJavascriptBridge)
    } else {
      document.addEventListener(
        'WebViewJavascriptBridgeReady'
        , function () {
          callback(WebViewJavascriptBridge)
        },
        false
      )
    }
  },
  // ios初始化
  setupWebViewJavascriptBridge (callback) {
    let u = navigator.userAgent
    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
      if (window.WebViewJavascriptBridge) {
        callback(WebViewJavascriptBridge)
      } else {
        document.addEventListener(
          'WebViewJavascriptBridgeReady'
          , function () {
            callback(WebViewJavascriptBridge)
          },
          false
        )
      }
    } else {
      if (window.WebViewJavascriptBridge) { return callback(window.WebViewJavascriptBridge) }
      if (window.WVJBCallbacks) { return window.WVJBCallbacks.push(callback) }
      window.WVJBCallbacks = [callback]
      var WVJBIframe = document.createElement('iframe')
      WVJBIframe.style.display = 'none'
      WVJBIframe.src = 'https://__bridge_loaded__'
      document.documentElement.appendChild(WVJBIframe)
      setTimeout(function () { document.documentElement.removeChild(WVJBIframe) }, 0)
    }
  }
}
