<template>
  <div class="container">
    <div class="social-media">
      <div class="social-media-heading">
        <lottie :options="defaultOptions"/>
      </div>
      <div class="social-media-items">
          <div class="social-media-item">
              <a target="_blank" href="https://www.instagram.com/reabovstudio/">instagram</a>
              <span>follow me</span>
          </div>
          <div class="social-media-item">
              <a target="_blank" href="https://www.facebook.com/reabovstudio?mibextid=LQQJ4d">facebook</a>
              <span>follow me</span>
          </div>
          <div class="social-media-item">
              <a target="_blank" href="https://twitter.com/reabovstudio">x.com</a>
              <span>follow me</span>
          </div>
          <div class="social-media-item">
              <a target="_blank" href="https://t.me/reabovstudio">telegram</a>
              <span>follow me</span>
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
