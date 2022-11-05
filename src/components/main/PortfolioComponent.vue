<template>
    <div class="portfolio">
        <slider v-bind="options">
            <div v-for="image in images" :key="image.id">
                <img :src="getImgUrl(image.name)" :alt="image.name">
            </div>
        </slider>
    </div>
</template>

<script>
import Slider from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import { data } from '../../data/portfolio.json';

export default {
    name: 'PortfolioComponent',
    components: {
        Slider
    },
    data() {
        return {
            images: data,
            options: {
                dots: false,
                autoplay: true,
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
            }
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