let info=document.querySelector(".sweet-info");
let danger=document.querySelector(".sweet-danger");
let btn_info=document.querySelector(".btn-info");
let btn_danger=document.querySelector(".btn-danger");
let contore=document.querySelector(".contore");
let del_hid_info=document.querySelector(".del-hid-info");
let del_hid_danger=document.querySelector(".del-hid-danger");

    // function sweet-info

del_hid_info.onclick=
function sweet(a,b,c){
    a.classList.remove("hidden");
    let i=5;
    btn_info.onclick=function(){
    a.classList.add("hidden");
    }
  setTimeout( function(){
    a.classList.add("hidden");

  },6000);
  let intervalID = setInterval(function() {
    contore.innerHTML=`${i}`;
    i--;
  }, 1000);
  setTimeout(function() {
    clearInterval(intervalID);
  }, 5000);
  contore.innerHTML=`6`;
}
 
    // function sweet danger
del_hid_danger.onclick=function(){
  danger.classList.remove("hidden");
    let i=5;
    btn_danger.onclick=function(){
    a.classList.add("hidden");
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
  contore.innerHTML=`6`;
}