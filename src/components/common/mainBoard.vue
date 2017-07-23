<template>
  <el-row>
    <!-- 分栏偏移居中 -->
    <!--<el-col :span="16" :offset="4">-->
    <el-col :xs="{span: 22, offset: 1}" :sm="{span: 22, offset: 1}" :md="{span: 20, offset: 2}"
            :lg="{span: 16, offset: 4}">
      <div class="mainboard-container">
        <el-row :gutter="20" class="margin-bottom-40">
          <el-col :xs="24" :sm="12" :md="6" :lg="6" class="padding-10"><!-- v-for="draft in draftsList"-->
            <div class="grid-thumb">
              <!--<router-link :to="'/editor' + draft.id ">-->
              <!--<img src="../../images/pano1.jpg" />-->
              <!--</router-link>-->
              <router-link to="/editor/87">
                <img src="../../images/pano1.jpg"/>
              </router-link>
            </div>
            <div class="grid-control">
              <el-col :span="16" :offset="4">
                <div class="grid-title ellipsis">
                  陆家嘴全景项目
                </div>
              </el-col><!--{{draft.projectName}}-->

              <el-col :span="20">
                <el-tooltip class="item" effect="dark" content="预览" placement="top">
                  <el-button class="grid-control-btn" type="text" size="mini">
                    <i class="fa fa-eye" aria-hidden="true"></i> 预览
                  </el-button>
                </el-tooltip>
                <el-tooltip class="item" effect="dark" content="发布" placement="top">
                  <el-button class="grid-control-btn" type="text" size="mini">
                    <i class="fa fa-paper-plane" aria-hidden="true"></i> 发布
                  </el-button>
                </el-tooltip>
              </el-col>
              <el-col :span="4">
                <el-tooltip class="item" effect="dark" content="删除" placement="top">
                  <el-button class="grid-control-btn" type="text" size="mini" icon="delete2"></el-button>
                </el-tooltip>
              </el-col>
            </div>
          </el-col>
          <el-col :xs="24" :sm="12" :md="6" :lg="6" class="padding-10">
            <div class="grid-thumb">
              <!--<router-link :to="'/editor' + draft.id ">-->
              <!--<img src="../../images/pano1.jpg" />-->
              <!--</router-link>-->
              <router-link :to="'/editor/1'">
                <img src="../../images/pano1.jpg"/>
              </router-link>
            </div>
            <div class="grid-control"></div>
          </el-col>
          <el-col :xs="24" :sm="12" :md="6" :lg="6" class="padding-10">
            <div class="grid-thumb"></div>
            <div class="grid-control"></div>
          </el-col>
          <el-col :xs="24" :sm="12" :md="6" :lg="6" class="padding-10">
            <div class="grid-thumb"></div>
            <div class="grid-control"></div>
          </el-col>
        </el-row>


        <!--<el-tooltip class="item" effect="dark" content="取消发布" placement="top">-->
        <!--<el-button class="grid-control-btn" type="text" size="mini">-->
        <!--<i class="fa fa-ban" aria-hidden="true"></i> 取消发布-->
        <!--</el-button>-->
        <!--</el-tooltip>-->

      </div>
    </el-col>
  </el-row>
</template>

<script>
  import subMenu from './subMenu'

  export default {
    data(){
      return {}
    },
    mounted(){

    },
    components: [
      subMenu
    ],
    props: [],
    methods: {}
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/mixin';

  .mainboard-container {
    margin-top: 40px;
    min-height: 150px;
    @include font(14 px, 50 px);
  }

  .margin-bottom-40 {
    margin-bottom: 40px;
  }

  .grid-thumb {
    border-radius: 8px 8px 0 0;
    height: 130px;
    background: #d9dfe2;
    @include font(14 px, 50 px);
    img {
      width: 100%;
      height: 130px;
      border-radius: 8px 8px 0 0;
    }
  }

  .grid-thumb:hover {
    cursor: pointer;
    opacity: 0.5;
  }

  .grid-control {
    margin-top: -1px;
    border-radius: 0 0 8px 8px;
    height: 100px;
    background: #fff;
    border: 1px solid #ddd;
    .grid-title {
      text-align: center;
    }

    .grid-title:hover {
      cursor: default;
    }

    .grid-control-btn {
      padding: 4px;
    }
  }

  .padding-10 {
    padding: 10px;
  }

</style>


