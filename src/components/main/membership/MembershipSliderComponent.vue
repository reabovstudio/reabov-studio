<template>
  <div class="membership-slider" id="ReviewsRef">
    <vue-slick-carousel :arrows="true" :dots="true"  v-if="!isMobile">
      <div v-for="(slide, index) in desktopSlides" :key="index">
        <div class="membership-slide">
          <img :src="getImgUrl(slide.imagePath)" alt="slide">
        </div>
      </div>
    </vue-slick-carousel>
    <vue-slick-carousel :arrows="false" :dots="true"  v-if="isMobile">
      <div v-for="(slide, index) in mobileSlides" :key="index">
        <div class="membership-slide">
          <img :src="getImgUrl(slide.imagePath)" alt="slide">
        </div>
      </div>
    </vue-slick-carousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
export default {
  name: 'MembershipSliderComponent',
  components: {
    VueSlickCarousel
  },
  data() {
    return {
      windowWidth: window.innerWidth,
      desktopSlides: [
        {
          imagePath: 'desktop.png'
        },
        {
          imagePath: 'desktop.png'
        },
        {
          imagePath: 'desktop.png'
        },
      ],
      mobileSlides: [
        {
          imagePath: 'mobile.png'
        },
        {
          imagePath: 'mobile.png'
        },
        {
          imagePath: 'mobile.png'
        },
      ]
    }
  },
  computed: {
    isMobile() {
      return this.windowWidth < 992;
    },
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
    });
  },
  methods: {
    getImgUrl(fileName) {
      if (fileName !== '') {
        return require(`@/assets/images/membership/slider/${fileName}`);
      }
    },
  }
}
</script>
