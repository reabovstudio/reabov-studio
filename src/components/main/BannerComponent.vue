<template>
    <div class="banner container">
        <h1>Banner</h1>
        <!-- <img src="@/assets/logo.svg" class="logo-img" alt="logo">
        <img src="@/assets/author.png" class="author-img" alt="author"> -->
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

// .banner {
//     display: flex;
//     justify-content: right;
//     width: 100vw;
//     position: relative;

//     .logo-img {
//         width: 600px;
//         position: absolute;
//         top: 200px;
//         left: 0;
//     }

//     .author-img {
//         width: 80%;
//     }
// }
</style>