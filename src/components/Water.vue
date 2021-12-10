<template>
  <div class="water-component">
    <canvas id="water" />
  </div>
</template>

<script>
export default {
  name: 'Water',
  mounted() {
    const that = this
    const canvas = document.getElementById('water')
    const ctx = canvas.getContext('2d')
    this.setSize(canvas)
    const crest = canvas.height / 10 // 最大高度
    const base = canvas.height / 1.3 // 最小高度
    let step = 0 // 初始角度
    const colors = ['rgba(229, 229, 229, 0.6)', 'rgba(62, 62, 62, 0.3)'] // 波浪的颜色

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      step += 1

      colors.forEach((item, index) => {
        ctx.fillStyle = item
        const angle = (step + index * 50) * Math.PI / 180
        const start = Math.sin(angle) * crest
        const end = Math.cos(angle) * crest
        ctx.beginPath()
        ctx.moveTo(0, base + start)
        ctx.bezierCurveTo(canvas.width / 2, base + start - crest, canvas.width / 2, base + end - crest, canvas.width, base + end)
        ctx.lineTo(canvas.width, canvas.height)
        ctx.lineTo(0, canvas.height)
        ctx.closePath()
        ctx.fill()
      })

      window.requestAnimationFrame(draw)
    }

    draw()

    window.onresize = function() {
      that.setSize(canvas)
    }
  },
  methods: {
    setSize(canvas) {
      canvas.width = canvas.parentNode.offsetWidth
      canvas.height = canvas.parentNode.offsetHeight
    }
  }
}
</script>

<style lang="scss" scoped>
.water-component {
  width: 100%;
  height: 350px;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 3;
}
</style>
