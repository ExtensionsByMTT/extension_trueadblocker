////////////////////////////////////////////////
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./contentScript.css";
var getUrl=window.location.href
const App: React.FC<{}> = () => {
  const website = [
    {
      id: 1,
      url: "https://www.youtube.com/",
    },

    {
      id: 2,
      url: "https://open.spotify.com/",
    },
    {
      id: 3,
      url: "https://www.twitch.tv/",
    }
   
  ];
  useEffect(() => {
    let isMatched = false; 
    for (let i = 0; i < website.length; i++) {
      if (getUrl.startsWith(website[i].url)) {
        isMatched = true; 
        break;
      }
    }
    
    if (!isMatched) {
    
      chrome.storage.local.remove("blockedAds",function() {
        console.log("User is not on any of the specified websites.");
       });
    }
  }, [getUrl]);
  
  
  

  return <></>;
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<App />, root);
