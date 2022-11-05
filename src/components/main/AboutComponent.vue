<template>
  <div class="about container">
    <div class="about-banner">
      <div class="lottie">
        <lottie :options="defaultOptions2"/>
      </div>
      <div class="about-img">
        <img src="@/assets/author.png" alt="author">
      </div>
    </div>
    <div class="about-info shadow">
      <div class="about-description">
        <p>
          xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx
          xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx
          xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx
          xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx
          xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx
          xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx
        </p>
      </div>
      <div class="about-me">
        <div class="lottie">
          <lottie :options="defaultOptions"/>
        </div>
        <div class="about-video">
          <video src="@/assets/reabov-from-md.mp4" controls></video>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Lottie from "vue-lottie";
import about from "@/assets/lottie/about.json";
import designer from "@/assets/lottie/designer.json";

export default {
  name: 'AboutComponent',
  components: {
    Lottie
  },
  data() {
    return {
      defaultOptions: {animationData: about, loop: true},
      defaultOptions2: {animationData: designer, loop: true}
    }
  }
}
</script>
