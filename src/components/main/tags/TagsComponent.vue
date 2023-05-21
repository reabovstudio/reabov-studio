<template>
    <div class="tags">
        <router-link :to="{name: 'PortfolioView', params: { slug: 'all' }}">
            <span class="tag-item">#all</span>
        </router-link>
        <router-link :to="{name: 'PortfolioView', params: { id: project.id, slug: project.slug }}"
                     v-for="project in this.projects"
                     :key="project.id">
            <span class="tag-item">#{{ project.category }}</span>
        </router-link>
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
