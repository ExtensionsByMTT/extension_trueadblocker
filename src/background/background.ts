// background.js
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
  
  

  
  
  
  
  
  
  
  
  