
// background.js
chrome.runtime.onInstalled.addListener(function(details) {
  if (details.reason === "install") {
    // Extension installed for the first time
    // Set a flag indicating the extension has been installed
    chrome.storage.local.set({ isInstalled: true });
  }
});


// chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
//   if (message.totalBlockedCount !== undefined) {
//     // Forward the message to the popup script
//     // chrome.runtime.sendMessage({ totalBlockedCount: message.totalBlockedCount });
//     chrome.storage.sync.set({totalBlockedAd : message.totalBlockedCount})
//   }
// });






  





  
  
  
  
  
  
  
  
  