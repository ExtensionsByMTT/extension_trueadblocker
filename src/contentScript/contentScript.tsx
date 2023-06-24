
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
        Twitch();
        console.log(first);
      } else if (first === false) {
        removeAdBlocker();
        console.log(first);
      }
    }, 10);
  }, [first]);

  ////////////////// removing YTs ads //////////////////////
  const adAdBlocker = () => {
    console.log("adBlocker running");
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
      const richGridRowAds = document.getElementsByTagName(
        "ytd-in-feed-ad-layout-renderer"
      );
      const briefAds = document.getElementsByTagName(
        "  iframe"
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
        for (let i = 0; i < richGridRow.length; i++) {
          const adElement = richGridRow[i] as HTMLElement;
          adElement.style.setProperty("display", "none", "important");
        }
      }
      if (richGridRowAds.length > 0) {
        for (let i = 0; i < richGridRowAds.length; i++) {
          const adElement = richGridRowAds[i] as HTMLElement;
          adElement.style.setProperty("display", "none", "important");
        }
      }
      if (briefAds.length > 0) {
        for (let i = 0; i < briefAds.length; i++) {
          const adElement = briefAds[i] as HTMLElement;
          adElement.style.setProperty("display", "none", "important");
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
   
  adFunction();
  }

  
  const Twitch = () => {
    if (typeof window.chrome === 'undefined') {
      return; 
    }
    
    // Get extension settings
    function updateSettings(): void {
      chrome.storage.local.get(['blockingMessageTTV', 'forcedQualityTTV', 'proxyTTV', 'proxyQualityTTV', 'adTimeTTV']).then((result: any) => {
        var settings: any = {
          BannerVisible: true,
          ForcedQuality: null,
          ProxyType: null,
          ProxyQuality: null,
          AdTime: 0
        };
        if (result.blockingMessageTTV === 'true' || result.blockingMessageTTV === 'false') {
          settings.BannerVisible = result.blockingMessageTTV === 'true';
        }
        if (result.forcedQualityTTV) {
          settings.ForcedQuality = result.forcedQualityTTV;
        }
        if (result.proxyTTV) {
          settings.ProxyType = result.proxyTTV;
        }
        if (result.proxyQualityTTV) {
          settings.ProxyQuality = result.proxyQualityTTV;
        }
        if (result.adTimeTTV) {
          settings.AdTime = result.adTimeTTV;
        }
        window.postMessage(
          {
            type: 'SetTwitchAdblockSettings',
            settings: settings,
          },
          '*'
        );
      });
    }
    
    window.addEventListener('message', (event: any) => {
      if (event.data.type && event.data.type == 'SetTwitchAdTime') {
        chrome.storage.local.set({ adTimeTTV: event.data.adtime });
        console.log('Set ad time to ' + event.data.adtime);
      }
    });
    
    function appendBlockingScript(): void {
      const script: HTMLScriptElement = document.createElement('script');
      script.src = chrome.runtime.getURL('../Twitch/remove_video_ads.js');
      script.onload = updateSettings;
      (document.body || document.head || document.documentElement).appendChild(script);
    }
    
    chrome.storage.local.get(['onOffTTV'], (result: any) => {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError);
        appendBlockingScript();
        return;
      }
      if (result?.onOffTTV && result.onOffTTV === 'true') {
        appendBlockingScript();
      }
    });
  };
  




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

  return <></>;
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<App />, root);