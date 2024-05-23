<template>
  <div>
    <div class="container portfolio-title">
      <div class="portfolio-video">
        <img :src="require('@/assets/portfolio.gif')"/>
      </div>
      <tags-component></tags-component>
    </div>
  </div>
</template>

<script>
import {data} from "@/data/projects.json";
import TagsComponent from "@/components/main/tags/TagsComponent.vue";

export default {
  name: 'PortfolioComponent',
  components: {TagsComponent},
  data() {
    return {
      projects: data,
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
