<script lang="ts">
import { defineComponent } from "vue";
import { useCalculator } from "../features/useCalculator";

export default defineComponent({
  setup() {
    const {
      firstValue,
      secondValue,
      operator,
      mergeSecondValue,
      enterDigit,
      delDigit,
      useOperator,
      showResult,
      resetStateOfCalc,
    } = useCalculator();

    return {
      firstValue,
      secondValue,
      operator,
      mergeSecondValue,
      enterDigit,
      delDigit,
      useOperator,
      showResult,
      resetStateOfCalc,
    };
  },
});
</script>

<template>
  <div>
    <div class="calc-screen">
      <h3>
        {{ operator }}
        {{ !mergeSecondValue() ? 0 : mergeSecondValue() }}
      </h3>
    </div>
    <div class="calc-keyboard">
      <div class="keyboard">
        <!-- row 1 -->
        <button class="calc-button" @click="enterDigit('7')"><h1>7</h1></button>
        <button class="calc-button" @click="enterDigit('8')"><h1>8</h1></button>
        <button class="calc-button" @click="enterDigit('9')"><h1>9</h1></button>
        <button class="calc-button calc-button-prim" @click="delDigit()">
          <h2>DEL</h2>
        </button>
        <!-- row 2 -->
        <button class="calc-button" @click="enterDigit('4')"><h1>4</h1></button>
        <button class="calc-button" @click="enterDigit('5')"><h1>5</h1></button>
        <button class="calc-button" @click="enterDigit('6')"><h1>6</h1></button>
        <button class="calc-button" @click="useOperator('+')">
          <h1>+</h1>
        </button>
        <!-- row 3 -->
        <button class="calc-button" @click="enterDigit('1')"><h1>1</h1></button>
        <button class="calc-button" @click="enterDigit('2')"><h1>2</h1></button>
        <button class="calc-button" @click="enterDigit('3')"><h1>3</h1></button>
        <button class="calc-button" @click="useOperator('-')">
          <h1>-</h1>
        </button>
        <!-- row 4 -->
        <button class="calc-button" @click="enterDigit('.')"><h1>.</h1></button>
        <button class="calc-button" @click="enterDigit('0')"><h1>0</h1></button>
        <button class="calc-button" @click="useOperator('/')">
          <h1>/</h1>
        </button>
        <button class="calc-button" @click="useOperator('x')">
          <h1>x</h1>
        </button>
        <!-- row 5 -->
        <button
          class="calc-button calc-button-prim calc-button-reset"
          @click="resetStateOfCalc()"
        >
          <h1>RESET</h1>
        </button>
        <button class="calc-button calc-button-equal" @click="showResult()">
          <h1>=</h1>
        </button>
      </div>
    </div>
  </div>
</template>
