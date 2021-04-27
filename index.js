document.addEventListener('DOMContentLoaded', () => {
    function updateURLParameter(url, param, paramVal){
        var newAdditionalURL = "";
        var tempArray = url.split("?");
        var baseURL = tempArray[0];
        var additionalURL = tempArray[1];
        var temp = "";
        if (additionalURL) {
            tempArray = additionalURL.split("&");
            for (var i=0; i<tempArray.length; i++){
                if(tempArray[i].split('=')[0] != param){
                    newAdditionalURL += temp + tempArray[i];
                    temp = "&";
                }
            }
        }
    
        var rows_txt = temp + "" + param + "=" + paramVal;
        return baseURL + "?" + newAdditionalURL + rows_txt;
    }
    
    
    let previous = document.getElementById("previous").addEventListener("click", () => {
        chrome.tabs.update({url:"https://www.google.com"})
    })

    let next = document.getElementById("next").addEventListener("click", () => {
        chrome.tabs.query({active:true, currentWindow:true},function(tab){
            let url = tab[0].url
            const params = new URL(url).searchParams;
            let pagenumber = params.get("pageNumber")

            chrome.tabs.update({url: updateURLParameter(url, "pageNumber", parseInt(pagenumber)+1)})
        });
    })
})