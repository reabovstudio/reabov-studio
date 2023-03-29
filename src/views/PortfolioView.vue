<template>
  <div class="container">
    <banner-component class="test"></banner-component>
    <div class="portfolio-items">
      <div class="portfolio-item shadow shadow-bottom" v-for="item in this.project.items"
           :key="item.id"
           @click="openProject(item)">
        <div class="portfolio-item-image">
          <img :src="getImgUrl(item.image)">
        </div>
        <div class="portfolio-item-label">
          <h2>{{ item.label }}</h2>
          <h5>Alexandru Reabov</h5>
        </div>
      </div>
    </div>


    <el-dialog :title="this.dialog.title"
               :visible.sync="dialogVisible"
               :destroy-on-close="true"
               custom-class="portfolio-modal shadow">
      <el-image :src="getImgUrl(this.dialog.landing)"></el-image>
      <div slot="footer" class="dialog-footer">
        <img src="@/assets/logo.svg" alt="logo">
      </div>
    </el-dialog>
  </div>
</template>

<script>
import BannerComponent from "@/components/main/BannerComponent.vue";
import { data } from "@/data/projects.json";

export default {
  name: 'PortfolioView',
  components: {
    BannerComponent
  },
  data() {
    return {
      dialogVisible: false,
      dialog: {
        visible: false,
        title: '',
        landing: ''
      }
    }
  },
  computed: {
    project() {
      return data.find(item => item.id == this.$route.params.id);
    }
  },
  methods: {
    getImgUrl(fileName) {
      if (fileName !== '') {
        return require(`@/assets/images/${fileName}`);
      }
    },
    openProject(item) {
      this.dialogVisible = true;
      this.dialog.title = item.label;
      this.dialog.landing = item.landing;
    }
  }
}
</script>
