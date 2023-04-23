<template>
    <div class="banner container">
        <h1>Hi,</h1>
        <h2>welcome on</h2>
        <div style="max-width: 600px;">
            <lottie :options="defaultOptions"/>
        </div>
    </div>
</template>

<script>
import Lottie from "vue-lottie";
import logo from "@/assets/lottie/logo.json";

export default {
  name: 'BannerComponent',
  components: {
    Lottie,
  },
  data() {
    return {
      defaultOptions: { animationData: logo, loop: true }
    }
  }
}
</script>
