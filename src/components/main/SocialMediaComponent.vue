<template>
  <div class="container">
    <lottie :options="defaultOptions2"/>
    <div class="social-media">
      <div class="social-media-heading">
        <lottie :options="defaultOptions"/>
      </div>
      <div class="social-media-items">
        <div class="social-media-item">
          <a href="https://www.instagram.com/reabovstudio/">instagram</a>
          <span>follow me</span>
        </div>
        <div class="social-media-item">
          <a href="https://www.artstation.com/reabov">artstation</a>
          <span>portfolio</span>
        </div>
        <div class="social-media-item">
          <a href="https://www.behance.net/reabovstudio">behance</a>
          <span>portfolio</span>
        </div>
        <div class="social-media-item">
          <a href="https://www.youtube.com/channel/UCwUVCAs7J2H4RQjAIHLe7MA">youtube</a>
          <span>watch me</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Lottie from "vue-lottie";
import follow from "@/assets/lottie/follow.json";
import swipe from "@/assets/lottie/swipe.json";

export default {
  name: 'SocialMediaComponent',
  components: {
    Lottie
  },
  data() {
    return {
      defaultOptions: {animationData: follow, loop: true},
      defaultOptions2: {animationData: swipe, loop: true}
    }
  }
}
</script>
