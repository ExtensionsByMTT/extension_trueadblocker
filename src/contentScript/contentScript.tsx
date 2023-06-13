
////////////////////////////////////////////////

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./contentScript.css";

const App: React.FC<{}> = () => {

  const [first, setFirst] = useState();
console.log(first,"first")
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message == true) {
    chrome.storage.local.set({ key: "true" }, () => {
      console.log("Value is set true");
    });

  } else if (request.message == false) {
    chrome.storage.local.set({ key: "false" }, () => {
      console.log("Value is set to false");
    });
  } else {
    return;
  }
});


useEffect(()=>{
  chrome.storage.local.get(["key"], (result) => {
    if (result && result.key) {
      setFirst(result.key);
    }
  });
},[first])



  //////////////////YT ad //////////////////////
  //blocking unwanted ads from some popular websites
  const adAdBlocker = () => {
   console.log("gdfjsgfs")
    function otherAds() {
     
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

        // for blocking yt-popUp Ads
        if (
          document.getElementsByClassName(
            "style-scope ytd-rich-grid-row"
          )[0] !== undefined
        ) {
          const richGridRow = document.getElementsByClassName(
            "style-scope ytd-rich-grid-row"
          )[0] as HTMLElement;
          richGridRow.style.display = "none";
        }if(document.getElementsByClassName("style-scope ytd-promoted-sparkles-web-renderer")[0] !== undefined){
          const ytdPromoted=document.getElementsByClassName("style-scope ytd-promoted-sparkles-web-renderer")[0] as HTMLElement;
          ytdPromoted.style.display="none"
        }
      }
    }

    // get the YT Dom
    function getDom() {
   
      const targetNode =
        document.getElementById("movie_player") || document.body;
      selfObserver(targetNode);
    }




// selfObserver for ytADS///
    const selfObserver = (documentNode: HTMLElement) => {
      const observer = new MutationObserver(() => {
        adFunction();
      });

      const config = {
        subtree: true,
        childList: true,
      };

      // Start observing
      observer.observe(documentNode, config);
    };


   
    const adFunction = () => {
 
   
      const mainDocument = document.getElementsByClassName(
        "video-ads ytp-ad-module"
      );
      const playerOverlay = document.getElementsByClassName(
        "ytp-ad-player-overlay"
      );
      const imageOverlay = document.getElementsByClassName(
        "ytp-ad-image-overlay"
      );

      const skipBtn = document.getElementsByClassName(
        "ytp-ad-skip-button ytp-button"
      );

      const videoDocument = document.getElementsByClassName(
        "video-stream html5-main-video"
      );

      const textOverlay = document.getElementsByClassName(
        "ytp-ad-text-overlay"
      );

      const playerAds = document.getElementById("player-ads");

      const handleSkipBtn = () => {
        if (skipBtn.length > 0) {
          (skipBtn[0] as HTMLButtonElement).click();
        }
      };

      if (mainDocument.length > 0) {
        handleSkipBtn();
       
        if (playerOverlay.length > 0) {
       
          (playerOverlay[0] as HTMLElement).style.visibility = "hidden";
          for (let i = 0; i < videoDocument.length; i++) {
            if (
              videoDocument[i] &&
              (videoDocument[i] as HTMLVideoElement).duration
            ) {
              (videoDocument[i] as HTMLVideoElement).currentTime = (
                videoDocument[i] as HTMLVideoElement
              ).duration;
            }
          }
        
          handleSkipBtn();
        }
        if (imageOverlay.length > 0) {
          (imageOverlay[0] as HTMLElement).style.visibility = "hidden";
        }
      }

      if (playerAds) {
        (playerAds as HTMLElement).style.display = "none";
      }

      if (textOverlay.length > 0) {
        (textOverlay[0] as HTMLElement).style.display = "none";
      }
    };

      //blocking bannner ads on twitch.tv

  window.onload = function img() {
    const aElements = document.getElementsByTagName("img");

    for (const aTag of aElements) {
      const alt = aTag.getAttribute("alt");
      if (alt === "Panel Content") {
        aTag.style.setProperty("visibility", "hidden", "important");
      }
    }
  };


    getDom();
    otherAds();
  };

  const removeAdBlocker = () => {
    console.log("ajajajajaja");
    const adFunction = () => {
      const mainDocument = document.getElementsByClassName(
        "video-ads ytp-ad-module"
      );
      const playerOverlay = document.getElementsByClassName(
        "ytp-ad-player-overlay"
      );
      const imageOverlay = document.getElementsByClassName(
        "ytp-ad-image-overlay"
      );

      const skipBtn = document.getElementsByClassName(
        "ytp-ad-skip-button ytp-button"
      );

      const videoDocument = document.getElementsByClassName(
        "video-stream html5-main-video"
      );

      const textOverlay = document.getElementsByClassName(
        "ytp-ad-text-overlay"
      );

      const playerAds = document.getElementById("player-ads");

      const handleSkipBtn = () => {
        if (skipBtn.length > 0) {
          (skipBtn[0] as HTMLButtonElement).click();
        }
      };

      if (mainDocument.length > 0) {
        handleSkipBtn();
        if (playerOverlay.length > 0) {
          (playerOverlay[0] as HTMLElement).style.setProperty(
            "visibility",
            "visible",
            "important"
          );
          for (let i = 0; i < videoDocument.length; i++) {
            if (
              videoDocument[i] &&
              (videoDocument[i] as HTMLVideoElement).duration
            ) {
              (videoDocument[i] as HTMLVideoElement).currentTime = (
                videoDocument[i] as HTMLVideoElement
              ).duration;
            }
          }
          handleSkipBtn();
        }
        if (imageOverlay.length > 0) {
          (imageOverlay[0] as HTMLElement).style.setProperty(
            "visibility",
            "visible",
            "important"
          );
        }
      }

      if (playerAds) {
        (playerAds as HTMLElement).style.setProperty(
          "display",
          "block",
          "important"
        );
      }

      if (textOverlay.length > 0) {
        (textOverlay[0] as HTMLElement).style.setProperty(
          "display",
          "block",
          "important"
        );
      }
    };
    adFunction()
  };


  useEffect(()=>{
    if(first === "true"){
      adAdBlocker()
    }else if(first === "false"){
     removeAdBlocker()
    }
  },[first])
  



  //////////////////YT ad //////////////////////
  return <></>;
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<App />, root);