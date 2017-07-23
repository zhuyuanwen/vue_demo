<template>
  <div>
    <head-top signin-up='home'>
      <span slot='logo' class="head_logo" @click="reload"><img height="30px" src="../images/logo.png"/></span>
    </head-top>
    <sub-menu></sub-menu>
    <p>pagethree</p>

  </div>
</template>

<script>
  import headTop from '../components/header/headTop'
  import subMenu from '../components/common/subMenu'

  export default {
    data() {
      return {}
    },
    components: {
      headTop,
      subMenu,
    },
    mounted(){
    },
    computed: {},
    methods: {}
  }
</script>

<style lang="scss" scoped>
</style>

