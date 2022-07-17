window.onload=function(){
var n=0
var nu=document.querySelector('#hu')
var img=document.querySelector('#huy')
    nu.onclick = function(){
        n++
    if(n%2!==1){
        img.style.display="none";
    }else{
        img.style.display="block";
    }
    }
}