let info=document.querySelector(".sweet-info");
let btn_info=document.querySelector(".btn-info");
let contore=document.querySelector(".contore");
let i=5;
btn_info.onclick=function(){
    info.classList.add("hidden");
}

setTimeout( function(){

    info.classList.add("hidden");

},6000);

let intervalID = setInterval(function() {
    contore.innerHTML=`${i}`;
    i--;
  }, 1000);
  
  setTimeout(function() {
    clearInterval(intervalID);
  }, 5000);
  
