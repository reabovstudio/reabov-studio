<template>
  <div class="stock">
    <div class="container">
      <div class="stock-info">
        <div class="stock-logo">
          <img :src="require('@/assets/stock-logo.svg')">
        </div>
        <div class="stock-description">
          <p>xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx
            xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx </p>
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
        <p>a lot of things for an easiest work process</p>
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
          title: 'Sounds',
          description: 'Sounds Effects for Video Editing Blogging, Presentation, Animations and Other.',
          animation: 'reabovstudio_sound.gif',
          url: 'https://www.patreon.com/reabovstudio'
        },
        {
          id: 2,
          title: 'Images',
          description: 'High Resolution Images from my collections that I collected in a few years.',
          animation: 'reabovstudio_studio.gif',
          url: 'https://www.patreon.com/reabovstudio'
        },
        {
          id: 3,
          title: '3D Models',
          description: 'More than 4000 3D Printable jewelry  Models, Sculptures Assets and other.',
          animation: 'reabovstudio_jewelry.gif',
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