
////////////////////////////////////////////////

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./contentScript.css";

const App: React.FC<{}> = () => {

  const [first, setFirst] = useState<boolean>();

  useEffect(() => {
    chrome.storage.local.get("isInstalled", function(data) {
      if (data.isInstalled !== undefined) {
setFirst(data.isInstalled);
      }
    });
  }, []);
  
  useEffect(() => {
    setTimeout(() => {
      if (first === true) {
        adAdBlocker();
 
        console.log(first);
      } else if (first === false) {
        removeAdBlocker();
        console.log(first);
      }
    }, 10);
  }, [first]);

  ////////////////// removing YTs ads //////////////////////
  const adAdBlocker = () => {
    console.log("adBlocker running")
  //blocking unwanted ads from some popular websites
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

      const richGridRow = document.getElementsByTagName(
        "ytd-ad-slot-renderer"
      );


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
      if (richGridRow.length > 0) {
        (richGridRow[0] as HTMLElement).style.setProperty("display", "none", "important");;
      }
    };

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
    

   //blocking bannner ads on twitch.tv


  };
///////////injecting normal DOM for showing ads/////////// 
  const removeAdBlocker = () => {
   

    console.log("blockder stoppted");

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


    function img() {
      const aElements = document.getElementsByTagName("img");
  
      for (const aTag of aElements) {
        const alt = aTag.getAttribute("alt");
        if (alt === "Panel Content") {
          aTag.style.setProperty("visibility", "", "important");
        }
      }
    };
    adFunction();
img();

  };

//////////////Spotify Ads-Blocker//////////////





  ////////receiving message from popup.js////////
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message == true) {
      chrome.storage.local.set({ isInstalled: true }, () => {
        console.log("Value is set true");
      });
  window.location.reload();
    } else if (request.message == false) {
      chrome.storage.local.set({ isInstalled: false }, () => {
        console.log("Value is set to false");
      });
      window.location.reload();

    } else {
      return;
    }
  });

//////messsage from background script///////




  return <></>;
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<App />, root);