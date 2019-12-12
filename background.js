const setPageTitleClientScript = (title) => "document.title = '" + title + "';";
const setTabTitle = (tabId, newTitle) => chrome.tabs.executeScript(tabId, {
    code: setPageTitleClientScript(newTitle)
});

chrome.storage.sync.get
(
    {'prefix': '• '},
    (items) => {
        const prefix = items.prefix;

        chrome.tabs.onActivated.addListener((activeInfo) => {
            chrome.tabs.get(activeInfo.tabId, function (tab) {
                const tabTitle = tab.title || '';
                if (
                    tab.url
                    && tab.url.startsWith('http')
                    && tabTitle.trim().startsWith(prefix.trim())
                ) {
                    const deleteCount = prefix > tabTitle.length ? tabTitle.length : prefix.length;
                    const beginSliceIndex = deleteCount - 1 > 0 ? deleteCount - 1 : 0;
                    const newTitleWithoutPrefix = tabTitle.slice(beginSliceIndex);
                    setTabTitle(activeInfo.tabId, newTitleWithoutPrefix);
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
                const newTitle = prefix + tabInfo.title;
                setTabTitle(tabId, newTitle);
            }
        });
    }
);
