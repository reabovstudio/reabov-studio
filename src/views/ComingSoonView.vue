<template>
  <div class="coming-soon">
    <div class="coming-soon-block">
      <div class="coming-soon-block-img">
        <img src="@/assets/images/reabov-studio-coming-soon.gif" alt="pause">
      </div>
      <div class="coming-soon-block-social-media">
        <a target="_blank" href="https://www.facebook.com/reabovstudio?mibextid=LQQJ4d">
          <img src="@/assets/images/facebook.svg" alt="facebook">
        </a>
        <a target="_blank" href="https://t.me/reabovstudio">
          <img src="@/assets/images/telegram.svg" alt="telegram">
        </a>
        <a target="_blank" href="https://www.instagram.com/reabovstudio/">
          <img src="@/assets/images/instagram.svg" alt="instagram">
        </a>
      </div>
      <div class="coming-soon-block-text">
        <img src="@/assets/images/text.svg">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComingSoonView'
}
</script>

<style  lang="scss">
@mixin for-md {
  @media screen and (min-width: 768px) {
    @content;
  }
}

html {
  zoom: unset!important;
}
.coming-soon {
  background-color: #000;

  &-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;

    &-img {
      img {
        width: 250px;

        @include for-md {
          width: 350px;
        }
      }
    }

    &-text {
      img {
        width: 135px;

        @include for-md {
          width: 185px;
        }
      }
    }
  }

  &-block-social-media {
    display: flex;
    gap: 25px;
    margin: 20px 0;

    @include for-md {
      gap: 40px;
      margin: 30px 0;
    }

    img {
      width: auto;
      height: 33px;

      @include for-md {
        height: 40px;
      }
    }
  }
}
</style>
