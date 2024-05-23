<template>
  <div class="theme-switcher">
    <span class="theme">night</span>
    <div @click="switcher">
      <el-switch
          v-model="modeValue"
          active-color="#fff"
          inactive-color="#fff">
      </el-switch>
    </div>
    <span class="theme">wtf</span>
  </div>
</template>

<script>
export default {
  name: "ThemeSwitcherComponent",
  data() {
    return {
      modeValue: false,
      modeKey: 'mode',
      interval: null,
      baseColor: '#000',
      colors: [
        '#ff6400',
        '#4d00ff',
        '#ffdd00',
        '#a0fa00',
        '#ff1f5e',
        '#a0fa00',
        '#0086ff'
      ],
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
      let index = 0;

      if (this.modeValue) {
        this.interval = setInterval(() => {
          if (index === this.colors.length) {
            index = 0;
          }

          this.baseColor = this.colors[index];
          this.setColor(this.baseColor);

          index++;
        }, 100);
      }  else {
        this.destroyed();
        this.baseColor = '#000';
      }

      this.setColor(this.baseColor);
    },
    setColor(baseColor) {
      const secondColor = this.modeValue ? '#000' : '#5a22d9';
      document.documentElement.style.setProperty('--base-color', baseColor);
      document.documentElement.style.setProperty('--second-color', secondColor);
    },
    storeMode(key, value) {
      localStorage.setItem(key, value);
    },
    destroyed() {
      clearInterval(this.interval)
    }
  }
}
</script>