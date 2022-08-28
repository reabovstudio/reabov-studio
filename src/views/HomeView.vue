<template>
    <el-container>
        <el-header class="fixed-bar" height="auto">
            <navigation-bar></navigation-bar>
        </el-header>
        <el-main>
           <carousel-component></carousel-component>
        </el-main>
        <!-- <el-footer></el-footer> -->
    </el-container>
</template>

<script>
import NavigationBar from '../components/header/NavigationBar.vue';
import CarouselComponent from '../components/main/CarouselComponent.vue';

export default {
    name: 'HomeView',
    components: {
        NavigationBar,
        CarouselComponent
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
</style>