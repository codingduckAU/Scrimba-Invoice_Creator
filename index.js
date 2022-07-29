const washCar = document.getElementById("washcar");     // 3x White Buttons
const mowLawn = document.getElementById("mowlawn");
const pullWeeds = document.getElementById("pullweeds");
const washRemove = document.querySelector(".remove1");  // 3x Remove Buttons
const mowRemove = document.querySelector(".remove2");
const pullRemove = document.querySelector(".remove3");
const sendInvoice = document.getElementById("sendinvoice"); // Send Invoice Button
const washLine = document.querySelector(".items-flex1");    // 3x Invoice entries
const mowLine = document.querySelector(".items-flex2");
const pullLine = document.querySelector(".items-flex3");
const slash = document.getElementById("slash");         // SLASH height adjust
const hidden = document.getElementById("cashtext");     // Hidden cash text
const total = document.getElementById("calctotal");    // Grand Total figure

const services = [0,0,0];       // Declare BLANK array
let calcTotal = 0             // Declare $0 for grand total


// Event Listeners on 3x White Buttons

washCar.addEventListener("click", function() {
    washLine.style.display = "flex"
    hidden.style.color = "#D5D4D8"
    slash.style.marginTop = "29px"
    if (services[0]) { } else { total.innerHTML = calcTotal += 10 }
    services[0] = "wash"
})

mowLawn.addEventListener("click", function() {
    mowLine.style.display = "flex"
    hidden.style.color = "#D5D4D8"
    slash.style.marginTop = "29px"
    if (services[1]) { } else { total.innerHTML = calcTotal += 20 }
    services[1] = "mow"
})

pullWeeds.addEventListener("click", function() {
    pullLine.style.display = "flex"
    hidden.style.color = "#D5D4D8"
    slash.style.marginTop = "29px"
    if (services[2]) { } else { total.innerHTML = calcTotal += 30 }
    services[2] = "pull"
})



// Event Listeners on 3x REMOVE

washRemove.addEventListener("click", function(){
    washLine.style.display = "none"
    services[0] = 0
    total.innerHTML = calcTotal -= 10
    if (services.every(function(response){ return response === 0 })) {
        hidden.style.color = "#1F2937"
        slash.style.marginTop = "55px"
    }
})

mowRemove.addEventListener("click", function(){
    mowLine.style.display = "none"
    services[1] = 0
    total.innerHTML = calcTotal -= 20
    if (services.every(function(response){ return response === 0 })) {
        hidden.style.color = "#1F2937"
        slash.style.marginTop = "55px"
    }
})

pullRemove.addEventListener("click", function(){
    pullLine.style.display = "none"
    services[2] = 0
    total.innerHTML = calcTotal -= 30
    if (services.every(function(response){ return response === 0 })) {
        hidden.style.color = "#1F2937"
        slash.style.marginTop = "55px"
    }
})



// Event Listener for Send Invoice Button

sendInvoice.addEventListener("click", function() {
    washLine.style.display = "none"
    mowLine.style.display = "none"
    pullLine.style.display = "none"
    hidden.style.color = "#1F2937"
    slash.style.marginTop = "55px"
    total.innerHTML = 0
    calcTotal = 0
    services.fill(0)
})