<template>
  <div>
    <banner-component id="BannerRef" class="section-vh"></banner-component>
    <about-component id="AboutRef"></about-component>
    <portfolio-component id="PortfolioRef"></portfolio-component>
<!--    @note: Soon will be reverted-->
<!--    <stock-component id="StockRef"></stock-component>-->
    <social-media-component id="SocialRef"></social-media-component>
    <contact-component id="ContactRef"></contact-component>
  </div>
</template>

<script>
import BannerComponent from '@/components/main/BannerComponent.vue';
import AboutComponent from '@/components/main/AboutComponent.vue';
import PortfolioComponent from '@/components/main/PortfolioComponent.vue';
// import StockComponent from '@/components/main/stock/StockComponent';
import SocialMediaComponent from '@/components/main/SocialMediaComponent';
import ContactComponent from '@/components/main/ContactComponent';

export default {
  name: 'HomeView',
  components: {
    BannerComponent,
    AboutComponent,
    PortfolioComponent,
    // StockComponent,
    SocialMediaComponent,
    ContactComponent,
  }
}
</script>

