<template>
  <div class="container">
    <div class="vertical-line-container">
      <div class="vertical-line-item red-line"></div>
      <membership-offer-component></membership-offer-component>
      <div class="vertical-line-item blue-line"></div>
    </div>
  </div>
</template>

<script>
import MembershipOfferComponent from "@/components/main/membership/MembershipOfferComponent.vue";

export default {
  name: 'VerticalLineComponent' ,
  components: {MembershipOfferComponent}
}
</script>