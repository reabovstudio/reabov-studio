<template>
  <div class="portfolio">
    <slider v-bind="options">
      <div>
        <iframe title="vimeo-player" src="https://player.vimeo.com/video/687114150?h=e9f9c96261" width="400" height="400" frameborder="0" allowfullscreen></iframe>
      </div>
      <div>
        <img :src="getImgUrl('1.png')">
      </div>
      <div>
        <img :src="getImgUrl('2.png')">
      </div>
      <div>
        <img :src="getImgUrl('3.png')">
      </div>
      <div>
        <img :src="getImgUrl('4.png')">
      </div>
      <div>
        <img :src="getImgUrl('5.png')">
      </div>
      <div>
        <img :src="getImgUrl('6.png')">
      </div>
      <div>
        <img :src="getImgUrl('7.png')">
      </div>
      <div>
        <img :src="getImgUrl('8.png')">
      </div>
      <div>
        <img :src="getImgUrl('9.png')">
      </div>
    </slider>
  </div>
</template>

<script>
import Slider from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'PortfolioComponent',
  components: {
    Slider
  },
  data() {
    return {
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