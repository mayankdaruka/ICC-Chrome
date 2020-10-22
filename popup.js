// let changeColor = document.getElementById('changeColor')

// chrome.storage.sync.get('color', (data) => {
//    console.log(data)
//    changeColor.style.backgroundColor = data.color
//    changeColor.setAttribute('value', data.color)
// })

// changeColor.onclick = (element) => {
//    let color = element.target.value;
//    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
//      chrome.tabs.executeScript(
//          tabs[0].id,
//          {code: 'document.body.style.backgroundColor = "' + color + '";'}
//       );
//    });
//  };

 let page = document.getElementById('buttonDiv');
 const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];
 constructOptions = (kButtonColors) => {
   for (let item of kButtonColors) {
     let button = document.createElement('button');
     button.style.backgroundColor = item;
     button.addEventListener('click', () => {
       chrome.storage.sync.set({color: item}, () => {
         console.log('color is ' + item);
       })
       chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
         chrome.tabs.executeScript(
             tabs[0].id,
             {code: 'document.body.style.backgroundColor = "' + item + '";'}
          );
       });
     });
     page.appendChild(button);
   }
 }
 constructOptions(kButtonColors);
