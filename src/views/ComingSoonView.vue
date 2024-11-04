<template>
  <div class="coming-soon">
    <div class="coming-soon-img">
      <img src="@/assets/images/pause.svg" alt="pause">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComingSoonView'
}
</script>

<style  lang="scss">
html {
  zoom: unset!important;
}
.coming-soon {
  background-color: #000;

  &-img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;

    img {
      width: 250px;

    }
  }
}
</style>
