<template>
  <div class="theme-switcher" >
    <span class="theme">Night</span>
    <div @click="switcher">
      <el-switch
          v-model="modeValue"
          active-color="#fff"
          inactive-color="#fff">
      </el-switch>
    </div>
    <span class="theme">Purple</span>
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
      // this.modeValue = !this.modeValue;
      // save mode value in local storage

      // console.log(this.modeValue);

      this.storeMode(this.modeKey, this.modeValue)
      // send mode value in vuex store
      // this.$store.dispatch('setMode', this.modeValue);
      // set base and second color on root
      this.switchThemeMode();
    },
    switchThemeMode() {
      const baseColor = this.modeValue ? '#5a22d9' : '#000';
      document.documentElement.style.setProperty('--base-color', baseColor);
    },
    storeMode(key, value) {
      localStorage.setItem(key, value);
    }
  }
}
</script>