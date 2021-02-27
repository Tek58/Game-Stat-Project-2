let myHeaders = new Headers();
myHeaders.append('Content-Type', 'image/jpeg');

var heading = document.querySelector("#headings")
var headingWapons = document.querySelector('#headingsWeapons')
var kills = document.querySelector("#killsRow");
var shotsFired = document.querySelector("#shotsFiredRow");
var shotsHit = document.querySelector("#shotshitRow");
var shotsAccuracy = document.querySelector("#shotsAccuracyRow");
var profileDiv = document.querySelector(".profileDiv");
var search = document.querySelector(".search_icon");



var name = "stepbro"
apiFetch(name)
stat(name)
search.addEventListener('click',() => {
    var newName = document.querySelector("#username")
    if (newName.innerHTML != null ){
        stat(newName.value)
        apiFetch(newName.value)
        
    }
}) 




function apiFetch(name){
    fetch(
        `https://public-api.tracker.gg/v2/csgo/standard/profile/steam/${name}/segments/weapon?TRN-Api-Key=de89f9b3-26ff-433d-bcec-e3bbb477dfdd`, {
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
        let i ;
        heading.innerHTML = '<th scope="col">Weapons</th>'
        kills.innerHTML = '<th scope="row">KILLS</th>'
        shotsFired.innerHTML ='<th scope="row">SHOTS FIRED</th>'
        shotsHit.innerHTML = '<th scope="row">SHOTS HIT</th>'
        shotsAccuracy.innerHTML = '<th scope="row">SHOTS ACCURACY</th>'
        headingWapons.innerHTML = '<th scope="col"></th>'
        var dataElems = data["data"];
        for(i=0;i<Object.keys(dataElems).length;i++){
            heading.innerHTML += `<th scope="col">${dataElems[i]["attributes"]["key"].toUpperCase()}</th>`
            headingWapons.innerHTML += `<th scope="col"><img src="${dataElems[i]["metadata"]["imageUrl"]}" alt=""></th>`
            kills.innerHTML += `<td scope="col">${dataElems[i]["stats"]["kills"]["displayValue"]}</td>`
            shotsFired.innerHTML += `<td scope="col">${dataElems[i]["stats"]["shotsFired"]["displayValue"]}</td>`
            shotsHit.innerHTML += `<td scope="col">${dataElems[i]["stats"]["shotsHit"]["displayValue"]}</td>`
            shotsAccuracy.innerHTML += `<td scope="col">${dataElems[i]["stats"]["shotsAccuracy"]["displayValue"]}</td>`
        }  
    }
    )
    .catch(error => {
        console.log(error);
});
}
function stat(name){

    fetch(
        `https://public-api.tracker.gg/v2/csgo/standard/search?TRN-Api-Key=de89f9b3-26ff-433d-bcec-e3bbb477dfdd&platform=steam&query=${name}`, {
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
            profileDiv.innerHTML = `<img class="profile mr-3 float-left" src="${data["data"][0]["avatarUrl"]}" alt="">
        <h2>${name.toUpperCase()}</h2>`;
        }
        )
        .catch(error => {
            console.log(error);
    });
}

