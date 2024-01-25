import { updateActionElements } from "./updateActionElements";

export const newChatLoaded = () => {
  console.log("newChatLoaded");

  try {
    updateActionElements();
  } catch (error) {
    console.error("Error in updateActionElements:", error);
  }
};
