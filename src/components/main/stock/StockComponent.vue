<template>
  <div class="stock">
    <div class="container">
      <div class="stock-info">
        <div class="stock-logo">
          <img :src="require('@/assets/stock-logo.svg')">
        </div>
        <div class="stock-description">
          <p>The REABOV STOCK project was designed to inspire and motivate people to create, admire and always learn
            something new with me! Every time I will add new content, 3D Models - Tutorials - Sounds.</p>
        </div>
      </div>
      <slider v-bind="options">
        <div class="stock-item" v-for="item in items" :key="item.id">
          <stock-item-component :title="item.title"
                                :description="item.description"
                                :animation="item.animation"
                                :url="item.url">
          </stock-item-component>
        </div>
      </slider>
      <div class="stock-footer">
        <p>Be inspired, Be productive, Be creative</p>
        <h5>just download and create</h5>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import StockItemComponent from '@/components/main/stock/StockItemComponent';

export default {
  name: 'StockComponent',
  components: {
    Slider,
    StockItemComponent
  },
  data() {
    return {
      items: [
        {
          id: 1,
          title: 'My Studio',
          description: 'My work process, Tutorials, Templates, Mockups, Textures, Assets, and my ARTWORKS.',
          animation: 'reabovstudio_studio.gif',
          url: 'https://www.patreon.com/reabovstudio'
        },
        {
          id: 2,
          title: '3D Models',
          description: 'More than 5000 JEWELRY PRINTABLE 3D MODELS: rings, pendants, earrings, chains, bracelets.',
          animation: 'reabovstudio_jewelry.gif',
          url: 'https://www.patreon.com/reabovstudio'
        },
        {
          id: 3,
          title: 'Sounds',
          description: 'Beats, Sound effects, Loops, Samples, For Blogging, Video Editing and Motion Design.',
          animation: 'reabovstudio_sound.gif',
          url: 'https://www.patreon.com/reabovstudio'
        },
      ],
      options: {
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        touchThreshold: 5,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows: true,
              initialSlide: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              initialSlide: 2
            }
          }
        ]
      }
    }
  }
}
</script>