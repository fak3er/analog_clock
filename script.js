window.onload=()=>{
    second=document.querySelector('.seconds')
    minute=document.querySelector('.minutes')
    hour=document.querySelector('.hours')
    hours=document.querySelector('.container').children
    console.log(hours)
    for(let i=1;i<=hours.length;i++){
        hours[i-1].style.transform="rotateZ("+30*(i)+"deg)"
    }
    
    function renderTime(){
        hour.style.transform="rotate("+(new Date(Date.now())).getHours()%12*((360/12))+"deg)"
        minute.style.transform="rotate("+(new Date(Date.now())).getMinutes()*(360/60)+"deg)"
        second.style.transform="rotate("+(new Date(Date.now())).getSeconds()*(360/60)+"deg)"
       setTimeout(renderTime,1000)
        }


        renderTime()
}