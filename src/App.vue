<template>
  <div :class="'theme--' + appTheme">
    <div id="theme">
      <div id="container">
        <AppHeaderWithThemeSelector />
        <AppCalculator />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "./store";

import AppHeaderWithThemeSelector from "./components/AppHeaderWithThemeSelector.vue";
import AppCalculator from "./components/AppCalculator.vue";

export default defineComponent({
  name: "App",
  components: { AppHeaderWithThemeSelector, AppCalculator },
  setup() {
    const store = useStore();
    const appTheme = ref<string>(store.state.appTheme);

    store.watch(
      (getters) => getters.appTheme,
      () => {
        appTheme.value = store.state.appTheme;
      }
    );

    return {
      appTheme,
    };
  },
});
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
