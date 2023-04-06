async function fetchJson(url) {
    const response = await fetch(url);
    return await response.json();
}

function getRsdbInfoById(rsdbData, id){
    id = Number(id);
    for(var i = 0; i < rsdbData.length; i++){
      if(rsdbData[i]["Id"] == id) return rsdbData[i];
    }
}
  
function getElementByRsdbId(className, rsdbId){
    rsdbId = String(rsdbId);
    var elements = document.getElementsByClassName(className);
    for(var i = 0; i < elements.length; i++){
      if(elements[i].getAttribute("rsdb_id") == rsdbId) return elements[i];
    }
}

function downloadFile(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}