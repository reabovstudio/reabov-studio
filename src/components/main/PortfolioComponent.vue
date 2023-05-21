<template>
    <div>
        <div class="container portfolio-title">
            <div class="portfolio-video">
                <img :src="require('@/assets/portfolio.gif')" />
            </div>
            <div class="portfolio-explore-btn">
                <router-link :to="{ name: 'PortfolioView', params: { slug: 'all' }}">
                    <h2>explore</h2>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import {data} from "@/data/projects.json";

export default {
    name: 'PortfolioComponent',
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
