<template>
  <div class="container">
    <membership-benefits-component></membership-benefits-component>
    <membership-slider-component></membership-slider-component>
    <vertical-line-component></vertical-line-component>
    <div class="membership" id="PricingRef">
      <div class="membership-call">
        <img src="@/assets/images/icon-call.svg" alt="telegram">
        <h3>Lets start with a call</h3>
        <p>Learn more about how Reabov Studio works</p>
        <p>and how it can help you</p>
        <div class="membership-call-button">
          <a target="_blank" href="https://calendly.com/reabovstudio/15min">
            book a call
          </a>
        </div>
      </div>
    </div>
<!--      <div class="membership-block-title">-->
<!--        <h1>Pricing</h1>-->
<!--      </div>-->
<!--      &lt;!&ndash; block 1&ndash;&gt;-->
<!--      <div class="membership-item">-->
<!--        <div class="membership-slot">-->
<!--          <div class="membership-slot-widget">-->
<!--            <div class="slot-circle slot-green"></div>-->
<!--            <span class="slot-text">Slots available</span>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="membership-block green">-->
<!--          <div class="membership-block-image">-->
<!--            <img src="@/assets/images/membership/basic.gif" alt="basic">-->
<!--          </div>-->
<!--          <div class="membership-block-shape">-->
<!--            <h2 class="title-shape">Basic</h2>-->
<!--          </div>-->
<!--          <div class="membership-block-info">-->
<!--            <ul>-->
<!--              <li>Standard Priority</li>-->
<!--              <li>One Request At a Time</li>-->
<!--              <li>Average 48 Hour Delivery</li>-->
<!--              <li class="text-muted">Unlimited Brands</li>-->
<!--              <li class="text-muted">Private Telegram Chat</li>-->
<!--              <li class="text-muted">Unlimited Team Members</li>-->
<!--              <li class="text-muted">Unlimited Stock Images</li>-->
<!--              <li class="text-muted">Manage tasks with Trello Board</li>-->
<!--              <li>ALL TAXES INCLUDED</li>-->
<!--            </ul>-->
<!--          </div>-->
<!--          <div class="membership-block-price">-->
<!--            <span class="membership-block-price-number">4095 $</span>-->
<!--            <span class="membership-block-price-text">one month</span>-->
<!--          </div>-->
<!--          <div class="membership-block-footer-text">-->
<!--            <span>Pause or cancel anytime</span>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      &lt;!&ndash; block 2&ndash;&gt;-->
<!--      <div class="membership-item">-->
<!--        <div class="membership-slot">-->
<!--          <div class="membership-slot-widget">-->
<!--            <div class="slot-circle slot-green"></div>-->
<!--            <span class="slot-text">Slots available</span>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="membership-block yellow">-->
<!--          <div class="membership-block-image">-->
<!--            <img src="@/assets/images/membership/extended.gif" alt="pro">-->
<!--          </div>-->
<!--          <div class="membership-block-shape">-->
<!--            <h2 class="title-shape">Extended</h2>-->
<!--          </div>-->
<!--          <div class="membership-block-info">-->
<!--            <ul>-->
<!--              <li>Standard Priority</li>-->
<!--              <li>One Request At a Time</li>-->
<!--              <li>Average 48 Hour Delivery</li>-->
<!--              <li class="text-muted">Unlimited Brands</li>-->
<!--              <li class="text-muted">Private Telegram Chat</li>-->
<!--              <li class="text-muted">Unlimited Team Members</li>-->
<!--              <li class="text-muted">Unlimited Stock Images</li>-->
<!--              <li class="text-muted">Manage tasks with Trello Board</li>-->
<!--              <li>ALL TAXES INCLUDED</li>-->
<!--            </ul>-->
<!--          </div>-->
<!--          <div class="membership-block-price">-->
<!--            <span class="membership-block-price-number">9095 $</span>-->
<!--            <span class="membership-block-price-text">3 month</span>-->
<!--          </div>-->
<!--          <div class="membership-block-footer-text">-->
<!--            <span>Pause or cancel anytime</span>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      &lt;!&ndash; block 3&ndash;&gt;-->
<!--      <div class="membership-item">-->
<!--        <div class="membership-slot">-->
<!--          <div class="membership-slot-widget">-->
<!--            <div class="slot-circle slot-red"></div>-->
<!--            <span class="slot-text">Slots available</span>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="membership-block red">-->
<!--          <div class="membership-block-image">-->
<!--            <img src="@/assets/images/membership/premium.gif" alt="pro">-->
<!--          </div>-->
<!--          <div class="membership-block-shape">-->
<!--            <h2 class="title-shape">Premium</h2>-->
<!--          </div>-->
<!--          <div class="membership-block-info">-->
<!--            <ul>-->
<!--              <li>Primary Priority</li>-->
<!--              <li>Many Requests At a Time</li>-->
<!--              <li>Average 24 Hour Delivery</li>-->
<!--              <li class="text-muted">Unlimited Brands</li>-->
<!--              <li class="text-muted">Private Telegram Chat</li>-->
<!--              <li class="text-muted">Unlimited Team Members</li>-->
<!--              <li class="text-muted">Unlimited Stock Images</li>-->
<!--              <li class="text-muted">Manage tasks with Trello Board</li>-->
<!--              <li>ALL TAXES INCLUDED</li>-->
<!--            </ul>-->
<!--          </div>-->
<!--          <div class="membership-block-price">-->
<!--            <span class="membership-block-price-number">6095 $</span>-->
<!--            <span class="membership-block-price-text">one month</span>-->
<!--          </div>-->
<!--          <div class="membership-block-footer-text">-->
<!--            <span>Pause or cancel anytime</span>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="membership-call">-->
<!--        <h3>Lets start with a call</h3>-->
<!--        <p>Learn more about how Reabov Studio works</p>-->
<!--        <p>and how it can help you</p>-->
<!--        <div class="membership-call-button">-->
<!--          <a target="_blank" href="https://calendly.com/reabovstudio/15min">-->
<!--            book a call-->
<!--          </a>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script>
import MembershipBenefitsComponent from "@/components/main/membership/MembershipBenefitsComponent.vue";
import MembershipSliderComponent from "@/components/main/membership/MembershipSliderComponent.vue";
// import MembershipOfferComponent from "@/components/main/membership/MembershipOfferComponent.vue";
import VerticalLineComponent from "@/components/main/VerticalLineComponent.vue";
export default {
  name: 'MembershipComponent',
  components: {
    MembershipBenefitsComponent,
    MembershipSliderComponent,
    // MembershipOfferComponent,
    VerticalLineComponent,
  },
}
</script>
