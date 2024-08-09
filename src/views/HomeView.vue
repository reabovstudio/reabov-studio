<template>
  <div>
    <banner-component id="BannerRef" class="section-vh"></banner-component>
    <landing-title-component></landing-title-component>
    <about-component id="AboutRef"></about-component>
    <clients-component></clients-component>
    <div class="container">
      <lottie :options="defaultOptions"/>
    </div>
    <portfolio-component id="PortfolioRef"></portfolio-component>
    <div class="container">
      <lottie :options="defaultOptions"/>
    </div>
    <membership-component></membership-component>
    <div class="container">
      <lottie :options="defaultOptions"/>
    </div>
    <collapse-component></collapse-component>
    <div class="container">
      <lottie :options="defaultOptions"/>
    </div>
    <social-media-component id="SocialRef"></social-media-component>
    <div class="container">
      <lottie :options="discoverMore"/>
    </div>
    <stock-component id="StockRef"></stock-component>
    <div class="container">
      <lottie :options="defaultOptions"/>
    </div>
        <contact-component id="ContactRef"></contact-component>
  </div>
</template>

<script>
import BannerComponent from '@/components/main/BannerComponent.vue';
import AboutComponent from '@/components/main/AboutComponent.vue';
import PortfolioComponent from '@/components/main/PortfolioComponent.vue';
import MembershipComponent from "@/components/main/membership/MembershipComponent.vue";
import CollapseComponent from "@/components/main/CollapseComponent.vue";
import StockComponent from '@/components/main/stock/StockComponent';
import SocialMediaComponent from '@/components/main/SocialMediaComponent';
import ContactComponent from '@/components/main/ContactComponent';
import Lottie from "vue-lottie";
import swipe from "@/assets/lottie/swipe.json";
import discoverMore from "@/assets/lottie/discover_more.json";
import LandingTitleComponent from "@/components/main/LandingTitleComponent.vue";
import ClientsComponent from "@/components/main/ClientsComponent.vue";

export default {
  name: 'HomeView',
  components: {
    BannerComponent,
    AboutComponent,
    PortfolioComponent,
    MembershipComponent,
    CollapseComponent,
    StockComponent,
    SocialMediaComponent,
    ContactComponent,
    Lottie,
    LandingTitleComponent,
    ClientsComponent,
  },
  data() {
    return {
      defaultOptions: {animationData: swipe, loop: true},
      discoverMore: {animationData: discoverMore, loop: true}
    }
  }
}
</script>

