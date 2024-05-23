<template>
  <div>
    <div class="shadow navigation-bar-container">
      <!-- desktop -->
      <div class="navigation-bar" v-if="!isMobile">
        <div class="navigation-bar-column column-start">
          <div class="logo">
            <router-link :to="{name: 'HomeView'}">
              <img src="@/assets/logo.svg" alt="logo">
            </router-link>
          </div>
        </div>
        <div class="navigation-bar-column column-center">
          <el-menu class="navigation-bar-menu"
                   @select="handleSelect"
                   background-color="transparent">
            <el-menu-item @click="goToSection('AboutRef')" class="menu-item-about">about</el-menu-item>
            <el-menu-item @click="goToSection('PortfolioRef')" class="menu-item-portfolio">portfolio</el-menu-item>
            <el-menu-item @click="goToSection('BenefitsId')" class="menu-item-how-it-works">how it works</el-menu-item>
            <el-menu-item @click="goToSection('ReviewsRef')" class="menu-item-reviews">reviews</el-menu-item>
            <el-menu-item @click="goToSection('PricingRef')" class="menu-item-pricing">pricing</el-menu-item>
<!--            <el-menu-item @click="goToSection('CollapseRef')" class="menu-item-qa">q&a</el-menu-item>-->
            <el-menu-item @click="goToSection('StockRef')" class="menu-item-discover">discover more</el-menu-item>
            <el-menu-item @click="goToSection('SocialRef')" class="menu-item-social">social</el-menu-item>
          </el-menu>
        </div>
        <div class="navigation-bar-column column-end">
          <theme-switcher-component></theme-switcher-component>
        </div>
      </div>
    </div>

    <!-- mobile -->
    <div v-if="isMobile">
      <div class="navigation-bar-mobile collapse-menu shadow" :class="{active: this.isActive}">
        <el-menu :class="{active: this.isActive}"
                 class="navigation-bar-menu"
                 @select="handleSelect"
                 background-color="transparent">
          <theme-switcher-component></theme-switcher-component>
          <el-menu-item @click="goToSection('AboutRef')" class="menu-item-about">about</el-menu-item>
          <el-menu-item @click="goToSection('PortfolioRef')" class="menu-item-portfolio">portfolio</el-menu-item>
          <el-menu-item @click="goToSection('BenefitsId')" class="menu-item-how-it-works">how it works</el-menu-item>
          <el-menu-item @click="goToSection('ReviewsRef')" class="menu-item-reviews">reviews</el-menu-item>
          <el-menu-item @click="goToSection('PricingRef')" class="menu-item-pricing">pricing</el-menu-item>
<!--          <el-menu-item @click="goToSection('CollapseRef')" class="menu-item-qa">q&a</el-menu-item>-->
          <el-menu-item @click="goToSection('StockRef')" class="menu-item-discover">discover more</el-menu-item>
          <el-menu-item @click="goToSection('SocialRef')" class="menu-item-social">social</el-menu-item>
        </el-menu>
        <div class="collapse-btn" :class="{active: this.isActive}" @click="this.collapseMenu">
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ThemeSwitcherComponent from "@/components/common/ThemeSwitcherComponent";

export default {
  name: 'NavigationBar',
  components: {
    ThemeSwitcherComponent,
  },
  data() {
    return {
      isActive: false,
      windowWidth: window.innerWidth,
    }
  },
  computed: {
    isMobile() {
      return this.windowWidth < 992;
    },
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
    });
  },
  methods: {
    handleSelect(key) {
      this.activeIndex = key;
    },
    collapseMenu() {
      this.isActive = !this.isActive;
    },
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
      const headerOffset = 80;
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
