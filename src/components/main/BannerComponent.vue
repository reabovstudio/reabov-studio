<template>
  <div class="banner container section-vh">
    <div style="max-width: 600px;">
      <lottie :options="defaultOptions" />
    </div>
    <tags-component></tags-component>
  </div>
</template>

<script>
import Lottie from "vue-lottie";
import logo from "@/assets/lottie/logo.json";
import TagsComponent from "@/components/TagsComponent";


export default {
  name: 'BannerComponent',
  components: {
    Lottie,
    TagsComponent
  },
  data() {
    return {
      defaultOptions: { animationData: logo, loop: true }
    }
  }
}
</script>
