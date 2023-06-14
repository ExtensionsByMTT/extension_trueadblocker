// background.js

// Listen for messages from the content script
// chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
//   // Check if the message is from the content script
//   if (message.message === "ads Blocked") {
// console.log(message.message)
//     sendResponse({ farewell: true });
//   }
// });

chrome.runtime.onInstalled.addListener(function() {
    chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
      if (changeInfo.status === "complete" && tab.active) {
        chrome.tabs.sendMessage(tabId, { message: "installed" }, function(response) {
          if (chrome.runtime.lastError) {
            console.log(chrome.runtime.lastError);
          } else if (response && response.farewell) {
            console.log(response.farewell, "response");
          }
        });
      }
    });
  });
  
  
  
  
  
  
  
  
  
  
  
  