<template>
  <div class="banner container section-vh">
    <div class="logo-img">
      <img src="@/assets/logo.svg" alt="logo">
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerComponent',
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.banner {
  display: flex;
  justify-content: center;
  align-items: center;

  .logo-img {
    width: auto;
    height: 72px;
    display: flex;
    align-items: center;

    img {
      width: 100%;
    }
  }

  .author-img {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;

    img {
      width: 100%;
    }
  }
}
</style>