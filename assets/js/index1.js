var summaryTab = document.getElementById("Summary")
var operatorsTab = document.getElementById("Operators")

summaryTab.addEventListener('click',showSummary)
operatorsTab.addEventListener('click',showOperators)

let summCont = document.getElementById("operatorsContent")
let operCont = document.getElementById("summaryContent")

function showSummary() {
    summCont.style.display = "none";
    operCont.style.display = "block";
    summaryTab.className += " active"
}

function showOperators() {
    summCont.style.display = "block";
    operCont.style.display = "none";
}