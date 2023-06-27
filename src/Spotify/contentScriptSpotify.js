chrome.storage.local.get("isInstalled", function(data) {
  const local = data.isInstalled;
  doSomethingWithLocal(local);
});

function doSomethingWithLocal(local){
  if(local === true){
    const injectScript = function (filename) {
      const s = document.createElement("script");
      s.src = chrome.runtime.getURL(filename);
      s.onload = function () {
        this.remove();
      };
      (document.head || document.documentElement).appendChild(s);
    };
    
    ["adswsHooksSpotify.js", "adsAdsRemoveSpotify.js", "adsSweetalertSpotify.js"].forEach(injectScript);
    
  }else{
    return
  }
}