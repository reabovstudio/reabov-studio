<template>
  <div class="container">
    <div class="landing-title-container">
      <div class="landing-title-container-heading">
        <lottie :options="defaultOptions"></lottie>
      </div>
    </div>
  </div>
</template>

<script>
import lottieTitleAnimation from '@/assets/lottie/intro_title_animation.json';
import Lottie from "vue-lottie";

export default {
  name: 'LandingTitleComponent',
  components: {
    Lottie,
  },
  data() {
    return {
      defaultOptions: {animationData: lottieTitleAnimation, loop: true},
    }
  }
}
</script>