<template>
  <div class="app-container">
    <div class="app-container-block">
      <div
        v-for="item in list"
        :key="item.id"
        v-highlight
        class="regular-item"
      >
        <div class="regular-item-name">{{ item.name }}</div>
        <code class="javascript" v-html="item.code" />
      </div>
    </div>
  </div>
</template>

<script>
import highlight from '@/directive/highlight/index'
import Regulars from '@/utils/regulars'
export default {
  name: 'Regular',
  directives: {
    highlight
  },
  data() {
    return {
      list: Regulars
    }
  }
}
</script>

<style lang="scss" scoped>
.regular-item {
  padding: 10px 0;
  &-name {
    color: #FD9A0D;
    height: 20px;
    line-height: 20px;
  }
}
</style>
