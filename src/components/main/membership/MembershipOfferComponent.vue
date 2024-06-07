<template>
  <div class="container">
    <div class="membership-offer">
      <h1>WHAT YOU GET</h1>
      <div class="services">
        <div v-for="(row, index) in services" :key="index">
          <span v-for="(item, index) in row" :style="`color: ${item.color}`" :key="index">{{ item.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MembershipOfferComponent',
  data() {
    return {
      services: [
        [
          {name: "Logo Design", color: "rgb(60, 0, 255)"},
          {name: "Branding x Identity", color: "rgb(255, 0, 0)"},
          {name: "Product Design", color: "rgb(255, 166, 0)"},
          {name: "Amazon Content", color: "rgb(255, 255, 0)"},
        ],
        [
          {name: "Animation", color: "rgb(128, 255, 0)"},
          {name: "Lottie Animation", color: "rgb(128, 255, 0)"},
          {name: "Intro Animation", color: "rgb(128, 255, 0)"},
          {name: "Commercial Animation", color: "rgb(128, 255, 0)"},
        ],
        [
          {name: "Social Media Graphics", color: "rgb(0, 0, 255)"},
          {name: "Blog Graphics", color: "rgb(0, 0, 255)"},
          {name: "Banners x Billboards", color: "rgb(255, 0, 0)"},
        ],
        [
          {name: "Merch Design", color: "rgb(255, 0, 255)"},
          {name: "Jewelry Design", color: "rgb(0, 255, 0)"},
          {name: "UI / UX Design", color: "rgb(255, 0, 255)"},
          {name: "Webflow", color: "rgb(0, 255, 255)"},
        ],
        [
          {name: "3D Modeling", color: "rgb(0, 255, 255)"},
          {name: "3D Sculpting", color: "rgb(0, 255, 255)"},
          {name: "3D Rendering", color: "rgb(0, 255, 255)"}
        ]
      ]
    }
  }
}
</script>
