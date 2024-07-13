import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import adsCount from "../contentScript/AdsCount";

const App: React.FC<{}> = () => {
  const [extensionState, setExtensionState] = useState();
  useEffect(() => {
    chrome.storage.local.get("ExtensionState", function (result) {
      if (result.ExtensionState !== undefined) {
        setExtensionState(result.ExtensionState);
      }
    });
    if (extensionState === true) {
      YtAdblocker();
    }
  }, [extensionState]);

  function YtAdblocker() {

    const adblocker = true;
    const removePopup = false;
    // const updateCheck = true;
    // const debugMessages = true;
    // const updateModal = {
    //   enable: true,
    //   timer: 5000,
    // };
    let currentUrl = window.location.href;
    let isAdFound = false;
    let adLoop = 0;
    let hasIgnoredUpdate = false;
    // console.log("Script started");
    if (adblocker) removeAds();
    if (removePopup) popupRemover();

    function popupRemover() {
      setInterval(() => {
        const modalOverlay = document.querySelector(
          "tp-yt-iron-overlay-backdrop"
        );
        const popup = document.querySelector(
          ".style-scope ytd-enforcement-message-view-model"
        );
        const popupButton = document.getElementById("dismiss-button");

        var video = document.querySelector("video");

        const bodyStyle = document.body.style;
        bodyStyle.setProperty("overflow-y", "auto", "important");

        if (modalOverlay) {
          modalOverlay.removeAttribute("opened");
          modalOverlay.remove();
        }
        if (popup) {
          // console.log("Popup detected, removing...");
          if (popupButton) popupButton.click();
          popup.remove();
          video.play();

          setTimeout(() => {
            video.play();
          }, 500);
          // console.log("Popup removed");
        }
        if (!video.paused) return;
        video.play();
      }, 1000);
    }
    function removeAds() {

      var videoPlayback = 1;
      setInterval(() => {
        var video = document.querySelector("video");
        const ad = [...document.querySelectorAll(".ad-showing")][0];
        if (window.location.href !== currentUrl) {
          currentUrl = window.location.href;
          removePageAds();
        }

        if (ad) {
          isAdFound = true;
          adLoop = adLoop + 1;
          if (adLoop < 10) {
            const openAdCenterButton = document.querySelector(
              ".ytp-ad-button-icon"
            ) as HTMLElement | null;
            openAdCenterButton?.click();

            const blockAdButton = document.querySelector(
              '[label="Block ad"]'
            ) as HTMLElement | null;
            blockAdButton?.click();

            const blockAdButtonConfirm = document.querySelector(
              '.Eddif [label="CONTINUE"] button'
            ) as HTMLElement | null;
            blockAdButtonConfirm?.click();

            const closeAdCenterButton = document.querySelector(
              ".zBmRhe-Bz112c"
            ) as HTMLElement | null;
            closeAdCenterButton?.click();
            const clickSkipButton = document.querySelector(
              ".ytp-ad-skip-button-modern"
            ) as HTMLElement | null;
            console.log(clickSkipButton,"Skiped Skip Button")
            clickSkipButton?.click();
          } else {
            if (video) video.play();
          }

          const popupContainer = document.getElementById(
            "popupContainer"
          ) as HTMLElement | null;

          if (popupContainer)
            if (popupContainer.style.display == "")
              popupContainer.style.display = "none";
          // console.log("Found Ad");
          const skipButtons = [
            "ytp-ad-skip-button-container",
            "ytp-ad-skip-button-modern",
            ".videoAdUiSkipButton",
            ".ytp-ad-skip-button",
            ".ytp-ad-skip-button-modern",
            ".ytp-ad-skip-button",
            ".ytp-ad-skip-button-slot",
            ".ytp-ad-text"
          ];
          if (video) {
            video.playbackRate = 8.0;
            video.volume = 0;
            skipButtons.forEach((selector) => {
              const elements = document.querySelectorAll(selector);
              if (elements && elements.length > 0) {
              console.log(elements,"Elements Found")
                elements.forEach((element) => {
                  (element as HTMLElement).click();
                });
              }
            });
            video.play();
            let randomNumber = Math.random() * (0.5 - 0.1) + 0.1;
            video.currentTime = (video.duration + randomNumber)||0;
            if (video.currentTime === video.duration) {
              adsCount(Promise.resolve(1));
            }
          }

          console.log("skipped Ad");
        } else {
          if (video && video?.playbackRate == 8.0) {
            video.playbackRate = videoPlayback;
          }
          if (isAdFound) {
            isAdFound = false;
            if (videoPlayback == 8.0) videoPlayback = 1;
            if (video && isFinite(videoPlayback))
              video.playbackRate = videoPlayback;
            adLoop = 0;
          } else {
            if (video) videoPlayback = video.playbackRate;
          }
        }
      }, 50);

      removePageAds();
    }

    function removePageAds() {
      const sponsor = document.querySelectorAll(
        "div#player-ads.style-scope.ytd-watch-flexy, div#panels.style-scope.ytd-watch-flexy"
      );
      const style = document.createElement("style");

      style.textContent = `
              ytd-action-companion-ad-renderer,
              ytd-display-ad-renderer,
              ytd-video-masthead-ad-advertiser-info-renderer,
              ytd-video-masthead-ad-primary-video-renderer,
              ytd-in-feed-ad-layout-renderer,
              ytd-ad-slot-renderer,
              yt-about-this-ad-renderer,
              yt-mealbar-promo-renderer,
              ytd-statement-banner-renderer,
              ytd-ad-slot-renderer,
              ytd-in-feed-ad-layout-renderer,
              ytd-banner-promo-renderer-background
              statement-banner-style-type-compact,
              .ytd-video-masthead-ad-v3-renderer,
              div#root.style-scope.ytd-display-ad-renderer.yt-simple-endpoint,
              div#sparkles-container.style-scope.ytd-promoted-sparkles-web-renderer,
              div#main-container.style-scope.ytd-promoted-video-renderer,
              div#player-ads.style-scope.ytd-watch-flexy,
              ad-slot-renderer,
              ytm-promoted-sparkles-web-renderer,
              masthead-ad,
              tp-yt-iron-overlay-backdrop,
  
              #masthead-ad {
                  display: none !important;
              }
          `;

      document.head.appendChild(style);
      sponsor?.forEach((element) => {
        if (element.getAttribute("id") === "rendering-content") {
          const htmlElement = element as HTMLElement;
          htmlElement.childNodes?.forEach((childElement) => {
            if (
              childElement instanceof Element &&
              childElement.getAttribute("data-target-id") &&
              childElement.getAttribute("data-target-id") !==
                "engagement-panel-macro-markers-description-chapters"
            ) {
              htmlElement.style.display = "none";
            }
          });
        }
      });
    }
  }

  return <></>;
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<App />, root);
