<template>
  <div>
    <banner-component id="BannerRef" class="section-vh"></banner-component>
    <about-component id="AboutRef"></about-component>
    <portfolio-component id="PortfolioRef"></portfolio-component>
    <membership-component></membership-component>
    <contact-component id="ContactRef"></contact-component>
    <collapse-component></collapse-component>
    <stock-component id="StockRef"></stock-component>
    <social-media-component id="SocialRef"></social-media-component>
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
  },
}
</script>

