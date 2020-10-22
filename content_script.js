// chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
//    chrome.tabs.executeScript(
//        tabs[0].id,
//        {code: 'document.body.style.backgroundColor = "' + item + '";'}
//     );
//  });

document.body.style.backgroundColor = '#c0f3ff'


let element = document.querySelector("#sports-app > div > div:nth-child(2) > div > div")
let IPL_elem = document.querySelector("#sports-app > div > div:nth-child(3) > div > table > tbody > tr:nth-child(1) > td:nth-child(2) > div")
if (element)
   element.innerHTML = element.innerHTML + "<div>This is yonx editing the IPL board for fun!</div>"

if (IPL_elem)
   // var IPL_elem_attr = IPL_elem.getAttribute('style')
   // if (!IPL_elem_attr)
   //    IPL_elem_attr = {}
   // IPL_elem_attr['background-color'] = 'yellow'
   IPL_elem.setAttribute('style', "background-color:yellow")
