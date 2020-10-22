let rule = {
   conditions: [
      new chrome.declarativeContent.PageStateMatcher({
         pageUrl: { hostEquals: 'www.google.com', schemes: ['http', 'https'] }
      })
   ],
   actions: [ new chrome.declarativeContent.ShowPageAction() ]
}

chrome.runtime.onInstalled.addListener(() => {
   chrome.storage.sync.set({ color: "#3aa757" }, () => console.log("The color is green."))
   chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
      chrome.declarativeContent.onPageChanged.addRules([rule])
   })
})