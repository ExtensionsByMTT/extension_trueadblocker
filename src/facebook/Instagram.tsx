import observeMutations from "./Observer";
//GET THE CURRENT URL AND RUN THE FUNCTION ACCODINGLY
const CURRENT_URL = window.location.href;
export async function InstagramFeedSponser() {
  if (!CURRENT_URL.startsWith("https://www.instagram.com")) return;

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
  observeMutations(processFeedSponsor);
}
