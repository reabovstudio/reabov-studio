<template>
  <div id="app">
    <div v-if="false">
      <el-header class="fixed-bar" height="auto">
        <navigation-bar></navigation-bar>
      </el-header>
      <el-main >
        <router-view></router-view>
      </el-main>
      <el-footer height="auto">
        <footer-component></footer-component>
      </el-footer>
      <request-button-component></request-button-component>
    </div>
    <div v-if="true">
      <coming-soon-view></coming-soon-view>
    </div>
  </div>
</template>

<script>
import NavigationBar from "@/components/header/NavigationBar.vue";
import FooterComponent from "@/components/footer/FooterComponent.vue";
import RequestButtonComponent from "@/components/common/RequestButtonComponent.vue";
import ComingSoonView from "@/views/ComingSoonView.vue";

export default {
  name: 'App',
  components: {
    NavigationBar,
    FooterComponent,
    RequestButtonComponent,
    ComingSoonView,
  },
}
</script>

<style lang="scss" scoped>
.fixed-bar {
  width: 100%;
  position: fixed;
  top: 0;
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
