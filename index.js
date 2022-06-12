let StartTime
let Minutes = 0
let Hours = 0
function TimerStart(){
    StartTime = Date.now()
}

function TimerEnd(){
    let EndTime = Date.now()
    Seconds = EndTime - StartTime
    Seconds = Seconds / 1000
    if (Seconds > 60){
        Seconds = 0
        Minutes = Minutes + 1
    }
    Hours = Minutes / 60

    console.log(Seconds)
    document.getElementById("Seconds").value = (Math.round(Seconds) + " Seconds")
    document.getElementById("Minutes").value = (Math.round(Minutes) + " Minutes")
    document.getElementById("Hours").value = (Math.round(Hours) + " Hours")
}