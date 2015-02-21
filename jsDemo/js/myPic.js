/*
* Auther:Austin
* Date:2015-1-25
* 一个小小的测试
* Version：1.0
* */

function preparePlacehodler(){
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imagegallery"))return false;
    var placeholder = document.createElement("img");
    placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("src","../image/baolingbg.jpg");
    placeholder.setAttribute("alt","my image gallery");
    var description = document.createElement("p");
    description.setAttribute("id","description");
    var destext = document.createTextNode("Choose an image");
    description.appendChild(destext);
    var gallery = document.getElementById("imagegallery");
    insertAfter(placeholder,gallery);
    insertAfter(description,placeholder);
}
function prepareGallery(){
    if(!document.getElementsByTagName || !document.getElementById) return false;
    if(!document.getElementById("imagegallery")) return false;
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for(var i = 0; i < links.length; i++){
        links[i].onclick = function(){
           return showPic(this);
        }
    }
    //for(var i = 0; i < links.length; i++){
    //    links[i].onmousemove = function(){
    //        return showPic(this);
    //    }
    //}
}
function insertAfter(newElement,targetElement){
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}
function addLoadEvent(func){   /*通用的完美加载页面执行js方法函数*/
    var oldOnload = window.onload;
    if(typeof window.onload != 'function'){
        window.onload = func;
    }else{
        window.onload = function() {
            oldOnload();
            func();
        }
    }
}
function showPic(whichpic){
    if(!document.getElementById("placeholder")) return true;
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
    if(!document.getElementById("description")) return false;
    if(whichpic.getAttribute("title")) {
        var text = whichpic.getAttribute("title");
    }else {
        var text = "";
    }
    var description = document.getElementById("description");
    if(description.firstChild.nodeType == 3) {
        description.firstChild.nodeValue = text;
    }
    return false;
    //description.firstChild.nodeValue = text;
}
function countBodyChildren(){
    var body_element = document.getElementsByTagName("body")[0];
    alert(body_element.childNodes.length);
    alert(body_element.nodeType);
}
addLoadEvent(countBodyChildren);
addLoadEvent(prepareGallery);
addLoadEvent(preparePlacehodler);
