<template>
    <el-container>
        <el-header class="fixed-bar" height="auto">
            <navigation-bar></navigation-bar>
        </el-header>
        <el-main>
            <banner-component></banner-component>
            <about-component></about-component>
        </el-main>
        <!-- <el-footer></el-footer> -->
    </el-container>
</template>

<script>
import NavigationBar from '../components/header/NavigationBar.vue';
import BannerComponent from '../components/main/BannerComponent.vue';
import AboutComponent from '../components/main/AboutComponent.vue';

export default {
    name: 'HomeView',
    components: {
        NavigationBar,
        BannerComponent,
        AboutComponent,
    }
}
</script>

<style lang="scss" scoped>
.fixed-bar {
    width: 100%;
    position: fixed;
    left: 0;
    right: 0;
    z-index: 1;
}

.el-main {
    overflow: unset;
}
</style>