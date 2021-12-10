<template>
  <div class="app-layout">
    <Navbar />
    <Main />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Main from './components/Main'
export default {
  name: 'Layout',
  components: {
    Navbar,
    Main
  }
}
</script>
