chrome.storage.sync.get
(
    {'prefix': '• '},
    function (items) {
        var target = document.querySelector('title');
        var prefix = items.prefix;
        var observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                if (!document['isReadTab_kiUZ19'] && !document.title.startsWith(prefix)) document.title = prefix + document.title;
            });
        });
        var config = {childList: true};
        observer.observe(target, config);
        if (!document['isReadTab_kiUZ19']) document.title = prefix + document.title;
    }
);
