<template>
  <div class="translate" >
    <span class="language" :class="{active: !this.languageValue}">EN</span>
    <div @click="this.storeLanguage">
      <el-switch
          v-model="languageValue"
          active-color="#fff"
          inactive-color="#fff">
      </el-switch>
    </div>
    <span class="language" :class="{active: this.languageValue}">RO</span>
  </div>
</template>

<script>
export default {
  name: "TranslateComponent",
  data() {
    return {
      languageValue: false,
      languageKey: 'language'
    }
  },
  mounted() {
    if (localStorage.getItem(this.languageKey) === null) {
      this.storeLanguage();
    }

    this.languageValue = JSON.parse(localStorage.getItem(this.languageKey));
  },
  methods: {
    storeLanguage() {
      this.$store.dispatch('setLanguage', this.languageValue);

      localStorage.setItem(this.languageKey, this.languageValue);
    }
  }
}
</script>