var time = new Date();
console.log(time.toLocaleTimeString("en-US", { timeZone: "America/Los_Angeles"}));
console.log(time.toLocaleTimeString("en-US", { timeZone: "America/New_York"}));

var seattle = time.toLocaleTimeString("en-US", { timeZone: "America/Los_Angeles"});
var boston = time.toLocaleTimeString("en-US", { timeZone: "America/New_York"});

let seattle_hour = Number(seattle.split(' ')[0].split(':')[0])
let boston_hour = Number(boston.split(' ')[0].split(':')[0])

// variable to store minutes and seconds 
var min = time.getMinutes();
var sec = time.getSeconds();

document.getElementById("seattle").getElementsByClassName("second") [0].style.transform = 
    "translate(100px) rotate(30deg)";

document.getElementById("boston").getElementsByClassName("second") [0].style.transofrm = 
"translate(100px) rotate(45deg)";

document.getElementById("seattle").innerHTML = document.getElementById("seattle").innerHTML.replace("...", seattle.split(' ')[1]);
document.getElementById("boston").innerHTML = document.getElementById("boston").innerHTML.replace("...", boston.split(' ')[1]);


setInterval(() => {updateSecond()
}, 1000);

function updateSecond() {
    document.getElementById("seattle").innerHTML
}