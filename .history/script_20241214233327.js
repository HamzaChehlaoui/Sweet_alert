let info=document.querySelector(".sweet-info");
let btn_info=document.querySelector(".btn-info");

btn_info.onclick=function(){
    info.classList.add("hidden");
}

setTimeout( function(){

    info.classList.add("hidden");

},5000);

let intervalID = setInterval(function() {
    console.log("هذه الرسالة ستتكرر");
  }, 1000);
  
  // إلغاء `setInterval()` بعد 5 ثواني
  setTimeout(function() {
    clearInterval(intervalID);
    console.log("تم إيقاف التكرار");
  }, 5000); // إيقاف التكرار بعد 5 ثواني
  
