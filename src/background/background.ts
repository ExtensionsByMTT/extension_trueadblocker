
// background.js
chrome.runtime.onInstalled.addListener(function(details) {
  if (details.reason === "install") {
    // Extension installed for the first time

    // Set a flag indicating the extension has been installed
    chrome.storage.local.set({ isInstalled: true });
  }
});









  





  
  
  
  
  
  
  
  
  