var ty=document.querySelector(".main")
var hj=document.querySelector(".up")
var ht=document.querySelector(".cl")

hj.addEventListener('click',show);
ht.addEventListener('click',close);

function show(){
    ty. style.display="flex";
    ty.style.top="0";
}
function close(){
    ty.style.top="-100%"
}