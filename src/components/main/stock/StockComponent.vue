<template>
  <div class="stock" id="StockRef">
    <div class="container">
      <lottie :options="defaultOptions"/>
      <div class="stock-block-title">
        <h2>More by me</h2>
      </div>

      <div class="stock-items">
        <el-row>
          <el-col :span="24">
            <div class="stock-item-card jewelry-card shadow-bottom">
              <div class="stock-item-content">
                <h3>3D Printable Jewelry Models.</h3>
                <div class="stock-item-description">
                  <p>More than 4000 3D Printable Jewelry Models</p>
                  <p>just join my PATREON, SUBSCRIBE and DOWNLOAD.</p>
                </div>
              </div>
              <div class="stock-item-btn">
                <a href="https://www.patreon.com/reabovstudio">Discover <i class="icon-next"></i></a>
              </div>
            </div>
          </el-col>
          <el-col :lg="8">
            <div class="stock-item-card sound-card shadow-bottom">
              <div class="stock-item-head">
                <h4>Sounds Design</h4>
                <div class="stock-item-description">
                  <p>NO COPY RIGHT SOUND FOR</p>
                  <p>#motion graphic #video editing</p>
                </div>
              </div>
              <div class="stock-item-btn">
                <a href="https://www.patreon.com/reabovstudio">Discover <i class="icon-next"></i></a>
              </div>
            </div>
          </el-col>
          <el-col :lg="8">
            <div class="stock-item-card studio-card shadow-bottom">
              <div class="stock-item-footer">
                <h3>ON STUDIO</h3>
                <div class="stock-item-description">
                  <p>Welcome on my studio, here we talk about design, music, animation and art.</p>
                </div>
              </div>
              <div class="stock-item-btn">
                <a href="https://www.patreon.com/reabovstudio">Discover <i class="icon-next"></i></a>
              </div>
            </div>
          </el-col>
          <el-col :lg="8">
            <div class="stock-item-card fonts-card shadow-bottom">
              <div class="stock-item-head">
                <h4>FONTS Collection</h4>
                <div class="stock-item-description">
                  <p>Let's create fonts, oh yeah!!! Learn how to create your font and download fonts for free.</p>
                </div>
              </div>
              <div class="stock-item-btn">
                <a href="https://www.patreon.com/reabovstudio">Discover <i class="icon-next"></i></a>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import Lottie from "vue-lottie";
import swipe from "@/assets/lottie/swipe.json";
export default {
  name: 'StockComponent',
  components: {
    Lottie
  },
  data() {
    return {
      defaultOptions: {animationData: swipe, loop: true},
    }
  }
}
</script>
