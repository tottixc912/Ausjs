/**
 * Created by Austin on 2015/2/24.
 */
function addEventLoad(func){
    var oldonload = window.onload;
    if(typeof window.onload != "function"){
        window.onload = func;
    }else{
        window.onload = function(){
            oldonload();
            func();
        }
    }
}
function insertAfter(newElement,targeElement){
    var parent = targeElement.parentNode;
    if(parent.lastChild == targeElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement,targeElement.nextSibling);
    }
}
function addClass(element,value){
    if(!element.className){
        element.className = value;
    }else{
        newClassName = element.className
        newClassName += "";
        newClassName += value;
        element.className = newClassName;
    }
}
function highlightPage(){
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("navigation")) return false;
    var nav = document.getElementById("navigation");
    var links = nav.getElementsByTagName("a");
    for(var i = 0; i < links.length; i++){
        var linkurl = links[i].getAttribute("href");
        var currenturl = window.location.href;
        if(currenturl.indexOf(linkurl) != -1){
            links[i].className = "here";
            var linktext = links[i].lastChild.nodeValue.toLowerCase();
            document.body.setAttribute("id",linktext);
        }
    }
}
addEventLoad(highlightPage);