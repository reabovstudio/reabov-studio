<template>
  <div class="banner container section-vh">
    <lottie :options="defaultOptions" />
  </div>
</template>

<script>
import Lottie from "vue-lottie";
import logo from "@/assets/lottie/logo.json";


export default {
  name: 'BannerComponent',
  components: {
    Lottie
  },
  data() {
    return {
      defaultOptions: { animationData: logo, loop: true }
    }
  }
}
</script>
