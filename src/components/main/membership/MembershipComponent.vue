<template>
  <div class="container">
    <membership-benefits-component></membership-benefits-component>
    <div class="membership">
      <h1>Pricing</h1>
      <!-- block 1-->
      <div class="membership-item move-down">
        <div class="hover-line">
          <img src="@/assets/images/membership/icons/arrow.svg">
        </div>
        <div class="membership-block green">
          <div class="membership-block-image">
            <img src="@/assets/images/membership/easy.gif" alt="easy">
          </div>
          <div class="membership-block-title">
            <h2 class="title-shape">Priority 3</h2>
          </div>
          <div class="membership-block-info">
            <ul>
              <li>One Request At a Time</li>
              <li>Average 64 Hour Delivery</li>
              <li>Unlimited STOCK Images</li>
              <li>Private Telegram Chat</li>
              <li>Unlimited Team Members</li>
              <li>Unlimited STOCK Images</li>
              <li>Manage tasks with Trello Board</li>
              <li class="muted-text">Pause or cancel anytime</li>
            </ul>
          </div>
          <div class="membership-block-price">
            <span class="membership-block-price-number">1295 $</span>
            <span class="membership-block-price-text">per month</span>
          </div>
        </div>
        <dropdown-component :items="dropdownEasy" :height="280"></dropdown-component>
      </div>
      <!-- block 2-->
      <div class="membership-item">
        <div class="hover-line">
          <img src="@/assets/images/membership/icons/arrow.svg">
        </div>
        <div class="membership-block yellow">
          <div class="membership-block-image">
            <img src="@/assets/images/membership/basic.gif" alt="basic">
          </div>
          <div class="membership-block-title">
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
            <span class="membership-block-price-number">2995 $</span>
            <span class="membership-block-price-text">per month</span>
          </div>
        </div>
        <dropdown-component :items="dropdownBasic" :height="480"></dropdown-component>
      </div>
      <!-- block 3-->
      <div class="membership-item move-down">
        <div class="hover-line">
          <img src="@/assets/images/membership/icons/arrow.svg">
        </div>
        <div class="membership-block blue">
          <div class="membership-block-image">
            <img src="@/assets/images/membership/pro.gif" alt="pro">
          </div>
          <div class="membership-block-title">
            <h2 class="title-shape">Priority 1</h2>
          </div>
          <div class="membership-block-info">
            <ul>
              <li>One Request At a Time</li>
              <li>Average 24 Hour Delivery</li>
              <li>Unlimited STOCK Images</li>
              <li>Private Telegram Chat</li>
              <li>Unlimited Team Members</li>
              <li>Unlimited STOCK Images</li>
              <li>Manage tasks with Trello Board</li>
              <li>All Working Files Included</li>
              <li class="muted-text">Pause or cancel anytime</li>
            </ul>
          </div>
          <div class="membership-block-price">
            <span class="membership-block-price-number">5995 $</span>
            <span class="membership-block-price-text">per month</span>
          </div>
        </div>
        <dropdown-component :items="dropdownPro" :height="600"></dropdown-component>
      </div>
    </div>

  </div>
</template>

<script>
import MembershipBenefitsComponent from "@/components/main/membership/MembershipBenefitsComponent.vue";
import DropdownComponent from "@/components/common/DropdownComponent.vue";
export default {
  name: 'MembershipComponent',
  components: {
    MembershipBenefitsComponent,
    DropdownComponent
  },
  data() {
    return {
      dropdownPro: [
        'Logo Design',
        'Intro Animation',
        'Branding x Identity',
        'Product Design',
        'Amazon Content',
        'Merch Design',
        'Ui/Ux Design',
        '2D/ 3D Animations',
        'Lottie Animations',
        '3D Modeling x Render',
        'Social Media Graphics',
        'Blog Graphics',
        'Banners x Billboards',
        'Icons x Graphics',
        'NFT Collections Design'
      ],
      dropdownBasic: [
        'Logo Design',
        'Intro Animation',
        'Amazon Content',
        'Merch Design',
        'Ui/Ux Design',
        '2D/3D Animations',
        'Lottie Animations',
        '3D Modeling x Render',
        'Social Media Graphics',
        'Blog Graphics',
        'Banners x Billboards',
        'Icons x Graphics'
      ],
      dropdownEasy: [
        'Logo Design',
        'Amazon Content',
        'Merch Design',
        'Social Media Graphics',
        'Blog Graphics',
        'Banners x Billboards',
        'Icons x Graphics'
      ],
    }
  }
}
</script>
