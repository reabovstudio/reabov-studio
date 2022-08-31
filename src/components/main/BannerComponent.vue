<template>
    <div class="banner container">
        <div class="logo-img">
            <img src="@/assets/logo.svg" alt="logo">
        </div>
        <div class="author-img">
            <img src="@/assets/author.png" alt="author">
        </div>
    </div>
</template>

<script>
export default {
    name: 'BannerComponent',
    data() {
        return {
            
        }
    }
}
</script>

<style lang="scss" scoped>
.banner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.banner {
    width: 100vw;
    position: relative;

    .logo-img {
        max-width: 500px;
        height: 100%;
        display: flex;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;

        img {
            width: 100%;
        }
    }

    .author-img {
        width: 900px;
        position: absolute;
        right: 0;
        bottom: -400px;

        img {
            width: 100%;
        }
    }
}
</style>