/**
 * 模块化引入lodash,按需引入
 * depend:lodash-webpack-plugin/babel-plugin-lodash
 */

import _ from 'lodash'

export default {
  assignIn: _.assignIn,
  assignWith: _.assignWith,
  assign: _.assign,
  clone: _.clone,
  debounce: _.debounce,
  throttle: _.throttle,
  find: _.find,
  values: _.values,
  size: _.size,
  pick: _.pick,
  isEmpty: _.isEmpty,
  isFunction: _.isFunction,
  isArray: _.isArray,
  isDate: _.isDate,
  remove: _.remove
}
