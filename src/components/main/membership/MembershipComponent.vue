<template>
  <div class="container">
    <membership-benefits-component></membership-benefits-component>
    <membership-slider-component></membership-slider-component>
    <vertical-line-component></vertical-line-component>
    <membership-offer-component></membership-offer-component>
    <div class="membership" id="PricingRef">
      <div class="membership-block-title">
        <h1>Membership Pricing</h1>
      </div>
      <!-- block 1-->
      <div class="membership-item">
        <div class="hover-line">
          <img src="@/assets/images/membership/icons/arrow.svg">
        </div>
        <div class="membership-block yellow">
          <div class="membership-block-image">
            <img src="@/assets/images/membership/basic.gif" alt="basic">
          </div>
          <div class="membership-block-shape">
            <h2 class="title-shape">Priority 2</h2>
          </div>
          <div class="membership-block-info">
            <ul>
              <li>One Request At a Time</li>
              <li>Average 48 Hour Delivery</li>
              <li>Unlimited STOCK Images</li>
              <li>Private Telegram Chat</li>
              <li>Unlimited Team Members</li>
              <li>Unlimited STOCK Images</li>
              <li>Manage tasks with Trello Board</li>
              <li class="muted-text">Pause or cancel anytime</li>
            </ul>
          </div>
          <div class="membership-block-price">
            <span class="membership-block-price-number">1995 $</span>
            <span class="membership-block-price-text">per month</span>
          </div>
        </div>
      </div>
      <!-- block 2-->
      <div class="membership-item">
        <div class="hover-line">
          <img src="@/assets/images/membership/icons/arrow.svg">
        </div>
        <div class="membership-block green">
          <div class="membership-block-image">
            <img src="@/assets/images/membership/pro.gif" alt="pro">
          </div>
          <div class="membership-block-shape">
            <h2 class="title-shape">Priority 1</h2>
          </div>
          <div class="membership-block-info">
            <ul>
              <li>Double the Requests</li>
              <li>Average 24 Hour Delivery</li>
              <li>Unlimited STOCK Images</li>
              <li>Private Telegram Chat</li>
              <li>Unlimited Team Members</li>
              <li>Unlimited STOCK Images</li>
              <li>Manage tasks with Trello Board</li>
              <li class="muted-text">Pause or cancel anytime</li>
            </ul>
          </div>
          <div class="membership-block-price">
            <span class="membership-block-price-number">4995 $</span>
            <span class="membership-block-price-text">per month</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MembershipBenefitsComponent from "@/components/main/membership/MembershipBenefitsComponent.vue";
import MembershipSliderComponent from "@/components/main/membership/MembershipSliderComponent.vue";
import MembershipOfferComponent from "@/components/main/membership/MembershipOfferComponent.vue";
import VerticalLineComponent from "@/components/main/VerticalLineComponent.vue";
export default {
  name: 'MembershipComponent',
  components: {
    MembershipBenefitsComponent,
    MembershipSliderComponent,
    MembershipOfferComponent,
    VerticalLineComponent,
  },
}
</script>
