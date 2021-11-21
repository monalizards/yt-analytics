// helper functiono to extract number from string
const getNumberFromString = (str) => {
  return Number.parseInt(str.replace(/\D/g, ""));
};

// main function
const analyse = () => {
  // extract number of likes from page
  const buttons = document.querySelectorAll("button");
  const likeButton = Array.from(buttons).find(
    (button) => button.ariaLabel && button.ariaLabel.includes("like this video")
  );
  const likeCount = getNumberFromString(likeButton.ariaLabel);

  //   extract number of views from page
  const viewElement = document.querySelector(".view-count");
  const viewCount = getNumberFromString(viewElement.innerText);

  //   calculate like/view ratio
  const lvRatio = ((likeCount / viewCount) * 100).toFixed(2);

  //   return result
  const message = `Like/View ratio: ${lvRatio}%`;

  return message;
};

// listen for popup.js's request
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  sendResponse({ message: analyse() });
});
