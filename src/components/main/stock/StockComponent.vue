<template>
  <div class="stock">
    <div class="container">
      <div class="stock-info">
        <div class="stock-logo">
          <img :src="require('@/assets/stock-logo.svg')">
          <p>Be inspired, Be productive, Be creative</p>
        </div>
        <div class="stock-icons">
          <div class="stock-icon">
            <i class="icon-ring"></i>
          </div>
          <div class="stock-icon">
            <i class="icon-camera"></i>
          </div>
          <div class="stock-icon">
            <i class="icon-sound"></i>
          </div>
        </div>
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
export default {
  name: 'StockComponent',
  data() {
    return {}
  }
}
</script>
