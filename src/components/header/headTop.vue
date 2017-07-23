<template>
    <header id='head_top'>
        <slot name='logo'></slot>
        <slot name='search'></slot>

        <span class="head_login" @click="logout">{{ UserInfo }}&nbsp;,&nbsp;&nbsp;退出</span>

        <slot name="edit"></slot>
        <slot name="msite-title"></slot>
        <slot name="changecity"></slot>
        <slot name="changeLogin"></slot>
    </header>
</template>

<script>
    import axios from 'axios'
    import { mapGetters, mapActions } from 'vuex'

    export default {
    	data(){
            return{
                showAlert: false, //显示提示组件
                alertText: null, //提示的内容
            }
        },
        mounted(){
        },
        props: ['signinUp', 'headTitle', 'goBack'],
        beforeCreate(){
            // 当主页刷新时，如果服务端设置的cookie（包含sessionId）
            // 的时效到了的话，便会提示未登录
//            this.$http.get('/api')
//                .then(res => {
//                    console.dir(res.data)
//                    if (res.data.error) {
//                        this.$message.error(res.data.error);
//                        this.user.name = null;
//                        return false;
//                    }else{
//                        let user = localStorage.getItem('user');
//                        if (user) {
//                            this.user.name = user;
//                        }
//                    }
//                })
//                .catch(err => {
//                    this.$message.error(`${err.message}`)
//                })

            // 在headTop上整体让接口判断是否登录
            let thisVue = this;
//            axios.get(domain.isLoginUrl).then(function (res) {
//                if (res.data.status === "success") {
//                    console.log("has session id");
//                }
//                else {
//                    console.log("no session id");
//                    localStorage.removeItem('user');
//                    thisVue.$store.state.token = null;
//                    window.location.reload();
//                    thisVue.$router.push({name: '/login'});
//                }
//            })
//                .catch(function (err) {
//                    console.log(err);
//                });
        },
        computed: {
            ...mapGetters({
                UserInfo:"UserInfo"
            }),
            ...mapActions({
                UserLogout:"UserLogout"
            }),
            user(){
                return this.UserInfo
            }
        },
        methods:{
            logout(){
                this.$store.dispatch('UserLogout');
            },


            // 登出loginOut
//            loginOut(){
//                let thisVue = this;
//                axios.get(domain.logoutUrl)
//                    .then(function (res) {
//                        console.log(res.data.status);
//                        console.dir(res.data);
//                        if (res.data.status === "success") {
//                            thisVue.showAlert = true;
//                            thisVue.alertText = "退出成功";
//
//                            localStorage.islogin = "fail";
//                            console.log(localStorage.islogin);
//                            console.log("退出成功");
//                        }
//                    })
//                    .catch(err => {
//                        this.$message.error(`${err.message}`)
//                    })
//            }
        },

    }

</script>

<style lang="scss" scoped>
    @import '../../styles/headtop_web';
</style>


