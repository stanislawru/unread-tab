function handleActivated(activeInfo) {
    function onExecuted(result) {
    }
    chrome.tabs.get(activeInfo.tabId, function (tab) {
        if (tab.url) if (tab.url.startsWith('http')) chrome.tabs.executeScript(activeInfo.tabId, {file: '/visited.js'}, onExecuted);
    })
}

chrome.tabs.onActivated.addListener(handleActivated);

function handleUpdated(tabId, changeInfo, tabInfo) {
    if (changeInfo.status === 'complete') {
        function onExecuted(result) {
        }
        if (tabInfo.url) if ((!tabInfo.active) && tabInfo.url.startsWith('http')) chrome.tabs.executeScript(tabId, {file: '/opened.js'}, onExecuted);
    }
}

chrome.tabs.onUpdated.addListener(handleUpdated);
