import { reactive, toRefs } from "vue";
import { CalcData } from "../types/calculator";

export const useCalculator = () => {
  const calcData: CalcData = reactive({
    firstValue: 0.0,
    secondValue: [],
    operator: "",
  });

  const mergeSecondValue = (): number => {
    const joinedSecondValue = calcData.secondValue.join("");
    const mergedSecondValue = parseFloat(joinedSecondValue);

    return mergedSecondValue;
  };

  const enterDigit = (digit: string) => {
    calcData.secondValue.push(digit);
  };

  const delDigit = () => {
    calcData.secondValue.pop();
  };

  const useOperator = (operator: string) => {
    calcData.firstValue = mergeSecondValue();
    calcData.secondValue = [];
    calcData.operator = operator;
  };

  const showResult = () => {
    switch (calcData.operator) {
      case "+":
        calcData.secondValue = [
          (calcData.firstValue + mergeSecondValue()).toString(),
        ];
        break;
      case "-":
        calcData.secondValue = [
          (calcData.firstValue - mergeSecondValue()).toString(),
        ];
        break;
      case "x":
        calcData.secondValue = [
          (calcData.firstValue * mergeSecondValue()).toString(),
        ];
        break;
      case "/":
        if (mergeSecondValue() === 0) {
          calcData.secondValue = ["0"];
        } else if (mergeSecondValue() !== 0) {
          calcData.secondValue = [
            (calcData.firstValue / mergeSecondValue()).toString(),
          ];
        }
        break;
      case "=":
        break;
      default:
        calcData.secondValue = ["0"];
    }

    calcData.operator = "=";
  };

  const resetStateOfCalc = () => {
    calcData.firstValue = 0;
    calcData.secondValue = [];
    calcData.operator = "";
  };

  return {
    ...toRefs(calcData),
    mergeSecondValue,
    enterDigit,
    delDigit,
    useOperator,
    showResult,
    resetStateOfCalc,
  };
};
