import { Store } from "vuex";

declare module "@vue/runtime-core" {
  interface State {
    appTheme: string;
  }

  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
