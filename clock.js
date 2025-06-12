const  hours=document.querySelector('.hours');
const  minutes=document.querySelector('.minutes');
const  seconds=document.querySelector('.seconds');
const  am=document.querySelector('.am');
 
updateClock();
function updateClock(){
  let h=new Date().getHours();
  let m=new Date().getMinutes();
  let s=new Date().getSeconds();
  let am='AM';
  if (h >12){
    h=h-12;
    am='AM'
  }
  hours.innerHTML=`${h}`
  minutes.innerHTML=`${m}`
  seconds.innerHTML=`${s}`
  am.innerHTML=am;
  
}

