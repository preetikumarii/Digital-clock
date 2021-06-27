function showTime(){
let time = new Date();
let hour = time.getHours(); //object_name.method_name();
let minute = time.getMinutes();
let second = time.getSeconds();

let formatHours = convertFormat(hour);
hour = checkTime(hour);
hour = addZero(hour);
minute = addZero(minute);
second = addZero(second);

document.getElementById('clock').innerHTML =  hour + ":  " + minute + ":  " + second  + "  " + formatHours;
}
function convertFormat(time){
    let format = 'AM'
    if(time >= 12)
    {
        format = 'PM'
    }
    return format;
}    
function checkTime(time){
    if(time > 12)
    {
        time = time-12
    }
    if(time==0)
    {
        time = 12
    }
    return time;
}

function addZero(time){
    if(time < 10)
    {
        time = "0"+time
    }
    return time;
}

showTime();
setInterval(showTime,1000);
