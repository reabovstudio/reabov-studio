<template>
  <div class="container">
    <lottie :options="defaultOptions"/>
    <div class="contact">
      <div class="contact-button">
        <div class="contact-button-image">
          <img :src="require('@/assets/telegram.svg')">
        </div>
      </div>
      <div class="contact-info">
        <h3>contact</h3>
        <span>reabovstudio@gmail.com</span>
      </div>
    </div>
    <lottie :options="defaultOptions"/>
  </div>
</template>

<script>
import Lottie from "vue-lottie";
import swipe from "@/assets/lottie/swipe.json";

export default {
  name: 'ContactComponent',
  components: {
    Lottie
  },
  data() {
    return {
      defaultOptions: {animationData: swipe, loop: true},
    }
  }
}
</script>