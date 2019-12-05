function handleActivated(activeInfo)
 {
  function onExecuted(result) {}
  chrome.tabs.executeScript(activeInfo.tabId, {file: '/visited.js'}, onExecuted);
 }

chrome.tabs.onActivated.addListener(handleActivated);

function handleUpdated(tabId, changeInfo, tabInfo)
 {
  if (changeInfo.status === 'complete')
   {
    function onExecuted(result) {}
    if (!tabInfo.active) chrome.tabs.executeScript(tabId, {file: '/opened.js'}, onExecuted);
   }
 }

chrome.tabs.onUpdated.addListener(handleUpdated);
