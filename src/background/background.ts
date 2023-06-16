// background.js
chrome.runtime.onInstalled.addListener(function(details) {
  if (details.reason === "install") {
    // Extension installed for the first time

    // Set a flag indicating the extension has been installed
    chrome.storage.local.set({ isInstalled: true });
  }
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status === "complete" && tab.active) {
    // Check if the extension has been installed before
    chrome.storage.local.get("isInstalled", function(data) {
      if (data.isInstalled) {
        // Extension has been installed before, send the message
        chrome.tabs.sendMessage(tabId, { message: "installed" }, function(response) {
          if (chrome.runtime.lastError) {
            console.log(chrome.runtime.lastError);
          } else if (response && response.farewell) {
            console.log(response.farewell, "response");
          }
        });
      }
    });
  }
});




//   chrome.runtime.onMessage.addListener(onMessage);

// function onMessage(messageEvent, sender, sendResponse) {
//     if (messageEvent.name === "updateCounter") {
//         if ("counterValue" in messageEvent) {
//             chrome.action.setBadgeText({ text: messageEvent.counterValue.toString() });
//         }
//     } else if (messageEvent.name === "getCounter") {
//         chrome.action.getBadgeText({}, function (result) {
//             sendResponse(result);
//         });
//     }

//     // Need to return true to indicate that sendResponse will be called asynchronously
//     return true;
// }

// chrome.webRequest.onHeadersReceived.addListener(
//     function (details) {
//         const responseHeaders = details.responseHeaders || [];
//         for (let i = 0; i < responseHeaders.length; ++i) {
//             if (responseHeaders[i].name.toLowerCase() === "content-security-policy") {
//                 let cspValue = responseHeaders[i].value;
//                 const entries = cspValue.split(";");
//                 for (let j = 0; j < entries.length; j++) {
//                     if (entries[j].includes("script-src")) {
//                         // A hack to allow the page to load our injected inline scripts
//                         entries[j] += " 'unsafe-inline'";
//                     }
//                 }
//                 responseHeaders[i].value = entries.join(";");
//                 break;
//             }
//         }

//         return { responseHeaders: responseHeaders };
//     },
 
    
// );

  

  
  
  
  
  
  
  
  
  