<template>
    <div>
        <div class="container">
            <!-- descktop -->
            <el-menu v-if="!isMobile" 
                    :default-active="activeIndex" 
                    class="navigation-bar" 
                    @select="handleSelect" 
                    background-color="transparent">
                <el-menu-item index="1">Who I'am</el-menu-item>
                <el-menu-item index="2">Portfolio</el-menu-item>
                <el-menu-item index="3">Social Media</el-menu-item>
                <el-menu-item index="4">Contact Me</el-menu-item>
            </el-menu>
        </div>
        
        <!-- mobile -->
        <div v-if="isMobile">
            <div class="navigation-bar-mobile shadow">
                <div class="collapse-btn" :class="{active: this.isActive}" @click="this.collabseMenu">
                    <span></span>
                    <span></span>
                </div>
                <el-menu  
                    :default-active="activeIndex"
                    :class="{active: this.isActive}"
                    class="navigation-bar collapse-menu" 
                    @select="handleSelect" 
                    background-color="transparent">
                    <el-menu-item index="1">Who 'am</el-menu-item>
                    <el-menu-item index="2">Portfolio</el-menu-item>
                    <el-menu-item index="3">Social Media</el-menu-item>
                    <el-menu-item index="4">Contact Me</el-menu-item>
                </el-menu>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavigationBar',
    data() {
        return {
            activeIndex: '1',
            isActive: false,
            windowWidth: window.innerWidth,
        }
    },
    computed: {
        isMobile() {
            return this.windowWidth < 768;
        }
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
        collabseMenu() {
            this.isActive = !this.isActive;
            console.log('test');
        },
    }
}
</script>

<style lang="scss" scoped>
.navigation-bar {
    display: flex;
    justify-content: space-between;
    padding: 50px 0;
    width: 100%;    
    border: none;
   
    &.el-menu.el-menu--horizontal {
        border: none;
    }

    .el-menu-item {
        background-color: transparent !important;
        height: auto;
        line-height: normal;
        font-size: 1.25rem;
        color: #fff;

        &.is-active {
            border-color: transparent;
        }
    }
    
    &.collapse-menu {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0;

        width: 100%;
        height: 0;
        background-color: #000;
        transition: 1s;
        min-height: unset;

        .el-menu-item {
            font-size: 0;
            opacity: 0;
            transition: opacity 1s ease-in-out;
        }
    }

    &.active {
        height: 100vh;

        .el-menu-item {
            font-size: 1.563rem;
            margin: 15px 0;
            opacity: 1;
        }
    }
}

.navigation-bar-mobile {
    margin-left: -20px;
    margin-right: -20px;
    z-index: 2;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    min-height: 41px;
    background-color: #5a23d8;
}
</style>