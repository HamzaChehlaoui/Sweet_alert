let info=document.querySelector(".sweet-info");
let danger=document.querySelector(".sweet-danger");
let success=document.querySelector(".sweet-success");
let warning=document.querySelector(".sweet-warning");
let btn_info=document.querySelector(".btn-info");
let btn_danger=document.querySelector(".btn-danger");
let btn_success=document.querySelector(".btn-success");
let btn_warning=document.querySelector(".btn-warning");
let contore=document.querySelector(".contore");
let contore_d=document.querySelector(".contore-d");
let contore_s=document.querySelector(".contore-s");
let contore_w=document.querySelector(".contore-w");
let del_hid_info=document.querySelector(".del-hid-info");
let del_hid_danger=document.querySelector(".del-hid-danger");
let del_hid_success=document.querySelector(".del-hid-success");
let del_hid_warning=document.querySelector(".del-hid-warning");

    // function sweet-alert

function sweet(a,b,c){
  let i=5;
    a.classList.remove("hidden");
    b.onclick=function(){
    a.classList.add("hidden");
    }
  setTimeout( function(){
    a.classList.add("hidden");

  },6000);
  let intervalID = setInterval(function() {
    c.innerHTML=`${i}`;
    i--;
  }, 1000);
  setTimeout(function() {
    clearInterval(intervalID);
  }, 6000);
  c.innerHTML=`6`;
}
  // sweet info 
    del_hid_info.addEventListener('click',function(){
      sweet(info,btn_info,contore);
    });

  // sweet danger 
    del_hid_danger.addEventListener('click',function(){
      sweet(danger,btn_danger,contore_d);
    });

  // sweet success 
    del_hid_success.addEventListener('click',function(){
      sweet(success,btn_success,contore_s);
    });
  // sweet warning 
    del_hid_warning.addEventListener('click',function(){
      sweet(warning,btn_warning,contore_w);
    });
