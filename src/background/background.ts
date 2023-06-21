
import rules from '../rules';
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

chrome.declarativeNetRequest.updateDynamicRules({
  removeRuleIds: rules.map((rule) => rule.id),
  addRules: rules
});

// chrome.webRequest.onCompleted.addListener(async function(details) {
//   console.log(details.responseHeaders[3].value,"hehehe")
//   for (var i = 0; i < details.responseHeaders.length; ++i) 
//   {
//       if (details.responseHeaders[i].name.toLowerCase() == "content-security-policy")
//       {
//           var cspValue = details.responseHeaders[i].value;
//           var entries = cspValue.split(";");
//           for (var j = 0; j < entries.length; j++);
//           {
//               if (entries[j].includes("script-src"))
//               {
//                   // a hack to allow the page to load our injected inline scripts
//                   entries[j] += " 'unsafe-inline'"; 
//               }
//           }

//           details.responseHeaders[i].value = entries.join(";");
          
//       }
//   }

//   return {responseHeaders: details.responseHeaders};

// }, {urls: ['<all_urls>']}, ['responseHeaders']);







  





  
  
  
  
  
  
  
  
  