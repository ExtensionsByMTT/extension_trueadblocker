
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
        Spotify();
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
      window.onload = function img() {
        const aElements = document.getElementsByTagName("img");
    
        for (const aTag of aElements) {
          const alt = aTag.getAttribute("alt");
          if (alt === "Panel Content") {
            aTag.style.setProperty("visibility", "hidden", "important");
          }
        }
      };
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

  }
  //////////////Spotify Ads-Blocker//////////////
  function Spotify(){
console.log("spotify")
    injectFunctionInstantly(startInterceptingWebScoket);
  injectOtherScripts();
  
  function injectFunctionInstantly(injectedFunction: () => void): void {
    const script = document.createElement('script');
    const functionText = injectedFunction.toString();
    script.textContent = functionText.substring(
      functionText.indexOf('{') + 1,
      functionText.length - 1
    );
  
    (document.body || document.head || document.documentElement).appendChild(script);
  }
  
  async function injectOtherScripts() {
    await injectScript('../injected/ads_removal.js');
    await injectScript('../lib/sweetalert.min.js');
  }
  
  
  function injectScript(scriptName: string): Promise<boolean> {
  
    return new Promise<boolean>((resolve, reject) => {
      const script = document.createElement('script');
      script.src = chrome.runtime.getURL(scriptName);
      script.onload = function (this: HTMLElement) {
        this.parentNode?.removeChild(this);
        resolve(true);
      };
      (document.body || document.head || document.documentElement).appendChild(script);
    });
  }
  
  
  
  function startInterceptingWebScoket(): void {
  
  const wsHook: any = {};
  
    (function () {
      const before = (data: any, url: string) => {
        return new Promise((resolve, reject) => {
          resolve(data);
        });
      };
      const after = (e: any, url: string) => {
        return e;
      };
      wsHook.resetHooks = () => {
        wsHook.before = before;
        wsHook.after = after;
      };
  
      const _WS = WebSocket;
      // @ts-ignore
      WebSocket = function (url: string, protocols?: string | string[]) {
        let WSObject: WebSocket;
        this.url = url;
        this.protocols = protocols;
        if (!this.protocols) WSObject = new _WS(url);
        else WSObject = new _WS(url, protocols);
  
        const _send = WSObject.send;
        const _wsobject = this;
        wsHook._send = WSObject.send = function (data: any) {
          //data = wsHook.before(data, WSObject.url) || data;
          new wsHook.before(data, WSObject.url)
            .then(function (newData: any) {
              if (newData != null) _send.apply(WSObject, [newData]);
            })
            .catch(function (e: any) {
              console.error(e);
              _send.apply(WSObject, [data]);
            });
        };
  
        // Events needs to be proxied and bubbled down.
        let onmessageFunction: any;
        Object.defineProperty(WSObject, 'onmessage', {
          set: function (func: any) {
            onmessageFunction = wsHook.onMessage = func;
          },
        });
        WSObject.addEventListener('message', function (event: any) {
          if (!onmessageFunction) {
            console.log('warning: no onmessageFunction');
            return;
          }
  
          wsHook
            .after(new MutableMessageEvent(event), this.url)
            .then(function (modifiedEvent: any) {
              if (modifiedEvent != null)
                onmessageFunction.apply(this, [modifiedEvent]);
            })
            .catch(function (e: any) {
              console.error(e);
              onmessageFunction.apply(this, [event]);
            });
  
          //e = new MessageEvent(e.type, e);
        });
  
        return WSObject;
      };
    })();
  }
  
  
    // Mutable MessageEvent.
    // Subclasses MessageEvent and makes data, origin and other MessageEvent properites mutatble.
    function MutableMessageEvent(o: any) {
      this.bubbles = o.bubbles || false;
      this.cancelBubble = o.cancelBubble || false;
      this.cancelable = o.cancelable || false;
      this.currentTarget = o.currentTarget || null;
      this.data = o.data || null;
      this.defaultPrevented = o.defaultPrevented || false;
      this.eventPhase = o.eventPhase || 0;
      this.lastEventId = o.lastEventId || '';
      this.origin = o.origin || '';
      this.path = o.path || [];
      this.ports = o.parts || [];
      this.returnValue = o.returnValue || true;
      this.source = o.source || null;
      this.srcElement = o.srcElement || null;
      this.target = o.target || null;
      this.timeStamp = o.timeStamp || null;
      this.type = o.type || 'message';
  
      Object.setPrototypeOf(this, MessageEvent.prototype);
    }
  
  
  document.addEventListener('updateCounter', function (e: Event) {
  
    // type assertion to access the 'detail' property
    const eventWithDetail = e as CustomEvent;
    const counterValue = JSON.parse(eventWithDetail.detail);
    chrome.runtime.sendMessage({ name: 'updateCounter', counterValue: counterValue });
  });
   }
  
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