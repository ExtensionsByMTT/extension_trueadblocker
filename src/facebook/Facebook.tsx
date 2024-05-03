import observeMutations from "./Observer";
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
  const processFeedSponsor = () => {
    const feedPostType = document.querySelectorAll('div[role="main"]');
    const spanTexts = new Set();
    // First, gather all text content from span elements inside strong elements
    feedPostType.forEach((element) => {
      if (element && element instanceof HTMLElement) {
        const postParentDivs = element.querySelectorAll(".x1lliihq");
        postParentDivs.forEach((div) => {
          const strongElementsInDiv = div.querySelectorAll("strong");
          strongElementsInDiv.forEach((strongElement) => {
            const spanElements = strongElement.querySelectorAll("span");
            spanElements.forEach((span) => {
              if (span && span instanceof HTMLElement) {
                spanTexts.add(span.textContent.trim());
                postParentDivs.forEach((div) => {
                  const imageElementsInDiv = div.querySelectorAll("img");
                  let hasMatchingImage = false;
                  imageElementsInDiv.forEach((image) => {
                    if (image && image instanceof HTMLElement) {
                      if (
                        image.naturalWidth > 300 &&
                        image.naturalHeight > 300
                      ) {
                        const imageAlt = image.getAttribute("alt");
                        if (imageAlt && spanTexts.has(imageAlt.trim())) {
                          hasMatchingImage = true;
                          console.log(spanTexts);
                        }
                      }
                    }
                  });
                  if (hasMatchingImage) {
                    console.log("Hiding div with id:", div);
                    (div as HTMLElement).remove();
                  }
                });
              }
            });
          });
        });
      }
    });

    //CASE FOR SAME HEADING AND ALT






    // feedPostType.forEach((element) => {
    //   if (element && element instanceof HTMLElement) {
    //     const postParentDivs = element.querySelectorAll(".x1lliihq");
    //   }
    // });
  };

  observeMutations(processFeedSponsor);
}
