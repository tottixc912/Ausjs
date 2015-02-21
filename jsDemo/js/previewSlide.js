/**
 * Created by Austin on 2015/2/20.
 */
function previewSlideshow(){
    if(!document.getElementsByName) return false;
    if(!document.getElementById) return false;

    var slideshow = document.createElement("div");
    slideshow.setAttribute("id","slideshow");
    var preview = document.createElement("img");
    preview.setAttribute("src","../image/topics.gif");
    preview.setAttribute("alt","building blocks of web design");
    preview.setAttribute("id","preview");
    slideshow.appendChild(preview);
    var list = document.getElementById("linklist");
    insertAfter(slideshow,list);
    var links = list.getElementsByTagName("a");
    links[0].onmouseover = function(){
        moveElement("preview",-100,0,10);
    }
    links[1].onmouseover = function () {
        moveElement("preview",-200,0,10);
    }
    links[2].onmouseover = function () {
        moveElement("preview",-300,0,10);
    }
}
function insertAfter(newElement,targetElement){
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}
addLoadEvent(previewSlideshow);