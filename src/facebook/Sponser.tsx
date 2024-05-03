import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { FacebookFeedSponser } from "./Facebook";
import { InstagramFeedSponser } from "./Instagram";
import { SearchFeed } from "./AllSearchFeed";
const App: React.FC<{}> = () => {
  const [DOM, setDOM] = useState(false);

  useEffect(() => {
    // chrome.runtime.sendMessage({ action: "DOMSTATUS" });
    // chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    //   if (request.action === "DOMLOADED") {
    //     console.log(request.action);
    //   }
    // });

    chrome.storage.local.get("DOMLOAD", function (result) {
      if (result.DOMLOAD === true) {
        setDOM(true);
        facebookBlocker();
      } else return;
    });
  }, []);

  async function facebookBlocker() {
    FacebookFeedSponser();
    SearchFeed();
    InstagramFeedSponser();
  }

  return <></>;
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<App />, root);
