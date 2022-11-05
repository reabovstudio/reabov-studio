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
            <el-menu-item index="1">About</el-menu-item>
            <el-menu-item index="2">Portfolio</el-menu-item>
            <el-menu-item index="3">Social</el-menu-item>
            <el-menu-item index="4">Stock</el-menu-item>
            <el-menu-item index="5">Contact</el-menu-item>
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
  }
}
</script>