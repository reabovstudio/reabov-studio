<template>
  <div class="navigation-bar">
    <div class="shadow">
      <div class="container" v-if="!isMobile">
        <translate-component></translate-component>
        <!-- descktop -->
        <el-menu :default-active="activeIndex"
                 class="navigation-bar-menu"
                 @select="handleSelect"
                 background-color="transparent">
          <el-menu-item index="1" @click="goToSection('AboutRef')">About</el-menu-item>
          <el-menu-item index="2" @click="goToSection('PortfolioRef')">Portfolio</el-menu-item>
          <el-menu-item index="4" @click="goToSection('StockRef')">Stock</el-menu-item>
          <el-menu-item index="3" @click="goToSection('SocialRef')">Social</el-menu-item>
          <el-menu-item index="5" @click="goToSection('ContactRef')">Contact</el-menu-item>
        </el-menu>
      </div>
    </div>

    <!-- mobile -->
    <div v-if="isMobile">
      <div class="navigation-bar-mobile shadow">
        <div class="collapse-btn" :class="{active: this.isActive}" @click="this.collabseMenu">
          <span></span>
          <span></span>
        </div>
        <el-menu
            :default-active="activeIndex"
            :class="{active: this.isActive}"
            class="navigation-bar-menu collapse-menu"
            @select="handleSelect"
            background-color="transparent">
          <translate-component></translate-component>
          <el-menu-item index="1" @click="goToSection('AboutRef')">About</el-menu-item>
          <el-menu-item index="2" @click="goToSection('PortfolioRef')">Portfolio</el-menu-item>
          <el-menu-item index="4" @click="goToSection('StockRef')">Stock</el-menu-item>
          <el-menu-item index="3" @click="goToSection('SocialRef')">Social</el-menu-item>
          <el-menu-item index="5" @click="goToSection('ContactRef')">Contact</el-menu-item>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script>
import TranslateComponent from "@/components/common/ThemeSwitcherComponent";

export default {
  name: 'NavigationBar',
  components: {
    TranslateComponent
  },
  data() {
    return {
      activeIndex: '1',
      isActive: false,
      windowWidth: window.innerWidth,
    }
  },
  computed: {
    isMobile() {
      return this.windowWidth < 768;
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
    collabseMenu() {
      this.isActive = !this.isActive;
    },
    goToSection(value) {
      this.collabseMenu();

      const top = document.getElementById(value).offsetTop;
      window.scrollTo({
        top: top - 132,
        left: 0,
        behavior: 'smooth'
      });
    },
  }
}
</script>
