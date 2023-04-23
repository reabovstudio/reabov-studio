<template>
    <div>
        <div class="container portfolio-title">
            <h1>Portfolio</h1>
        </div>
        <div class="portfolio ">
            <slider v-bind="options">
                <div>
                    <img :src="getImgUrl('reabovstudio_10.gif')">
                </div>
                <div>
                    <img :src="getImgUrl('reabovstudio_1.gif')">
                </div>
                <div>
                    <img :src="getImgUrl('reabovstudio_3.gif')">
                </div>
                <div>
                    <img :src="getImgUrl('reabovstudio_6.gif')">
                </div>
                <div>
                    <img :src="getImgUrl('reabovstudio_8.gif')">
                </div>
                <div>
                    <img :src="getImgUrl('reabovstudio_9.gif')">
                </div>
                <div>
                    <img :src="getImgUrl('reabovstudio_7.gif')">
                </div>
                <div>
                    <img :src="getImgUrl('reabovstudio_2.gif')">
                </div>
            </slider>
        </div>
        <div class="container">
            <div class="projects-categories">
                <router-link class="project-category" :to="{name: 'PortfolioView', params: { id: project.id, slug: project.slug }}"
                             v-for="project in this.projects"
                             :key="project.id">
                    <div class="project-category-label">
                        <h2>{{project.category}}</h2>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import Slider from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import { data } from "@/data/projects.json";

export default {
    name: 'PortfolioComponent',
    components: {
        Slider
    },
    data() {
        return {
            options: {
                dots: false,
                autoplay: false,
                infinite: true,
                centerMode: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: true,
                draggable: false,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: false,
                            initialSlide: 2
                        }
                    }
                ]
            },
            projects: data,
        }
    },
    methods: {
        getImgUrl(fileName) {
            return require(`@/assets/images/${fileName}`);
        },
    }
}
</script>

<style lang="scss" scoped>

</style>
