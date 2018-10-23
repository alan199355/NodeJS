import http from './http'
// import _ from './lodash'
function request (options, setting) {
  if (typeof settings === 'string') {
    setting = {
      url: setting
    }
  }
  if (typeof options === 'object') {
    // delete options.url
    Object.assign(setting, options)
    /* _.assignWith(setting, options, function (objValue, srcValue, key) {
      return key === 'url' ? objValue : srcValue
    }) */
  }
  // setting[setting.method === 'post' ? 'data' : 'params'].method = setting.url
  // delete setting.url// url在http中默认设置,不能被覆盖

  return http(setting)
}

function buildService (settings) {
  const service = {}
  for (let prop in settings) {
    service[prop] = (options) => {
      return request(options, settings[prop])
    }
    // service[prop] = _.partial(request, _, settings[prop])
  }
  return service
}

export default buildService
