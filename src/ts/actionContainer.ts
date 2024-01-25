//自動新增按鈕
export const actionContainer = (answer: HTMLElement, i: number) => {
  console.log("actionContainer: " + `#action-buttons-${i}`);
  if (document.querySelector(`#action-buttons-${i}`)) return;
  const actionContainer = Object.assign(document.createElement("div"), {
    id: `action-buttons-${i}`,
    className: "gpt-copyit gptc-actions",
  });
  answer.insertAdjacentElement("afterend", actionContainer);
};
