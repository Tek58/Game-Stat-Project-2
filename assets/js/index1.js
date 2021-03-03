var legendDisp = document.getElementById("legends");
var profileDiv = document.querySelector(".profileDiv");
var overview = document.getElementById("dispTime");
var xbox = document.querySelector(".xbox");
var ps = document.querySelector(".psn");
var origin = document.querySelector(".origin");

var name = "Daltoosh"

search(name, "psn")
function collector(name, platform) {
    var newName = document.querySelector("#username")
    newName.style.border = "none"
    if (newName.value != ""){
        search(newName.value, platform)
        
    }
    else{
        newName.style.border = "solid 3px red"
    }
}

xbox.addEventListener('click',()=>{
    collector(name, "Xbox")
});
ps.addEventListener('click',()=>{
    collector(name, "psn")
});
origin.addEventListener('click',()=>{
    collector(name, "origin")
});