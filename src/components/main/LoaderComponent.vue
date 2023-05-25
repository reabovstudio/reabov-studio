<template>
  <div class="loader">
    <div class="loader-animation">
      <lottie :options="defaultOptions"/>
    </div>
  </div>
</template>

<script>
import Lottie from "vue-lottie";
import loader from "@/assets/lottie/loader.json";
export default {
  name: 'LoaderComponent',
  components: {
    Lottie
  },
  data() {
    return {
      defaultOptions: { animationData: loader, loop: true }
    }
  }
}
</script>
