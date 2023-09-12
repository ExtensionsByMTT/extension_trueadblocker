import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./popup.css";

const App: React.FC<{}> = () => {
  const [blockedCount, setBlockedCount] = useState(0);

  // chrome.runtime.onMessage.addListener(function (
  //   message,
  //   sender,
  //   sendResponse
  // ) {
  //   if (message.totalBlockedCount) {
  //     setBlockedCount(message.totalBlockedCount);
  //     console.log("Total Blocked Ad : ", message.totalBlockedCount);
  //   }
  // });

  useEffect(() => {
    chrome.storage.local.get("blockedAds", function (result) {
      setBlockedCount(result.blockedAds);
    });
  }, []);

  return (
    <>
      <Loader blockedCount={blockedCount} />
    </>
  );
};

const Loader = ({ blockedCount }) => {
  const [isActiveYoutube, setIsActiveYoutube] = useState(true);

  const [isConnecting, setisConnecting] = useState(false);
  useEffect(() => {
    const storedData = localStorage.getItem("appData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setIsActiveYoutube(parsedData.isActiveYoutube);
    }
  }, []);

  useEffect(() => {
    const dataToStore = { isActiveYoutube };
    localStorage.setItem("appData", JSON.stringify(dataToStore));
  }, [isActiveYoutube]);

  /////////////////////////////////////////////////////////////

  const tunOffAdBlc = () => {
    setIsActiveYoutube(!isActiveYoutube);

    setisConnecting(true);
    setTimeout(() => {
      setisConnecting(false);
      // Code to handle turning on ad blocking
    }, 2000);
    const message = { message: true };
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      if (activeTab) {
        chrome.tabs.sendMessage(activeTab.id!, message, (response) => {
          if (response && response.farewell) {
            console.log(response.farewell, "response");
          }
        });
      }
    });
  };

  const turnOnAdBlc = () => {
    setIsActiveYoutube(!isActiveYoutube);
    const message = { message: false };
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      if (activeTab) {
        chrome.tabs.sendMessage(activeTab.id!, message, (response) => {
          if (response && response.farewell) {
            console.log(response.farewell, "response");
          }
        });
      }
    });
  };

  ////////////////////////////////////////////

  return (
    <>
      {isActiveYoutube === false ? (
        <div className="first-screen">
          <div className="first-screen-titles">
            <h1>TrueAdBlocker</h1>
            <p className="extHeading">
              Connect to Block Ads On Youtube, Twitch, and Malicious ads{" "}
            </p>
          </div>
          <button onClick={tunOffAdBlc} className="connect-btn">
            Connect
          </button>
          <div className="first-screen-logo">
            <p>
              Powered By <br />{" "}
              <span className="powered-by">True AdBlocker</span>
            </p>
          </div>
        </div>
      ) : (
        <div className="main-connecting">
          {isConnecting ? (
            <div className="first-screen">
              <div className="first-screen-titles">
                <h1>TrueAdBlocker</h1>
                <p className="extHeading">
                  It is the best extension where you can enjoy all your videos
                  without unnecessary ads.
                </p>
              </div>
              <div className="connecting">
                <div className="connecting-container">
                  <div className="hourglassCurves"></div>
                  <div className="hourglassCapTop"></div>
                  <div className="hourglassGlassTop"></div>
                  <div className="hourglassSand"></div>
                  <div className="hourglassSandStream"></div>
                  <div className="hourglassCapBottom"></div>
                  <div className="hourglassGlass"></div>
                </div>
              </div>
              <div className="first-screen-logo">
                <p>
                  Powered By <br />{" "}
                  <span className="powered-by">True AdBlocker</span>
                </p>
              </div>
            </div>
          ) : (
            <>
              {isActiveYoutube ? (
                <>
                  <div className="first-screen">
                    <div className="first-screen-titles">
                      <h1>TrueAdBlocker</h1>
                      <p className="extHeading">
                        You can browse and enjoy all your videos without any
                        unnecessary ads.
                      </p>
                    </div>
                    <div className="count">Blocked {blockedCount}+ Ads</div>
                    <button onClick={turnOnAdBlc} className="connected-btn">
                      Stop
                    </button>

                    <div className="first-screen-logo">
                      <p>
                        Powered By <br />{" "}
                        <span className="powered-by">True AdBlocker</span>
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}
            </>
          )}
        </div>
      )}
    </>
  );
};

const root = document.createElement("div");
root.classList.add("true-adblocker-popoup");
document.body.appendChild(root);
ReactDOM.render(<App />, root);
