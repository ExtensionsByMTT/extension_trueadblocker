import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./popup.css";

const App: React.FC<{}> = () => {
  return (
    <>
    

      <Loader />
      <Toogle />
    </>
  );
};



const Body = () => {
  return (
    <>
      <div className="list mar">
        <div className="icon_text">
          <div className="svgs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-tv"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM13.991 3l.024.001a1.46 1.46 0 0 1 .538.143.757.757 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.464 1.464 0 0 1-.143.538.758.758 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.464 1.464 0 0 1-.538-.143.758.758 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.46 1.46 0 0 1 .143-.538.758.758 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3h11.991zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z" />
            </svg>
          </div>
          <div className="text">
            <p>Block ads on the site</p>
          </div>
        </div>
        <div className="icon_text ">
          <div className="svgs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          <div className="text">
            <p>Open the filtering log</p>
          </div>
        </div>
        <div className="icon_text ">
          <div className="svgs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-shield-exclamation"
              viewBox="0 0 16 16"
            >
              <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z" />
              <path d="M7.001 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.553.553 0 0 1-1.1 0L7.1 4.995z" />
            </svg>
          </div>
          <div className="text">
            <p>Check website security</p>
          </div>
        </div>
      </div>
    </>
  );
};

const Toogle = () => {
  const [isActiveYoutube, setIsActiveYoutube] = useState(true);
 console.log(isActiveYoutube)
  useEffect(()=>{
   const state= localStorage.getItem("appData");
   
   setIsActiveYoutube(JSON.parse(state));
  },[])



 

  return (
    <div className="popup">
      <div style={{ display: "flex", alignItems: "center", gap: "110px" }}>
        <h3>Blocks YouTube Ads</h3>

       
      </div>

     
    </div>
  );
};

const Loader = () => {
  const [isActiveYoutube, setIsActiveYoutube] = useState(true);

const [isConnecting , setisConnecting] = useState(false)
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
    }, [isActiveYoutube ]);


 //////////////////////////////////

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

/////////////////////////////////


  return (
    <div>
      {isActiveYoutube ? (
        <div className="main" onClick={tunOffAdBlc} >
          <div id="ConnectionButton" className="disconnected">
            <div className="staticOuterCircle"></div>
            <div className="staticInnerCircle"></div>
            <div className="staticBackground"></div>
            <span className="title">Connect</span>
          </div>
        </div>
      ) : (
        <div className="main">
        {isConnecting ? (
          <div className="loading-container">
            <div className="loading"></div>
            <div id="loading-text">Connecting...</div>
          </div>
        ) : (
          <div className="main" onClick={turnOnAdBlc}>
          <div id="ConnectionButton" className="connected" >
            <div className="staticOuterCircle"></div>
            <div className="staticInnerCircle"></div>
            <div className="staticBackground"></div>
            <span className="title">Disconnect</span>
          </div>
          </div>
        )}
      </div>
    )}
  </div>
  );
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<App />, root);
