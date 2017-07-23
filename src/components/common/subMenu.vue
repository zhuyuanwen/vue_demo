 <template>
    <div class="submenu-container">
        <el-row>
            <!-- left -->
            <el-col :xs="0" :sm="1" :md="2" :lg="4">
                <div class="grid-content"></div>
            </el-col>

            <!-- middle -->
            <el-col :xs="24" :sm="22" :md="20" :lg="16">
                <div class="grid-content">
                    <!-- middle left -->
                    <el-col :xs="24" :sm="18" :md="16" :lg="16">
                        <el-col :span="4">
                            <div class="grid-menu">
                                <router-link :to="'/pageone'" tag="div" active-class="menu-active">
                                    <a>页面一</a>
                                </router-link>
                            </div>
                        </el-col>
                        <el-col :span="4">
                            <div class="grid-menu">
                                <router-link :to="'/pagetwo'" tag="div" active-class="menu-active">
                                    <a>页面二</a>
                                </router-link>
                            </div>
                        </el-col>
                        <el-col :span="4">
                            <div class="grid-menu">
                                <router-link :to="'/pagethree'" tag="div" active-class="menu-active">
                                    <a>页面三</a>
                                </router-link>
                            </div>
                        </el-col>
                    </el-col>
                </div>
            </el-col>

            <!-- right -->
            <el-col :xs="0" :sm="1" :md="2" :lg="4">
                <div class="grid-content"></div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
    	data(){
    	    return {
            }
        },
        mounted(){
        },
        computed: {
        },
        methods: {
        },
    }
</script>


<style>
    .el-tabs__header {
        border-bottom: none;
        margin: 0;
    }

    .el-tabs__item {
        color: #777;
    }

    .el-tabs__item.is-active {
        color: #32a8d9;
    }

    .el-tabs__active-bar {
        background-color: #32a8d9;
    }
</style>
<style lang="scss" scoped>
    @import '../../styles/submenu_web';
    .menu-active {
        color: #41b883;
        height: 50px;
        border-bottom: 3px solid #41b883;
        a {
            color: #41b883;
        }
    }
    a:focus {
        color: inherit;
    }
</style>
