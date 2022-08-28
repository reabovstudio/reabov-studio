<template>
    <div class="section-track">
        <div class="track-item">
            <banner-component></banner-component>
        </div>
        <div class="track-item">
            <about-component></about-component>
        </div>
    </div>
</template>

<script>
import BannerComponent from './BannerComponent.vue';
import AboutComponent from './AboutComponent.vue';

export default {
    name: 'CarouselComponent',
    components: {
        BannerComponent,
        AboutComponent
    }
}
</script>

<style lang="scss" scoped>
.section-track {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;

    .track-item {
        flex: 0 0 auto;
    }
}
</style>
