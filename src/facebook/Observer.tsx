export default function observeMutations(callback) {
  const handleMutation = (mutationsList, observer) => {
    for (const mutation of mutationsList) {
      if (mutation.type === "childList" || mutation.type === "attributes") {
        callback();
      }
    }
  };
  const observer = new MutationObserver(handleMutation);
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
  });

  return observer;
}

