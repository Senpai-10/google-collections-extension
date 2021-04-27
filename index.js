document.addEventListener('DOMContentLoaded', () => {
    let previous = document.getElementById("previous").addEventListener("click", () => {
        chrome.tabs.update({url:"https://www.google.com"});
    })

    let next = document.getElementById("next").addEventListener("click", () => {
        chrome.tabs.query({active:true, currentWindow:true},function(tab){
            let url = tab[0].url
            alert(url);
        });
    })
})