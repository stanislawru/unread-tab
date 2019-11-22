chrome.storage.sync.get
(
  {'prefix': '• '},
  function(items)
  {
    var prefix = items.prefix;
    var title = document.title;
    if (!document['isReadTab_kiUZ19'] && title.startsWith(prefix)) {
      document.title = title.substr(prefix.length, title.length);
      document['isReadTab_kiUZ19'] = true;
    }
  }
);
