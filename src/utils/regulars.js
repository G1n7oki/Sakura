const regulars = [{
  id: 1,
  name: '返回精准类型',
  code: `const toRawType = (obj) => {
    return Object.prototype.toString.call(obj).match(/\\s([a-zA-Z]+)/)[1].toLowerCase()
  }`
}, {
  id: 2,
  name: '验证手机号',
  code: `const isMobile = value => { 
    const reg = /^1[3456789]\\d{9}$/
    return reg.test(value)
  }`
}, {
  id: 3,
  name: '验证身份证',
  code: `const isIdentity = value => {
    const reg = /^[1-9]\\d{7}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}$|^[1-9]\\d{5}[1-9]\\d{3}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}([0-9]|X)$/
    return reg.test(value)
  }`
}, {
  id: 4,
  name: '验证国内车牌',
  code: `const isIdentity = value => {
    const reg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/
    return reg.test(value)
  }`
}, {
  id: 5,
  name: '验证邮箱',
  code: `const isEmail = value => {
    const reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/
    return reg.test(value)
  }`
}, {
  id: 6,
  name: '验证电话号码',
  code: `const isEmail = value => {
    const reg = /^([0-9]{3,4}-)?[0-9]{7,8}$/
    return reg.test(value)
  }`
}, {
  id: 7,
  name: '验证url',
  code: `const isUrl = value => {
    const reg = /^http[s]?:\\/\\/.*/
    return reg.test(value)
  }`
}]

export default regulars
