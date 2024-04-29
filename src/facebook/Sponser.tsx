import Tesseract from "tesseract.js";
//GET THE CURRENT URL AND RUN THE FUNCTION ACCODINGLY
const CURRENT_URL = window.location.href;

export async function FacebookFeedSponser() {
  if (!CURRENT_URL.startsWith("https://www.facebook.com")) return;
  //SIDE SPONSERED ADS
  const sponsoredDivs = document.querySelectorAll('[role="complementary"]');
  if (!sponsoredDivs) return;
  sponsoredDivs.forEach((div) => {
    const targetDiv = div.querySelector(".x1y1aw1k");
    if (targetDiv) {
      const sideSponsorDiv = div.querySelector("span");
      if (sideSponsorDiv) {
        sideSponsorDiv.style.display = "none";
      } else {
        console.log("No span found within targetDiv.");
      }
    } else {
      console.log(
        "No div with class name x1y1aw1k found within sponsoredDivs."
      );
    }
  });
  //USER FEEDSPONSERED POST
  // const handleMutation = (mutationsList, observer) => {
  //   for (const mutation of mutationsList) {
  //     if (mutation.type === "childList" || mutation.type === "attributes") {
  //       processFeedSponser();
  //     }
  //   }
  // };

  // const processFeedSponser = () => {
  //   const feedSponsors = document.querySelectorAll("canvas");
  //   feedSponsors.forEach((canvas) => {
  //     const context = canvas.getContext("2d");
  //     if (context) {
  //       // Convert canvas image data to base64 data URL
  //       const dataUrl = canvas.toDataURL();
  //       // Use Tesseract.js for OCR
  //       Tesseract.recognize(
  //         dataUrl,
  //         "eng", // language
  //         { logger: (m) => console.log(m) } // optional logger callback
  //       ).then(({ data: { text } }) => {
  //         console.log("Extracted Text:", text);
  //       });
  //     }
  //     observer.disconnect();
  //   });
  // };

  // const observer = new MutationObserver(handleMutation);
  // observer.observe(document, {
  //   childList: true,
  //   subtree: true,
  //   attributes: true,
  // });
}
export async function InstagramFeedSponser() {
  if (!CURRENT_URL.startsWith("https://www.instagram.com")) return;
  const handleMutation = (mutationsList, observer) => {
    for (const mutation of mutationsList) {
      if (mutation.type === "childList" || mutation.type === "attributes") {
        processFeedSponsor();
      }
    }
  };

  const processFeedSponsor = () => {
    const spans = document.querySelectorAll("span");
    spans.forEach((span) => {
      if (span.textContent.includes("Sponsored")) {
        const parentElement = span.parentNode;
        if (parentElement && parentElement instanceof HTMLElement) {
          parentElement.style.display = "none";
          // observer.disconnect();
        }
      }
    });
  };

  const observer = new MutationObserver(handleMutation);
  observer.observe(document, {
    childList: true,
    subtree: true,
    attributes: true,
  });
}

export async function SearchFeed() {
  switch (true) {
    case CURRENT_URL.startsWith("https://www.google.com"):
      const handleMutation = (mutationsList, observer) => {
        for (const mutation of mutationsList) {
          if (mutation.type === "childList" || mutation.type === "attributes") {
            processFeedSponsor();
          }
        }
      };

      const processFeedSponsor = () => {
        const spans = document.querySelectorAll("span");
        spans.forEach((span) => {
          if (span.textContent.includes("Sponsored")) {
            const parentElement = span.parentNode;
            if (parentElement && parentElement instanceof HTMLElement) {
              parentElement.style.display = "none";

              // observer.disconnect();
            }
          }
        });
      };

      const observer = new MutationObserver(handleMutation);
      observer.observe(document, {
        childList: true,
        subtree: true,
        attributes: true,
      });

      break;
    case CURRENT_URL === "https://www.bing.com/":
      console.log("Navigated to Bing.");
      break;
    case CURRENT_URL.startsWith("https://www.yahoo.com"):
      const ADSDIV = document.querySelectorAll(
        '[data-content="Advertisement"], .stream-ad ,.searchCenterBottomAds , .searchCenterTopAds'
      );

      ADSDIV.forEach((div) => {
        console.log(div);
        if (div && div instanceof HTMLElement) {
          div.style.display = "none";
        }
      });

      break;
    default:
      console.log("URL not handled.");
      break;
  }
}
