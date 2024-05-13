<template>
    <div class="container">
        <div class="contact">
            <div class="contact-button">
                <div class="contact-button-image">
                    <a target="_blank" href="https://t.me/reabov">
                        <img :src="require('@/assets/telegram.svg')">
                    </a>
                </div>
            </div>
            <div class="contact-info">
                <h3>contact</h3>
            </div>
        </div>
        <lottie :options="defaultOptions"/>
    </div>
</template>

<script>
import Lottie from "vue-lottie";
import swipe from "@/assets/lottie/swipe.json";

export default {
    name: 'ContactComponent',
    components: {
        Lottie
    },
    data() {
        return {
            defaultOptions: {animationData: swipe, loop: true},
        }
    }
}
</script>
