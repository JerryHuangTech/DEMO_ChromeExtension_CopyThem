import { writeClipboardSave } from "./lib/db/saveDB";

export const addCopyButtonToResult = async (answer: HTMLElement, index: number) => {
  console.log("addCopyButtonToResult");

  if (document.querySelector(`#result-copy-button-${index}`)) return;
  const actionWrapper = document.querySelector(`#action-buttons-${index}`);

  const actionButtonWrapper = Object.assign(document.createElement("div"), {
    className: "gpt-copyit gptc-action-buttons",
  });

  const elementText = () => answer.innerText.replace("Copy code", "");

  const copyButton = Object.assign(document.createElement("button"), {
    id: `result-copy-button-${index}`,
    className: "gpt-copyit gptc-button",
    textContent: "Copy",
    onclick: async (_e: any) => {

      // 新增資料到資料庫
      try {
        console.log("Copy ID: " + copyButton.id)
        writeClipboardSave(copyButton.id, answer.innerText);
      } catch (error) {
        console.log(error);
      }

      navigator.clipboard.writeText(elementText());
      copyButton.textContent = "Copied!";
      copyButton.style.backgroundColor = "#43b495";
      setTimeout(() => {
        copyButton.textContent = "Copy";
        copyButton.style.backgroundColor = "#343441";
      }, 1500);
    },
  });

  copyButton.style.fontSize = "12px"; // set font size to 12px
  copyButton.style.padding = "4px 8px"; // set padding to 4px top/bottom and 8px left/right

  actionButtonWrapper.appendChild(copyButton);

  actionWrapper?.appendChild(actionButtonWrapper);
};
