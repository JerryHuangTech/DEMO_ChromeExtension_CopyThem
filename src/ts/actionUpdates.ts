import { actionContainer } from "./actionContainer";
import { addCopyButtonToResult } from "./addCopyButtonToResult";
import { updateCounterForResult } from "./updateCounterForResult";

export const actionUpdates = (resultElement: HTMLElement, i: number) => {
  console.log("actionUpdates");

  actionContainer(resultElement, i);
  addCopyButtonToResult(resultElement, i);
  updateCounterForResult(resultElement, i);
};

/*
在結果元素上添加操作容器，可能包含一些按鈕或菜單等操作元素。
為結果元素添加複製按鈕，使用戶可以將結果文本複製到剪貼板中。
更新結果元素計數器，可能是顯示已經更新的次數或其它相關資訊。
*/
