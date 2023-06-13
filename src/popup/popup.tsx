import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./popup.css";

const App: React.FC<{}> = () => {
  return (
    <>
    

      <Loader />
   
    </>
  );
};






/////////////////////////animatedcircel///////////////////////////

const AnimatedCircle = () => {
  return (
    <>
     <Header/>
    
      <section className="main-container">
        <div className="animated-main ">
          <div className="big-circle">
            <div className="icon-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-gear-wide-connected"
                viewBox="0 0 16 16"
              >
                <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434l.071-.286zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5zm0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78h4.723zM5.048 3.967c-.03.021-.058.043-.087.065l.087-.065zm-.431.355A4.984 4.984 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8 4.617 4.322zm.344 7.646.087.065-.087-.065z" />
              </svg>
            </div>
            <div className="icon-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-file-lock"
                viewBox="0 0 16 16"
              >
                <path d="M8 5a1 1 0 0 1 1 1v1H7V6a1 1 0 0 1 1-1zm2 2.076V6a2 2 0 1 0-4 0v1.076c-.54.166-1 .597-1 1.224v2.4c0 .816.781 1.3 1.5 1.3h3c.719 0 1.5-.484 1.5-1.3V8.3c0-.627-.46-1.058-1-1.224zM6.105 8.125A.637.637 0 0 1 6.5 8h3a.64.64 0 0 1 .395.125c.085.068.105.133.105.175v2.4c0 .042-.02.107-.105.175A.637.637 0 0 1 9.5 11h-3a.637.637 0 0 1-.395-.125C6.02 10.807 6 10.742 6 10.7V8.3c0-.042.02-.107.105-.175z" />
                <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
              </svg>
            </div>
            <div className="icon-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-pc"
                viewBox="0 0 16 16"
              >
                <path d="M5 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H5Zm.5 14a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm2 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1ZM5 1.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5ZM5.5 3h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1Z" />
              </svg>
            </div>
            <div className="icon-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-key"
                viewBox="0 0 16 16"
              >
                <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z" />
                <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
            </div>
          </div>
          <div className="circle">
            <div className="icon-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-pc-display-horizontal"
                viewBox="0 0 16 16"
              >
                <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10H6v1H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5v-1h4.5A1.5 1.5 0 0 0 16 8.5v-7A1.5 1.5 0 0 0 14.5 0h-13Zm0 1h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5ZM12 12.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0ZM1.5 12h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1ZM1 14.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 1 1 0 .5h-5.5a.25.25 0 0 1-.25-.25Z" />
              </svg>
            </div>
            <div className="icon-block">
              <img
                src="https://ucarecdn.com/2323ebfc-5b14-47ae-959a-191e82d0103a/blockchainicon.png"
                alt="blockchain icon"
              />
            </div>
            <div className="icon-block">
              <img
                src="https://ucarecdn.com/5e4802ac-8684-41f3-8657-1e0834d07abe/arvricon.png"
                alt="ar-vr icon"
              />
            </div>
            <div className="icon-block">
              <img
                src="https://ucarecdn.com/61a82adc-7eef-4e50-a7d5-8e11ef76ff31/artificialintelligenceicon.png"
                alt="artificial intelligence icon"
              />
            </div>
          </div>
          <div className="center-logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-shield-fill-plus"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm-.5 5a.5.5 0 0 1 1 0v1.5H10a.5.5 0 0 1 0 1H8.5V9a.5.5 0 0 1-1 0V7.5H6a.5.5 0 0 1 0-1h1.5V5z"
              />
            </svg>
          </div>
        </div>
        
      </section>
      <div style={{marginTop:"25px"}}><h3 className="extHeading" style={{fontSize: "15px"}}>Your are safe from Youtube,Twitch,And Malicious ads</h3>
      <h3 className="extHeading">Keep Browsing </h3></div>
    </>
  );
};





const Header=(props)=>{
  return(
    <div className="header">
      
<div><img src="./TrueAdBlocker128x128.png" alt="" height="80px"/></div>
<div><h1>{props.title}</h1></div>
    </div>
  )
}


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
      <>
        <Header title="TrueAdBlocker"/>
        <div style={{marginTop:"45px"}}><h3 className="extHeading" style={{fontSize: "25px"}}>Connect to Block Ads On</h3>
      <h2 className="extHeading">Youtube,Twitch,And Malicious ads </h2></div>
        <div className="main" onClick={tunOffAdBlc}>
          <div id="ConnectionButton" className="disconnected">
            
            <div className="staticOuterCircle"></div>
            <div className="staticInnerCircle"></div>
            <div className="staticBackground"></div>
            <span className="title">Connect</span>
          </div>
        </div></>
      ) : (
        <div className="main-connecting">
          {isConnecting ? (
            
              <div className="loading-container">
              <div className="loading"></div>
              <div id="loading-text">Connecting...</div>
          
            </div>
          ) : (
            <>
            
      <div className="main-dis">
      <div className="main-disconnect">
             
             
             <div
               id="ConnectionButton"
               className="connected"
               onClick={turnOnAdBlc}
             >
               <div className="staticOuterCircle"></div>
               <div className="staticInnerCircle"></div>
               <div className="staticBackground"></div>
               <span className="title">Stop</span>
             </div>
           </div>
      
           <div className="features">
           <AnimatedCircle/>
      <div style={{padding:"0px 10px 0px 10px"}}>       <div className="youtube">
               <h4>YouTube</h4>
               <span><img src="./youtube.png"></img> </span>
             </div>
             <div className="twitch">
               <h4>Twitch</h4>
               <span><img src="./twitch.png"></img> </span>
             </div>
             <div className="twitch">
               <h4>malicious ads</h4>
               <span><img src="./malicious.png"></img> </span>
             </div></div>
           </div>
      </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<App />, root);