const addTitleMarker = (prefix) => "document.title = '" + prefix + "' + document.title;";
const removeTitleMarker = (prefix) => "document.title = document.title.substr(" + prefix.length + ", document.title.length);";

chrome.storage.sync.get
(
  {'prefix': '• '},
  (items) => {
   const prefix = items.prefix;

   chrome.tabs.onActivated.addListener((activeInfo) => {
    chrome.tabs.get(activeInfo.tabId, function (tab) {
     if (
       tab.url
       && tab.url.startsWith('http')
       && (tab.title || '').startsWith(prefix)
     ) {
      chrome.tabs.executeScript(activeInfo.tabId, {
       code: removeTitleMarker(prefix)
      })
     }
    })
   });

   chrome.tabs.onUpdated.addListener((tabId, changeInfo, tabInfo) => {
    if (
      changeInfo.status === 'complete'
      && !tabInfo.active
      && tabInfo.url
      && tabInfo.url.startsWith('http')
      && !(tabInfo.title || '').startsWith(prefix)
    ) {
     chrome.tabs.executeScript(tabId, {
      code: addTitleMarker(prefix)
     })
    }
   });
  }
);
