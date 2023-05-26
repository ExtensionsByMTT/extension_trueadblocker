import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./popup.css";

const App: React.FC<{}> = () => {
  const [isActiveYoutube, setIsActiveYoutube] = useState(true);
  const [isActiveTwitch, setIsActiveTwitch] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem("appData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setIsActiveYoutube(parsedData.isActiveYoutube);
      setIsActiveTwitch(parsedData.isActiveTwitch);
    }
  }, []);

  useEffect(() => {
    const dataToStore = { isActiveYoutube, isActiveTwitch };
    localStorage.setItem("appData", JSON.stringify(dataToStore));
  }, [isActiveYoutube, isActiveTwitch]);

  const handleToggleYoutube = () => {
    setIsActiveYoutube(!isActiveYoutube);
    const message = { greeting: !isActiveYoutube };

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      if (activeTab) {
        chrome.tabs.sendMessage(activeTab.id!, message, (response) => {
          if (response && response.farewell) {
            console.log(response.farewell, "hey");
          }
        });
      }
    });
  };

  const handleToggleTwitch = () => {
    setIsActiveTwitch(!isActiveTwitch);
  };

  return (
    <div className="popup">
      <div>
        <h1>Blocks YouTube Ads</h1>
      </div>
      <div>
        <input
          type="checkbox"
          id="youtubeSwitch"
          checked={isActiveYoutube}
          onChange={handleToggleYoutube}
        />
        <label htmlFor="youtubeSwitch">Toggle YouTube</label>
      </div>
      <div>
        <h1>Blocks Twitch Ads</h1>
      </div>
      <div>
        <input
          type="checkbox"
          id="twitchSwitch"
          checked={isActiveTwitch}
          onChange={handleToggleTwitch}
        />
        <label htmlFor="twitchSwitch">Toggle Twitch</label>
      </div>
    </div>
  );
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<App />, root);
