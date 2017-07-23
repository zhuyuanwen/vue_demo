<template>
  <div>
    <head-top signin-up='home'>
      <span slot='logo' class="head_logo" @click="reload"><img height="30px" src="../images/logo.png"/></span>
    </head-top>
    <sub-menu></sub-menu>

    <el-row>
      <!-- 分栏偏移居中 -->
      <el-col :xs="{span: 22, offset: 1}" :sm="{span: 22, offset: 1}" :md="{span: 20, offset: 2}"
              :lg="{span: 16, offset: 4}">
        <div class="home-container">
          home
        </div>
      </el-col>
    </el-row>
    <br/>

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
    mounted(){},
    computed: {},
    methods: {
      reload(){
        window.location.reload();
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import '../styles/home_web';
  @import '../styles/mixin';
  @import '../../node_modules/element-ui/lib/theme-default/index.css';
  @import '../../node_modules/font-awesome/css/font-awesome.min.css';

  .shop-id {
    max-width: 300px;
  }

  .home-container {
    margin-top: 50px;
    font-size: 14px;
  }

  .line-height-50 {
    line-height: 50px;
  }

  .shop-chosen {
    font-size: 18px;
    color: #20a0ff;
    margin-left: 15px;
  }

  .shop-not-chosen {
    font-size: 18px;
    color: #ccc;
    margin-left: 15px;
    display: none;
  }

  .width-500 {
    max-width: 500px;
  }
</style>

