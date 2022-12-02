<template>
  <div class="theme-switcher" >
    <span class="theme">night</span>
    <div @click="switcher">
      <el-switch
          v-model="modeValue"
          active-color="#fff"
          inactive-color="#fff">
      </el-switch>
    </div>
    <span class="theme">purple</span>
  </div>
</template>

<script>
export default {
  name: "ThemeSwitcherComponent",
  data() {
    return {
      modeValue: false,
      modeKey: 'mode',
    }
  },
  mounted() {
    if (localStorage.getItem('mode') === null) {
      this.storeMode(this.modeKey, this.modeValue);
    }
    this.modeValue = JSON.parse(localStorage.getItem(this.modeKey));
    this.switchThemeMode();
  },
  methods: {
    switcher() {
      this.storeMode(this.modeKey, this.modeValue)

      this.switchThemeMode();
    },
    switchThemeMode() {
      const baseColor = this.modeValue ? '#5a22d9' : '#000';
      const secondColor = this.modeValue ? '#000' : '#5a22d9';
      document.documentElement.style.setProperty('--base-color', baseColor);
      document.documentElement.style.setProperty('--second-color', secondColor);
    },
    storeMode(key, value) {
      localStorage.setItem(key, value);
    }
  }
}
</script>