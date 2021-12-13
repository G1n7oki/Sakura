import hljs from 'highlight.js'
import 'highlight.js/styles/vs.css'

export default {
  bind(el, binding) {
    // 在第一次绑定时, 突出显示所有的目标
    const targets = el.querySelectorAll('code')
    targets.forEach(target => {
      // 如果一个值是直接赋给指令的, 使用this而不是元素内容
      if (typeof binding.value === 'string') {
        target.textContent = binding.value
      }
      hljs.highlightBlock(target)
    })
  },
  componentUpdated(el, binding) {
    const targets = el.querySelectorAll('code')
    targets.forEach(target => {
      // 如果一个值是直接赋给指令的, 使用this而不是元素内容
      if (typeof binding.value === 'string') {
        target.textContent = binding.value
        hljs.highlightBlock(target)
      }
    })
  }
}
