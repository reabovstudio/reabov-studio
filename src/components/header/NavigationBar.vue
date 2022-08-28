<template>
    <div class="container">
        <el-menu :default-active="activeIndex" class="navigation-bar" mode="horizontal" @select="handleSelect" background-color="transparent">
            <el-menu-item index="1">Who I'am</el-menu-item>
            <el-menu-item index="2">Portfolio</el-menu-item>
            <el-menu-item index="3">Social Media</el-menu-item>
            <el-menu-item index="4">Contact Me</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    name: 'NavigationBar',
    data() {
        return {
            activeIndex: '1'
        }
    },
    methods: {
      handleSelect(key) {
        this.activeIndex = key;
      }
    }
}
</script>

<style lang="scss" scoped>
.navigation-bar {
    display: flex;
    justify-content: space-between;
    padding: 50px 0;
    width: 100%;    

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
}
</style>