const display = document.querySelector('#display')
const div = document.createElement('div')
let sec = 0
let minutes = 0
let hour = 0
let startTime


renderToHtml()



function up(){
    if(sec === 59){
    if(minutes === 59){
        hour++
        minutes=0
    }
    sec=0
    minutes++
}
sec++
 renderToHtml()
}

function start(){
    startTime =  setInterval(up,1000);
}


function stop(){
    clearInterval(startTime)
     renderToHtml()
 }

 
function restart(){
    sec=0
    minutes=0
    hour=0
    stop()
   renderToHtml()
}




function renderToHtml(){
    div.innerHTML = `<div class="mid">
<div class="container">
 <div class="time">${hour < 10 ? "0" + hour : hour}:${minutes < 10 ? "0" + minutes : minutes}:${sec < 10 ? "0" + sec : sec}</div>
 <div class="buttes">
 <button onclick="stop()">Stop</button>
 <button onclick="start()">Start</button>
 <button  onclick="restart()">Restart</button>
 </div>
</div>
</div>`

display.appendChild(div)
}