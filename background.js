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
                const varName = 'chomeTab' + activeInfo.tabId + 'status';
                if (
                    tab.url
                    && tab.url.startsWith('http')
                    && tabTitle.trim().startsWith(prefix.trim())
                ) {
                    const deleteCount = prefix > tabTitle.length ? tabTitle.length : prefix.length;
                    const beginSliceIndex = deleteCount - 1 > 0 ? deleteCount - 1 : 0;
                    const newTitleWithoutPrefix = tabTitle.slice(beginSliceIndex);
                    setTabTitle(activeInfo.tabId, newTitleWithoutPrefix);
                    var object = {};
                    object[varName] = 'Activated';
                    chrome.storage.local.set(object);
                }
            })
        });

        chrome.tabs.onUpdated.addListener((tabId, changeInfo, tabInfo) => {
            const varName = 'chomeTab' + tabId + 'status';
            chrome.storage.local.get([varName], function(value) {
                if (value[varName] != 'Activated') {
                    if (
                        !tabInfo.active
                        && tabInfo.url
                        && tabInfo.url.startsWith('http')
                        && !(tabInfo.title || '').startsWith(prefix)
                    ) {
                        const newTitle = prefix + tabInfo.title;
                        setTabTitle(tabId, newTitle);
                    };
                    var object = {};
                    object[varName] = 'Updated';
                    chrome.storage.local.set(object);
		};
            });
        });
    }
);
