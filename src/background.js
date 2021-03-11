const browser = require('webextension-polyfill');

browser.browserAction.onClicked.addListener(async tab => {
    browser.tabs.executeScript({
        file: 'content.js',
    });
    brwoser.tabs.insertCSS({
        file: 'content.css',
    });
});
