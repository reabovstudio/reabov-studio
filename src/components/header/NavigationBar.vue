<template>
  <div>
    <div class="shadow">
      <!-- descktop -->
      <div class="navigation-bar" v-if="!isMobile">
        <translate-component></translate-component>
        <el-menu :default-active="activeIndex"
                 class="navigation-bar-menu"
                 @select="handleSelect"
                 background-color="transparent">
          <el-menu-item index="1" @click="goToSection('AboutRef')">about</el-menu-item>
          <el-menu-item index="2" @click="goToSection('PortfolioRef', -500)">portfolio</el-menu-item>
          <el-menu-item index="4" @click="goToSection('StockRef')">stock</el-menu-item>
          <el-menu-item index="3" @click="goToSection('SocialRef')">social</el-menu-item>
          <el-menu-item index="5" @click="goToSection('ContactRef')">contact</el-menu-item>
        </el-menu>
        <social-icons-component></social-icons-component>
      </div>
    </div>

    <!-- mobile -->
    <div v-if="isMobile">
      <div class="navigation-bar-mobile collapse-menu shadow" :class="{active: this.isActive}">
        <el-menu
            :default-active="activeIndex"
            :class="{active: this.isActive}"
            class="navigation-bar-menu"
            @select="handleSelect"
            background-color="transparent">
          <translate-component></translate-component>
          <el-menu-item index="1" @click="goToSection('AboutRef')">About</el-menu-item>
          <el-menu-item index="2" @click="goToSection('PortfolioRef')">Portfolio</el-menu-item>
          <el-menu-item index="4" @click="goToSection('StockRef')">Stock</el-menu-item>
          <el-menu-item index="3" @click="goToSection('SocialRef')">Social</el-menu-item>
          <el-menu-item index="5" @click="goToSection('ContactRef')">Contact</el-menu-item>
        </el-menu>
        <div class="collapse-btn" :class="{active: this.isActive}" @click="this.collabseMenu">
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TranslateComponent from "@/components/common/ThemeSwitcherComponent";
import SocialIconsComponent from "@/components/common/SocialIconsComponent";

export default {
  name: 'NavigationBar',
  components: {
    TranslateComponent,
    SocialIconsComponent
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
    goToSection(value, height = 132) {
      this.collabseMenu();

      const top = document.getElementById(value).offsetTop;
      window.scrollTo({
        top: top - height,
        left: 0,
        behavior: 'smooth'
      });
    },
  }
}
</script>
