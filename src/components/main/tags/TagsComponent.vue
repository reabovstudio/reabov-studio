<template>
  <div class="tags">
    <router-link :to="{name: 'PortfolioView', params: { id: project.id, slug: project.slug }}"
                 v-for="project in this.projects"
                 :key="project.id">
      <span class="tag-item">#{{ project.category}}</span>
    </router-link>
<!--    <span v-for="project in this.projects" :key="project.id">-->
<!--      <span class="tag-item">#{{ project.category}}</span>-->
<!--    </span>-->
  </div>
</template>

<script>
import {data} from "@/data/projects.json";
export default {
  name: 'TagsComponent',
  computed: {
    projects() {
      return data;
    }
  }
}
</script>
