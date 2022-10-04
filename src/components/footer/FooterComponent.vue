<template>
    <div class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="logo">
                    <img src="@/assets/logo.svg" alt="logo">
                </div>
            </div>
            <copyright-component></copyright-component>
        </div>
    </div>
</template>

<script>
import CopyrightComponent from '../footer/CopyrightComponent.vue';

export default {
    name: 'FooterComponent',
    components: {
        CopyrightComponent
    }
}
</script>