<template>
  <div class="navigation-bar">
    <div class="container">
      <!-- descktop -->
      <el-menu v-if="!isMobile"
               :default-active="activeIndex"
               class="navigation-bar-menu"
               @select="handleSelect"
               background-color="transparent">
        <el-menu-item index="1">About</el-menu-item>
        <el-menu-item index="2">Portfolio</el-menu-item>
        <el-menu-item index="3">Social</el-menu-item>
        <el-menu-item index="4">Stock</el-menu-item>
        <el-menu-item index="5">Contact</el-menu-item>
      </el-menu>
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
          <el-menu-item index="1">About</el-menu-item>
          <el-menu-item index="2">Portfolio</el-menu-item>
          <el-menu-item index="3">Social</el-menu-item>
          <el-menu-item index="4">Stock</el-menu-item>
          <el-menu-item index="5">Contact</el-menu-item>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar',
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
    }
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
      console.log('test');
    },
  }
}
</script>
