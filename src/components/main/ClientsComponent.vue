<template>
  <div class="container clients">
    <div class="client-image" v-if="!isMobile">
      <img :src="getImgUrl(desktopFile)">
    </div>
    <div class="client-image" v-if="isMobile">
      <img :src="getImgUrl(mobileFile)">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClientsComponent',
  data() {
    return {
      windowWidth: window.innerWidth,
      desktopFile: 'desktop.svg',
      mobileFile: 'mobile.svg',
    }
  },
  computed: {
    isMobile() {
      return this.windowWidth < 992;
    },
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
    });
  },
  methods: {
    getImgUrl(fileName) {
      if (fileName !== '') {
        return require(`@/assets/images/clients/${fileName}`);
      }
    },
  }
}
</script>
