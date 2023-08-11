<template>
  <div class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="logo">
          <img src="@/assets/logo.svg" alt="logo">
        </div>
        <div class="footer-menu">
          <el-menu class="navigation-bar-menu"
                   background-color="transparent">
            <el-menu-item @click="goToSection('BannerRef')">Home</el-menu-item>
            <el-menu-item @click="goToSection('AboutRef')">About</el-menu-item>
            <el-menu-item @click="goToSection('PortfolioRef')">Portfolio</el-menu-item>
<!--            <el-menu-item index="4" @click="goToSection('StockRef')">Stock</el-menu-item>-->
            <el-menu-item @click="goToSection('SocialRef')">Social</el-menu-item>
            <el-menu-item @click="goToSection('ContactRef')">Contact</el-menu-item>
          </el-menu>
        </div>
      </div>
      <copyright-component></copyright-component>
    </div>
  </div>
</template>

<script>
import CopyrightComponent from '../footer/CopyrightComponent.vue';

export default {
  name: 'FooterComponent',
  components: {
    CopyrightComponent
  },
  methods: {
    goToSection(value) {
      if (this.isMobile) {
        this.collapseMenu();
      }

      if (this.$route.name !== 'HomeView') {
        this.$router.push('/').then(() => {
          this.sectionPosition(value);
        });

      } else {
        this.sectionPosition(value);
      }
    },
    sectionPosition(value) {
      const element = document.getElementById(value);
      const headerOffset = 45;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    },
  }
}
</script>
