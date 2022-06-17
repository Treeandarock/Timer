function B(){
    StartTime = Date.now()
    for (a = 0; a < 500000; a++){
        Random = Math.random() * 10
        Random2 = Math.random() * 10
        x = Math.random() * 10
        y = Math.random() * 10
        z = Math.random() * 10
        x2 = Math.random() * 20
        y2 = Math.random() * 20
        z2 = Math.random() * 20
        Extra = Math.random() * 20
        Result = Random * (x**y) + x2 + Random2 * y * y2 % (z ** z ** Extra ** x2 ** y2 **z2) + (x2 % y2 -z2) ** z2
        Result = Math.sin(Result) / (x **y)
        console.log(Result)
    }
    EndTime = Date.now()
    document.getElementById("r").value = Result
    T = EndTime - StartTime
    document.getElementById("t").value = T + " ms"
}
function Time(){
    T = EndTime - StartTime
    document.getElementById("t").value = T
    // T = T / 1000
    console.log(T + " ms")
}
