/**
 * Created by Austin on 2015/2/7.
 */
function highlightRows(){
    if(!document.getElementsByTagName) return false;
    var rows = document.getElementsByTagName("tr");
    for(var i = 0; i < rows.length; i++){
        rows[i].onmouseover = function(){
            return this.style.fontWeight = "bold";
        }
        rows[i].onmouseout = function () {
            return this.style.fontWeight = "normal";
        }
    }
}
addLoadEvent(highlightRows);