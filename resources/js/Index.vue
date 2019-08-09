<template>
    <div>
        <HeaderNav></HeaderNav>
        <router-view></router-view>
        <FooterNav></FooterNav>
    </div>
</template>
<script>
    import HeaderNav from "./components/Header";
    import  FooterNav from "./components/Footer";

    export default {
        name: 'App',
        components: {
            HeaderNav,
            FooterNav
        }
    }
</script>
<style>

</style>