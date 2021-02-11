const HOUR_DEGREE = 30;
const MIN_SEC_DEGREE = 6;
const MILLISECOND = 1000;

function updateTimer() {
    var time = new Date();

    var seattle = time.toLocaleTimeString("en-US", { timeZone: "America/Los_Angeles"});
    var boston = time.toLocaleTimeString("en-US", { timeZone: "America/New_York"});

    let seattle_hour = Number(seattle.split(' ')[0].split(':')[0])
    let boston_hour = Number(boston.split(' ')[0].split(':')[0])

    // variable to store minutes and seconds 
    var min = time.getMinutes();
    var sec = time.getSeconds();

    document.getElementById("seattle").innerHTML = document.getElementById("seattle").innerHTML.replace("...", seattle.split(' ')[1]);
    document.getElementById("boston").innerHTML = document.getElementById("boston").innerHTML.replace("...", boston.split(' ')[1]);

    document.getElementById("seattle").getElementsByClassName("hour") [0].style.transform = 
        "translate(100px) rotate(" + (seattle_hour * HOUR_DEGREE) + "deg)";
    
    document.getElementById("boston").getElementsByClassName("hour") [0].style.transform = 
        "translate(100px) rotate(" + (boston_hour * HOUR_DEGREE) + "deg)";

    document.getElementById("seattle").getElementsByClassName("minute") [0].style.transform = 
    "translate(100px) rotate(" + (min * MIN_SEC_DEGREE) + "deg)";

    document.getElementById("boston").getElementsByClassName("minute") [0].style.transform = 
    "translate(100px) rotate(" + (min * MIN_SEC_DEGREE) + "deg)";

    document.getElementById("seattle").getElementsByClassName("second") [0].style.transform = 
    "translate(100px) rotate(" + (sec * MIN_SEC_DEGREE) + "deg)";

    document.getElementById("boston").getElementsByClassName("second") [0].style.transform = 
    "translate(100px) rotate(" + (sec * MIN_SEC_DEGREE) + "deg)";

}

setInterval(() => {updateTimer()
}, MILLISECOND);

