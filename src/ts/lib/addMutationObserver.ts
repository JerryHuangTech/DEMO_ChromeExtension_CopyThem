// 目標元素的 CSS 選擇器，可以是 class 或 ID
const targetSelector = '.markdown.prose';

// 建立一個 MutationObserver 實例
const observer = new MutationObserver((mutationsList, observer) => {
  // 遍歷所有的變動
  for (const mutation of mutationsList) {
    // 如果是目標元素的子節點發生變化
    if (mutation.type === 'childList' && (mutation.target as Element).matches(targetSelector)) {
      // 做你需要的處理
      console.log('目標元素發生變化！');
    }
  }
});

// 設置 MutationObserver 的參數
const config = {
  childList: true, // 監聽子節點的變化
  subtree: true, // 監聽所有子孫節點的變化
};

// 開始監聽目標元素的變化
export const doObserver = observer.observe(document.body, config);
