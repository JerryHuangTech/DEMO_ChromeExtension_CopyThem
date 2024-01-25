export const updateCounterForResult = (answer: HTMLElement, index: number) => {
  console.log("updateCounterForResult: " +  `action-buttons-counter-${index}`);
  
  const prevCounter = document.querySelector(
    `#action-buttons-counter-${index}`
  ) as HTMLElement;
  const prevCounterText = prevCounter ? prevCounter.innerText : "";

  const answerText = answer.innerText;
  const answerChars = answerText.length;
  const answerWords = answerText.split(/[ /]/).length;

  const counterElement = Object.assign(document.createElement("div"), {
    textContent: `${answerChars || 0} chars | ${answerWords || 0} words`,
    className: "gpt-copyit gptc-msg-details",
  });
  if (prevCounterText !== counterElement.textContent) {
    if (prevCounter) prevCounter.remove();
    counterElement.id = `action-buttons-counter-${index}`;
    const actionWrapper = document.querySelector(`#action-buttons-${index}`);
    actionWrapper?.appendChild(counterElement);
  }
};
