<template>
    <div class="wrap-container" v-on:keyup.enter="sub">
        <div class="middle-container">
            <div class="" style="height: 290px;">
                <div class="login-logo">
                    <img height="60" src="../images/logo.png"/>
                </div>
                <!--登录-->
                <form class="login-form">
                    <section class="input_container">
                        <input type="text" placeholder="用户名" v-model="user.username">
                    </section>
                    <section class="input_container">
                        <input v-if="!showPassword" type="password" placeholder="密码" v-model="user.password">
                        <input v-else type="text" placeholder="密码" v-model="user.password">
                        <div class="login-password-switch" @click="changePassWordType" v-show="!showPassword">显示密码</div>
                        <div class="login-password-switch" @click="changePassWordType" v-show="showPassword">隐藏密码</div>
                    </section>
                </form>

                <div class="login_container" @click="sub" type="submit">登录</div>
                <router-link :to="'/register'">
                    <div class="login-register-switch">没有账号？马上注册</div>
                </router-link>

            </div>
        </div>
    </div>
</template>

<script>
    import headTop from '../components/header/headTop'
    import { mapActions } from 'vuex'

    export default {
        data(){
            return {
                user: {
                    username: '',
                    password: ''
                },
                showPassword: false, // 是否显示密码
            }
        },
        computed: {
            ...mapActions({
                UserLogin: 'UserLogin',
            })
        },
        mounted(){
        },
        created(){
        },
        components: {
            headTop,
        },
        methods: {
            sub(){
                this.$store.dispatch('UserLogin', this.user);
            },
            //是否显示密码
            changePassWordType(){
                this.showPassword = !this.showPassword;
            },
        }
    }

</script>

<style lang="scss" scoped>
    @import '../styles/login_web';
</style>


