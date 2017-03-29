chrome.tabs.onUpdated.addListener(function (tabId, change, tab) {
  if (tab.url == undefined) {
    return;
  } else if (tab.url.match(/http:\/\/video\.friday\.tw\/movie\/detail\/*/) !== null) {
    chrome.browserAction.setIcon({path: 'icon/icon-fr.png', tabId: tabId});
  } else if (tab.url.match(/http:\/\/www\.catchplay\.com/) !== null) {
    chrome.browserAction.setIcon({path: 'icon/icon-cp.png', tabId: tabId});
  }
});