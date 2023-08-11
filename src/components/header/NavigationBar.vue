<template>
  <div>
    <div class="shadow">
      <!-- descktop -->
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
            <el-menu-item @click="goToSection('AboutRef')">about</el-menu-item>
            <el-menu-item @click="goToSection('PortfolioRef')">portfolio</el-menu-item>
            <theme-switcher-component></theme-switcher-component>
            <!--          <el-menu-item index="4" @click="goToSection('StockRef')">stock</el-menu-item>-->
            <el-menu-item @click="goToSection('SocialRef')">social</el-menu-item>
            <el-menu-item @click="goToSection('ContactRef')">contact</el-menu-item>
          </el-menu>
        </div>
        <div class="navigation-bar-column column-end">
          <social-icons-component></social-icons-component>
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
          <el-menu-item @click="goToSection('BannerRef')">Home</el-menu-item>
          <el-menu-item @click="goToSection('AboutRef')">About</el-menu-item>
          <el-menu-item @click="goToSection('PortfolioRef')">Portfolio</el-menu-item>
          <!--          <el-menu-item index="4" @click="goToSection('StockRef')">Stock</el-menu-item>-->
          <el-menu-item @click="goToSection('SocialRef')">Social</el-menu-item>
          <el-menu-item @click="goToSection('ContactRef')">Contact</el-menu-item>
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
import SocialIconsComponent from "@/components/common/SocialIconsComponent";

export default {
  name: 'NavigationBar',
  components: {
    ThemeSwitcherComponent,
    SocialIconsComponent
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
