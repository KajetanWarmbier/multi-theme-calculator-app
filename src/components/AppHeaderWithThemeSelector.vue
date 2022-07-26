<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { useStore } from "../store";

export default defineComponent({
  setup() {
    const store = useStore();
    const themeSelected = ref<string>(store.state.appTheme);

    watch(themeSelected, (themeSelected) => {
      store.commit("changeAppTheme", themeSelected);
    });

    return {
      themeSelected,
    };
  },
});
</script>
<template>
  <div class="header-with-theme-selector">
    <h5>calc</h5>
    <div class="theme-selector">
      <div class="theme-toogler-numbers">
        <h6>1</h6>
        <h6>2</h6>
        <h6>3</h6>
      </div>
      <span>THEME</span>
      <form class="theme-toogler" @submit.prevent>
        <label class="custom-radio-button">
          <input
            id="theme-1"
            type="radio"
            value="theme-1"
            v-model="themeSelected"
          />
          <span class="checkmark"></span>
        </label>

        <label class="custom-radio-button">
          <input
            id="theme-2"
            type="radio"
            value="theme-2"
            v-model="themeSelected"
          />
          <span class="checkmark"></span>
        </label>

        <label class="custom-radio-button">
          <input
            id="theme-3"
            type="radio"
            value="theme-3"
            v-model="themeSelected"
          />
          <span class="checkmark"></span>
        </label>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
