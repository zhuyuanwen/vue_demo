<template>
    <div>
        <p>{{$route.params.id}}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        components: {
        },
        mounted() {
        },
        computed:{},
        created () {},
        watch: {},
        methods: {
            reload(){
                window.location.reload();
            },

        },
    }
</script>

<style lang="scss" scoped>
    @import '../styles/home_web';
</style>

