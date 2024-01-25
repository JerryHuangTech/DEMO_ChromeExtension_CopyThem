import "@style/main.css";
import { newChatLoadObserver } from "./ts/newChatLoadObserver";
import { newChatLoaded } from "./ts/newChatLoaded";
import {doObserver} from "./ts/lib/addMutationObserver"

window.addEventListener("load", () => {
  newChatLoadObserver();
  setInterval(() => {
    newChatLoaded();
  }, 1000);
});


