# Change Log

The changes log aka versions history is below in the reverse chronological order (the latest version is at the top).

## Version 1.7.5
* The reliability of the service_worker.js script was improved with the great help of @badrelmers.

## Version 1.7.4
* All the scripts (options.js and service_worker.js) were moved to a dedicated folder (scripts).
* The service_worker.js script was re-written to reflect the API change from chrome.tabs.executeScript to chrome.scripting.executeScript.

## Version 1.7.3
* The background.scripts parameter was changed to background.service_worker in the manifest.

## Version 1.7.2
* The manifest was updated to the version 3.

## Version 1.7.1
* Fix: activated tabs' statuses were stored in the local storage in an unreliable way.

## Version 1.7.0
* Fix: unread mark/prefix is re-added when a read tab is reloaded.
* Fix: unread mark/prefix is not re-added when an unread tab is reloaded.
* ^^^ by that now tabs' un/read statuses are stored not in documents but in the local storage.

## Version 1.6.6
* The extension's logo was replaced with a better one, re-drawn in vector by Diana Kozintseva.

## Version 1.6.5
* Some refactoring.
* Fix: unread marks weren't removed from non-HTML documents.

## Version 1.6.4
* The JS code was re-formatted.
* Right/wrong protocols check for the visited tabs was fixed.

## Version 1.6.3
* The extension's authors list was fixed.
* The code was beautified a little bit.
* Working with chrome:// and chrome-extension:// URLs was fixed.

## Version 1.6.2
* One more fork's advantage was added to its descriptions on the option(s) page.
* The MIT license was added to the GitHub repository.

## Version 1.6.1
* Minor German language mistakes were fixed.

## Version 1.6
* The <b>German language</b> was added to the extension along with keeping the English and Russian ones.
* Minor language mistakes were fixed as well.

## Version 1.5.4
* The given changes log file were created and written for those who read it now. 😊
* The mention of the open-source project and the link to it were added to the options page and the language translations of it.

## Version 1.5.3
* The vector and 96/128 raster icons of the extension were updated to be more accurate.

## Version 1.5.1
* The code was beautified a little bit.
* Internal unread flags were given more unique names in case of conflicts.
* The icons of the extension were updated to differ from the original Adam Grodzki's ones.

## Version 1.5
* Code factoring and optimization were made.
* Unread flags are now stored as separate boolean values and restored even if tabs' titles are automatically changed (e.&nbsp;g. by YouTube).

## Version 1.4
* The project made <b>open-source</b> <a href="https://github.com/stanislawru/unread-tab" target="_blank">at GitHub</a>.
* <b>Options</b> were added to the Chrome extension, particularly, the “<b>Prefix</b>” (for un unread tab's title) option with the default value of “• ”.
* Adam Grodzki's <b>usage surveillance 😮 was removed</b> from the extension.
* The <b>Russian language</b> was added to the extension along with keeping the English one.

## Version 1.3
* <a href="https://chrome.google.com/webstore/detail/unread-tab/ofblopofekndelpkceaodkjcnfacmcfp?hl=ru" target="_blank">The original Unread Tab</a> 1.3 by Adam Grodzki.
