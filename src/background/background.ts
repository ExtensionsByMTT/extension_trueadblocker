// background.js

// Listen for messages from the content script
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  // Check if the message is from the content script
  if (sender.tab && message.action === "blockAds") {
    // Perform actions in response to the message
    // console.log("Blocking YouTube ads...");

    // Example: Send a response back to the content script
    sendResponse({ success: true });
  }
});
