import { allAnswers } from "./allAnswers";
import { actionUpdates } from "./actionUpdates";

export const updateActionElements = () => {
  console.log("updateActionElements");

  const answers = allAnswers() as HTMLElement[];
  answers.forEach((resultElement: HTMLElement, i: number) => {
    actionUpdates(resultElement, i);
    resultElement.addEventListener("DOMSubtreeModified", () => {
      actionUpdates(resultElement, i);
    });
  });
};

/* 
這段程式碼的作用就是在頁面載入時和每當答案內容發生變化時，自動更新某些相關元素的樣式。這個自動更新的過程是通過調用 actionUpdates 函式來實現的。
*/
