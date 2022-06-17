function TimerStart(){
    StartTime = Date.now()
    Seconds = EndTime - StartTime
    document.getElementById("Seconds").value = (Math.floor(Seconds) + " Seconds")
    document.getElementById("Minutes").value = (Math.floor(Minutes) + " Minutes")
    document.getElementById("Hours").value = (Math.floor(Hours) + " Hours")
}


function Update(){
    let EndTime = Date.now()
    Seconds = EndTime - StartTime
    Seconds = Seconds / 1000
    Minutes = Seconds / 60
    Hours = Minutes / 60
    console.log(Seconds)
    document.getElementById("Seconds").value = (Math.floor(Seconds) + " Seconds")
    document.getElementById("Minutes").value = (Math.floor(Minutes) + " Minutes")
    document.getElementById("Hours").value = (Math.floor(Hours) + " Hours")
}