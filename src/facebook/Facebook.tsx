import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import {
  FacebookFeedSponser,
  SearchFeed,
  InstagramFeedSponser,
} from "./Sponser";
const App: React.FC<{}> = () => {
  const [DOM, setDOM] = useState(false);

  useEffect(() => {
    chrome.storage.local.get("DOMLOAD", function (result) {
      if (result.DOMLOAD === true) {
        setDOM(true);
        facebookBlocker();
      }
    });
  }, []);

  async function facebookBlocker() {
    // FeedSponser();
    SearchFeed();
    InstagramFeedSponser();
  }

  return <></>;
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<App />, root);
