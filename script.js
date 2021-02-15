window.onload=()=>{
    second=document.querySelector('.seconds')
    minute=document.querySelector('.minutes')
    hour=document.querySelector('.hours')
    hours=document.querySelector('.container').children
    button=document.querySelector('.mvt')
    tic=document.querySelector('audio')
    play=document.querySelector('.sound')
    let fluid=false
    let audio=false
    for(let i=1;i<=hours.length;i++){
        hours[i-1].style.transform="rotateZ("+30*(i)+"deg)"
    }
    button.onclick=()=>{
        fluid=!fluid
    }
    play.onclick=()=>{
        audio=!audio
    }   
    function renderTime(){
        hour.style.transform="rotate("+(new Date(Date.now())).getHours()%12*((360/12))+"deg)"
        minute.style.transform="rotate("+(new Date(Date.now())).getMinutes()*(360/60)+"deg)"
        if(!fluid)
            {
                if(audio)
               setTimeout( ()=>tic.play(),800)
                second.style.transform="rotate("+(new Date(Date.now())).getSeconds()*(360/60)+"deg)"
                setTimeout(renderTime,1000)
            }
        else{
            second.style.transform="rotate("+((((new Date(Date.now())).getSeconds()*1000)+((new Date(Date.now())).getMilliseconds()))/100)*(360/600)+"deg)"
            setTimeout(renderTime,100)
        }    
        }
    renderTime()
}
