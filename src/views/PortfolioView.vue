<template>
  <div class="container">
    <div class="portfolio-view-header">
      <div style="max-width: 600px;">
        <lottie :options="defaultOptions"/>
      </div>
      <tags-component></tags-component>
    </div>
    <div class="portfolio-items">
      <div class="portfolio-item shadow shadow-bottom" v-for="item in this.projects"
           :key="item.id"
           @click="openProject(item)">
        <div class="portfolio-item-image">
          <img :src="getImgUrl(item.cover)">
        </div>
        <div class="portfolio-item-label">
          <h2>{{ item.label }}</h2>
          <h5>Alexandru Reabov</h5>
          <div class="project-tags">
            <span>#tag</span>
          </div>
        </div>
      </div>
    </div>


    <el-dialog :title="this.dialog.title"
               :visible.sync="dialogVisible"
               :destroy-on-close="true"
               custom-class="portfolio-modal shadow">
      <video autoplay loop v-if="this.dialog.video" :muted="!dialogVisible">
        <source :src="getImgUrl(this.dialog.video)" type="video/mp4">
      </video>
      <div v-for="(image, index) in this.dialog.images" :key="index">
        <el-image :src="getImgUrl(image)"></el-image>
      </div>

      <div slot="footer" class="dialog-footer">
        <img src="@/assets/logo.svg" alt="logo">
      </div>
    </el-dialog>
  </div>
</template>

<script>
import TagsComponent from "@/components/main/tags/TagsComponent.vue";
import Lottie from "vue-lottie";
import logo from "@/assets/lottie/logo.json";
import {data} from "@/data/projects.json";

export default {
  name: 'PortfolioView',
  components: {
    TagsComponent,
    Lottie,
  },
  data() {
    return {
      items: [],
      defaultOptions: {animationData: logo, loop: true},
      dialogVisible: false,
      dialog: {
        visible: false,
        title: '',
        video: '',
        images: []
      }
    }
  },
  computed: {
    projects() {
      let items = []

      if (this.$route.params.slug !== 'all') {
        items = data.find(item => item.slug === this.$route.params.slug).items
      } else {
        data.forEach((category) => {
          items = [...items, ...category.items];
        })
      }

      return items;
    }
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    getImgUrl(fileName) {
      if (fileName !== '') {
        return require(`@/assets/images/portfolio/${fileName}`);
      }
    }
    ,
    openProject(item) {
      this.dialogVisible = true;
      this.dialog.title = item.label;
      this.dialog.video = item.video;
      this.dialog.images = item.images;
    }
  }
}
</script>
