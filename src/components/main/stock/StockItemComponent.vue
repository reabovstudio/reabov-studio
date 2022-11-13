<template>
  <div class="stock-item-card">
    <div class="stock-item-title">
      <h3>{{ title }}</h3>
    </div>
    <div class="stock-item-description">
      <p>{{ description | truncate(100, '...') }}</p>
    </div>
    <div class="stock-item-animation" v-if="animation">
      <el-image :src="require(`@/assets/images/stock/${ animation }`)"></el-image>
    </div>
    <div class="stock-item-button">
      <a target="_blank" :href="url">join now</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StockItemComponent',
  props: {
    title: String,
    description: String,
    animation: String,
    url: String
  }
}
</script>