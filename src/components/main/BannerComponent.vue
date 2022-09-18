<template>
    <div class="banner container section-vh">
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
    width: 100%;
    display: flex;
    flex-direction: column;

    .logo-img {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;

        img {
            width: 100%;
        }
    }

    .author-img {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: flex-end;

        img {
            width: 100%;
        }
    }
}

@media only screen and (min-width: 768px) {
    .banner {
        flex-direction: row;    

        .logo-img {
            width: 50%;
        }

        .author-img {
            width: 50%;
        }
    }
}
</style>