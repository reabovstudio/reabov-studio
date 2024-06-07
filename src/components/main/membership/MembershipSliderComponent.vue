<template>
  <div class="membership-slider" id="ReviewsRef">
    <div class="vertical-line"></div>
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
          imagePath: '1RD.png'
        },
        {
          imagePath: '2RD.png'
        },
        {
          imagePath: '3RD.png'
        },
        {
          imagePath: '4RD.png'
        },
        {
          imagePath: '5RD.png'
        },
        {
          imagePath: '6RD.png'
        },
      ],
      mobileSlides: [
        {
          imagePath: '1RM.png'
        },
        {
          imagePath: '2RM.png'
        },
        {
          imagePath: '3RM.png'
        },
        {
          imagePath: '4RM.png'
        },
        {
          imagePath: '5RM.png'
        },
        {
          imagePath: '6RM.png'
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
