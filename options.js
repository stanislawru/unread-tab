document.title = chrome.i18n.getMessage('extensionOptions');

var objects = document.getElementsByTagName('*'), i;
for (i = 0; i < objects.length; i++)
 {
  if (objects[i].dataset && objects[i].dataset.message) {objects[i].innerHTML = chrome.i18n.getMessage(objects[i].dataset.message);};
 };

// https://developer.chrome.com/extensions/options

function loadOptions() {
  chrome.storage.sync.get(
    {'prefix': '• '},
    function(items) {document.getElementById('prefix').value = items.prefix;}
  );
};
document.addEventListener('DOMContentLoaded', loadOptions);

function saveOptions() {
  var prefix = document.getElementById('prefix').value;
  chrome.storage.sync.set(
    {'prefix': prefix},
    function() {
      var status = document.getElementById('status');
      status.textContent = chrome.i18n.getMessage('optionsSaved');
      setTimeout(function() {status.textContent = '';}, 750);
    }
  );
};
document.getElementById('save').addEventListener('click', saveOptions);
