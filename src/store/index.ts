import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";

export interface State {
  appTheme: string;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    appTheme: "theme-1",
  },
  getters: {
    appTheme(state) {
      return state.appTheme;
    },
  },
  mutations: {
    changeAppTheme(state: State, theme: string) {
      state.appTheme = theme;
    },
  },
});

export function useStore() {
  return baseUseStore(key);
}
