<template>
    <div class="wrap-container"  v-on:keyup.enter="reg">
        <div class="middle-container">
            <div class="" style="height: 370px;">
                <div class="login-logo">
                    <img height="60" src="../images/logo.png"/>
                </div>
                <!--注册-->
                <form class="login-form">
                    <section class="input_container">
                        <input type="text" placeholder="用户名" minlength="5" v-model="user.username">
                    </section>
                    <section class="input_container">
                        <input type="text" placeholder="邮箱" v-model="user.email">
                    </section>
                    <section class="input_container">
                        <input v-if="!showPassword" type="password" placeholder="密码" minlength="6" v-model="user.password">
                        <input v-else type="text" placeholder="密码" minlength="6" v-model="user.password">

                        <div class="login-password-switch" @click="changePassWordType" v-show="!showPassword">显示密码</div>
                        <div class="login-password-switch" @click="changePassWordType" v-show="showPassword">隐藏密码</div>

                    </section>
                    <section class="input_container captcha_code_container">
                        <input type="text" placeholder="邀请码" maxlength="8" v-model="user.verify">
                    </section>
                </form>

                <div class="login_container" @click="reg" type="submit">注册</div>
                <router-link :to="'/login'">
                    <div class="login-register-switch">已有账号？马上登录</div>
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
                    email: '',
                    password: '',
                    verify: ''
                },
                showPassword: false, // 是否显示密码
            }
        },
        mounted(){
        },
        created(){
        },
        components: {
            headTop,
        },
        computed: {
            ...mapActions({
                UserReg: 'UserReg',
            })
        },
        methods: {
            reg(){
                this.$store.dispatch('UserReg', this.user);
            },

            //是否显示密码
            changePassWordType() {
                this.showPassword = !this.showPassword;
            },

        }
    }

</script>

<style lang="scss" scoped>
    @import '../styles/login_web';
</style>


