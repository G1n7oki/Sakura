import Highlight from './highlight'

const install = function(Vue) {
  Vue.directive('Highlight', Highlight)
}

if (window.Vue) {
  window.highlight = Highlight
  Vue.use(install); // eslint-disable-line
}

Highlight.install = install
export default Highlight
