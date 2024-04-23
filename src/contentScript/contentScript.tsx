////////////////////////////////////////////////
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./contentScript.css";
import axios from "axios";
var getUrl = window.location.href;
const App: React.FC<{}> = () => {
  const [offSwitch, setoffSwitch] = useState<boolean>();

  useEffect(() => {
    chrome.storage.local.get("ExtensionState", function (data) {
      if (data.ExtensionState !== undefined) {
        setoffSwitch(data.ExtensionState);
      }
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (offSwitch === true) {
        adAdBlocker();
        console.log(offSwitch);
      } else if (offSwitch === false) {
        removeAdBlocker();
        console.log(offSwitch);
      }
    }, 10);
  }, [offSwitch]);

  ////////////////////////////////////////////////////

  function adAdBlocker() {
    const divs = document.getElementsByTagName("div");
    for (const div of divs) {
      // console.log("filter function loop is running");
      const classesToCheck = [
        "ad",
        "promo",
        "banner",
        "GoogleActiveViewElement",
        "desktopAd",
      ];
      if (
        classesToCheck.some((className) => div.classList.contains(className))
      ) {
        div.style.display = "none";
        // console.log("div blocked");
      }
    }
  }

  function removeAdBlocker() {
    const divs = document.getElementsByTagName("div");
    for (const div of divs) {
      // console.log("filter function loop is running");
      const classesToCheck = [
        "ad",
        "promo",
        "banner",
        "GoogleActiveViewElement",
        "desktopAd",
      ];
      if (
        classesToCheck.some((className) => div.classList.contains(className))
      ) {
        div.style.display = "block";
        // console.log("div blocked");
      }
    }
  }

  ////////receiving message from popup.js////////
  chrome.runtime.onMessage.addListener(function (
    request,
    sender,
    sendResponse
  ) {
    if (request.message == true) {
      chrome.storage.local.set({ ExtensionState: true }, () => {
        console.log("Value is set true");
      });
      window.location.reload();
    } else if (request.message == false) {
      chrome.storage.local.set({ ExtensionState: false }, () => {
        console.log("Value is set to false");
      });
      window.location.reload();
    } else {
      return;
    }
    sendResponse({ farewell: "Response from background script" });
  });

  return (
    <>
    
    </>
  );
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<App />, root);
