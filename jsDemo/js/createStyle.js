function styleHeadSibling(){
    var header = document.getElementsByTagName("h1");
    for(var i = 0; i < header.length; i++){
        var elem = getNextElement(header[i].nextSibling);
        addClassName(elem,"info");
    }
}
function getNextElement(node){
    if(node.nodeType == 1){
        return node;
    }
    if(node.nextSibling){
        return getNextElement(node.nextSibling);
    }
    return null;
}
function addClassName(element,value){
    if(!element.className){
        element.className = value;
    }else{
        newClassName = element.className;
        newClassName += " ";
        newClassName += value;
        element.className = newClassName;
    }
}
addLoadEvent(styleHeadSibling);