<template>
  <el-container>
    <el-header class="fixed-bar" height="auto">
      <navigation-bar></navigation-bar>
    </el-header>
    <el-main>
      <banner-component></banner-component>
      <about-component id="AboutRef"></about-component>
      <portfolio-component id="PortfolioRef"></portfolio-component>
      <stock-component id="StockRef"></stock-component>
      <social-media-component id="SocialRef"></social-media-component>
      <contact-component id="ContactRef"></contact-component>
    </el-main>
    <el-footer height="auto">
      <footer-component></footer-component>
    </el-footer>
    <request-button-component></request-button-component>
  </el-container>
</template>

<script>
import NavigationBar from '@/components/header/NavigationBar.vue';
import BannerComponent from '@/components/main/BannerComponent.vue';
import AboutComponent from '@/components/main/AboutComponent.vue';
import PortfolioComponent from '@/components/main/PortfolioComponent.vue';
import StockComponent from '@/components/main/stock/StockComponent';
import SocialMediaComponent from '@/components/main/SocialMediaComponent';
import ContactComponent from '@/components/main/ContactComponent';
import FooterComponent from '@/components/footer/FooterComponent.vue';
import RequestButtonComponent from "@/components/common/RequestButtonComponent.vue";

export default {
  name: 'HomeView',
  components: {
    NavigationBar,
    BannerComponent,
    AboutComponent,
    PortfolioComponent,
    StockComponent,
    SocialMediaComponent,
    ContactComponent,
    FooterComponent,
    RequestButtonComponent
  }
}
</script>

<style lang="scss" scoped>
.fixed-bar {
  width: 100%;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 99999;
}

.el-header {
  padding: 0;
}

.el-main {
  overflow: unset;
  padding: 0;
}

.el-footer {
  padding: 0;
}
</style>
