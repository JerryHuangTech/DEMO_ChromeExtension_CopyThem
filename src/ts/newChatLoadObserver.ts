import { waitForElement } from "./waitForElement";
import { newChatLoaded } from "./newChatLoaded";

export const newChatLoadObserver = () => {
  console.log("newChatLoadObserver");

  waitForElement("nav a, form textarea", () => {
    const navElements = document.querySelectorAll(
      "nav > div a, nav a:nth-child(1)"
    );
    navElements.forEach((navEl) => {
      navEl.addEventListener("click", async () => {
        await new Promise((r) => setTimeout(r, 250));
        waitForElement(".text-base, main h1", () => {
          if (document.querySelector(".text-base")) {
            console.log("existing chat loaded");
            newChatLoaded();
          } else if (document.querySelector("main h1")) {
            console.log("new chat opened");
            newChatLoaded();
          }
          newChatLoadObserver();
        });
      });
    });
  });
};
