type Selector = string;
type Callback<T> = (element: T) => void;
type NotFoundCallback = () => void;

export function waitForElement<T extends Element>(
  selector: Selector,
  callback: Callback<T>,
  maxWaitTime = 5000,
  speed = 100,
  notFoundCallback: NotFoundCallback | null = null
): void {
  const endTime = Date.now() + maxWaitTime;
  const interval = setInterval(() => {
    const element = document.querySelector<T>(selector);
    if (element) {
      clearInterval(interval);
      callback(element);
    }
    if (Date.now() >= endTime) {
      clearInterval(interval);
      if (notFoundCallback) {
        notFoundCallback();
      }
    }
  }, speed);
  
  console.log("waitForElement: " + endTime)
}
