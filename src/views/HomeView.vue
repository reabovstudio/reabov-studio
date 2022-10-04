<template>
    <el-container>
        <el-header class="fixed-bar" height="auto">
            <navigation-bar></navigation-bar>
        </el-header>
        <el-main>
            <banner-component></banner-component>
            <about-component></about-component>
            <skills-component></skills-component>
            <portfolio-component></portfolio-component>
        </el-main>
        <el-footer height="auto">
            <footer-component></footer-component>
        </el-footer>
    </el-container>
</template>

<script>
import NavigationBar from '../components/header/NavigationBar.vue';
import BannerComponent from '../components/main/BannerComponent.vue';
import AboutComponent from '../components/main/AboutComponent.vue';
import SkillsComponent from '../components/main/SkillsComponent.vue';
import PortfolioComponent from '../components/main/PortfolioComponent.vue';
import FooterComponent from '../components/footer/FooterComponent.vue';

export default {
    name: 'HomeView',
    components: {
        NavigationBar,
        BannerComponent,
        AboutComponent,
        SkillsComponent,
        PortfolioComponent,
        FooterComponent,
    }
}
</script>

<style lang="scss" scoped>
.fixed-bar {
    width: 100%;
    position: fixed;
    left: 0;
    right: 0;
    z-index: 999;
}

.el-main {
    overflow: unset;
}

.el-footer {
    padding: 0;
}
</style>