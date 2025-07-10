<template>
  <div class=" stock" id="StockRef">
    <div class="stock-block-title">
      <h2>More by me</h2>
      <h3>Discover a lot of different and cool things here</h3>
    </div>

    <div class="container stock-items">
      <el-row>
<!--        <el-col :span="24">-->
<!--          <div class="stock-item-card jewelry-card shadow-bottom">-->
<!--            <div class="stock-item-content">-->
<!--              <div class="stock-item-card-jewelry-image" v-if="!isMobile">-->
<!--                <img src="@/assets/images/stock/reabovstock_desktop.svg">-->
<!--              </div>-->
<!--              <div class="stock-item-card-jewelry-image" v-if="isMobile">-->
<!--                <img src="@/assets/images/stock/reabovstock_mobile.svg">-->
<!--              </div>-->
<!--              <div class="stock-item-description">-->
<!--                <h3>3D printable jewelry models</h3>-->
<!--                <div class="stock-item-description-small">-->
<!--                  <span>Join and Download</span>-->
<!--                  <span>Rings, Pendants, Sculptures, Chains + More</span>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="stock-item-btn">-->
<!--              <a href="http://reabovstock.com">Discover <i class="icon-next"></i></a>-->
<!--            </div>-->
<!--          </div>-->
<!--        </el-col>-->
        <el-col :lg="8">
          <div class="stock-item-card thumbnail-card patreon-card shadow-bottom">
            <div class="stock-item-head">
              <h4>Patreon</h4>
              <h5>Find more here</h5>
            </div>
            <div class="stock-item-image">
              <img src="@/assets/images/stock/patreon.svg">
            </div>
            <div class="stock-item-btn">
              <a href="https://www.patreon.com/reabov">Discover <i class="icon-next"></i></a>
            </div>
          </div>
        </el-col>
        <el-col :lg="8">
          <div class="stock-item-card thumbnail-card behance-card shadow-bottom">
            <div class="stock-item-head">
              <h4>Behance</h4>
              <h5>Same but different</h5>
            </div>
            <div class="stock-item-image">
              <img src="@/assets/images/stock/behance.svg">
            </div>
            <div class="stock-item-btn">
              <a href="https://www.behance.net/reabovstudio">Discover <i class="icon-next"></i></a>
            </div>
          </div>
        </el-col>
        <el-col :lg="8">
          <div class="stock-item-card thumbnail-card youtube-card shadow-bottom">
            <div class="stock-item-head">
              <h4>YouTube</h4>
              <h5>Music x Video</h5>
            </div>
            <div class="stock-item-image">
              <img src="@/assets/images/stock/youtube.svg">
            </div>
            <div class="stock-item-btn">
              <a href="https://www.youtube.com/@ReabovAlexandru">Discover <i class="icon-next"></i></a>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StockComponent',
  data() {
    return {
      windowWidth: window.innerWidth,
    }
  },
  computed: {
    isMobile() {
      return this.windowWidth < 992;
    },
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
    });
  },
}
</script>
