<template>
  <div class="animation">
    <lottie :options="defaultOptions"/>
  </div>
</template>

<script>
import Lottie from "vue-lottie";
import services from "@/assets/lottie/services.json";

export default {
  name: 'AnimationComponent',
  components: {
    Lottie
  },
  data() {
    return {
      defaultOptions: {animationData: services, loop: true},
    }
  }
}
</script>
