// chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
//    chrome.tabs.executeScript(
//        tabs[0].id,
//        {code: 'document.body.style.backgroundColor = "' + item + '";'}
//     );
//  });

document.body.style.backgroundColor = 'yellow'


let element = document.querySelector("#sports-app > div > div:nth-child(2) > div > div")
element.innerHTML = "<div>hello</div>"