// send request to content.js
const requestAnalysis = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, "analyse", setResult);
  });
};

// inject result into popup.html
const setResult = (result) => {
  if (result) {
    document.querySelector("#result").innerText = result.message;
  }
};

requestAnalysis();
