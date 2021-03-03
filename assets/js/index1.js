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


function search(name, platform){
    fetch(
        `https://public-api.tracker.gg/v2/apex/standard/profile/${platform}/${name}?TRN-Api-Key=87d61054-b4ab-4722-b99b-35a2e7ee0392`, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:86.0) Gecko/20100101 Firefox/86.0',
                Accept: 'application/json',
                'Accept-Encoding': 'gzip',
                'TRN-Api-Key': 'de89f9b3-26ff-433d-bcec-e3bbb477dfdd',
            },
            mode:'cors',
        }

    )
    .then(response => response.json())
    .then(function(data){
        if (Object.keys(data)[0] == 'errors'){
            let i;
            profileDiv.innerHTML = `<img class="profile mr-3 float-left" src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png" style = "background-color: white;" width="12%" height="100%" alt="">
        <h2>Player Not Found</h2>`;
        overview.innerHTML = ''
        legendDisp.innerHTML = ""
            return;
        }