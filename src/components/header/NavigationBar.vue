<template>
    <div>
        <div class="shadow">
            <!-- descktop -->
            <div class="navigation-bar" v-if="!isMobile">
                <div class="navigation-bar-column column-start">
                    <div class="logo">
                        <router-link :to="{name: 'HomeView'}">
                            <img src="@/assets/logo.svg" alt="logo">
                        </router-link>
                    </div>
                </div>
                <div class="navigation-bar-column column-center">
                    <el-menu :default-active="activeIndex"
                             class="navigation-bar-menu"
                             @select="handleSelect"
                             background-color="transparent">
                        <el-menu-item index="1" @click="goToSection('AboutRef')">about</el-menu-item>
                        <el-menu-item index="2" @click="goToSection('PortfolioRef', 200)">portfolio</el-menu-item>
                        <theme-switcher-component></theme-switcher-component>
                        <!--          <el-menu-item index="4" @click="goToSection('StockRef')">stock</el-menu-item>-->
                        <el-menu-item index="3" @click="goToSection('SocialRef')">social</el-menu-item>
                        <el-menu-item index="5" @click="goToSection('ContactRef')">contact</el-menu-item>
                    </el-menu>
                </div>
                <div class="navigation-bar-column column-end">
                    <social-icons-component></social-icons-component>
                </div>
            </div>
        </div>

        <!-- mobile -->
        <div v-if="isMobile">
            <div class="navigation-bar-mobile collapse-menu shadow" :class="{active: this.isActive}">
                <el-menu
                        :default-active="activeIndex"
                        :class="{active: this.isActive}"
                        class="navigation-bar-menu"
                        @select="handleSelect"
                        background-color="transparent">
                    <theme-switcher-component></theme-switcher-component>
                    <el-menu-item index="1" @click="goToSection('AboutRef')">About</el-menu-item>
                    <el-menu-item index="2" @click="goToSection('PortfolioRef', 100)">Portfolio</el-menu-item>
                    <!--          <el-menu-item index="4" @click="goToSection('StockRef')">Stock</el-menu-item>-->
                    <el-menu-item index="3" @click="goToSection('SocialRef')">Social</el-menu-item>
                    <el-menu-item index="5" @click="goToSection('ContactRef')">Contact</el-menu-item>
                </el-menu>
                <div class="collapse-btn" :class="{active: this.isActive}" @click="this.collapseMenu">
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ThemeSwitcherComponent from "@/components/common/ThemeSwitcherComponent";
import SocialIconsComponent from "@/components/common/SocialIconsComponent";

export default {
    name: 'NavigationBar',
    components: {
        ThemeSwitcherComponent,
        SocialIconsComponent
    },
    data() {
        return {
            activeIndex: '1',
            isActive: false,
            windowWidth: window.innerWidth,
        }
    },
    computed: {
        isMobile() {
            return this.windowWidth < 992;
        },
    },
    mounted() {
        window.addEventListener("resize", () => {
            this.windowWidth = window.innerWidth;
        });
    },
    methods: {
        handleSelect(key) {
            this.activeIndex = key;
        },
        collapseMenu() {
            this.isActive = !this.isActive;
        },
        goToSection(value, height = 0) {
            if (this.isMobile) {
                this.collapseMenu();
            }

            if (this.$route.name !== 'HomeView') {
                this.$router.push('/');
            } else {
                const top = document.getElementById(value).offsetTop;
                window.scrollTo({
                    top: top - height,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        },
    }
}
</script>
