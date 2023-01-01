<template>
  <div class="stock">
    <div class="container">
      <div class="stock-info">
        <div class="stock-logo">
          <img :src="require('@/assets/stock-logo.svg')">
          <span>be inspired be productive be creative</span>
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
                <div class="stock-item-tags">
                  <span class="stock-item-tag">#rings</span>
                  <span class="stock-item-tag">#wedding rings</span>
                  <span class="stock-item-tag">#pendants</span>
                  <span class="stock-item-tag">#icons</span>
                  <span class="stock-item-tag">#couloms</span>
                  <span class="stock-item-tag">#crosses</span>
                  <span class="stock-item-tag">#earrings</span>
                  <span class="stock-item-tag">#sculptures</span>
                </div>
                <div class="stock-item-description">
                  <p>More than 4000 3D Printable Jewelry Models just join on our PATREON, be subscribed and
                    download.</p>
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
                  <p>Welcome on my studio, here we talk about art, design, music.</p>
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
                  <p>Here we create fonts, oh yeah!!! learn how to create your font and download fonts for free</p>
                </div>
              </div>
              <div class="stock-item-btn">
                <a href="https://www.patreon.com/reabovstudio">Discover <i class="icon-next"></i></a>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>

      <div class="stock-footer">
        <p>Be inspired, Be productive, Be creative</p>
        <h5>just download and create</h5>
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
