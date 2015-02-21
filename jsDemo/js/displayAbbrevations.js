function displayAbbreviations(){
    if(!document.getElementsByTagName||!document.createElement||!document.createTextNode) return false;
    var abbrevations = document.getElementsByTagName("abbr");
    if(abbrevations.length < 1) return false;
    var defs = new Array();
    for(var i = 0; i < abbrevations.length; i++){
        var definition = abbrevations[i].getAttribute("title");
        var key = abbrevations[i].lastChild.nodeValue;
        defs[key] = definition;
    }
    var dlist = document.createElement("dl");
    for(key in defs){
        var definition = defs[key];
        var dtitle = document.createElement("dt");
        var dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        var ddesc = document.createElement("dd");
        var ddesc_text = document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    var header = document.createElement("h1");
    var header_text = document.createTextNode("displayAbbreviations");
    header.appendChild(header_text);
    document.body.appendChild(header);
    document.body.appendChild(dlist);
}
addLoadEvent(displayAbbreviations);

//addLoadEvent(displayAbbrevations);
//
