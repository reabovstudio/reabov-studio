<template>
  <div class="container">
    <div class="contact">
      <div class="contact-button">
        <div class="contact-button-text">
          <span>Direct</span>
          <span>Message</span>
        </div>
        <div class="contact-button-image">
          <img :src="require('@/assets/telegram.svg')">
        </div>
      </div>
      <div class="contact-info">
        <h3>contact</h3>
        <span>contact@reabov.st</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactComponent'
}
</script>