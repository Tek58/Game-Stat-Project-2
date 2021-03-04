let myHeaders = new Headers();
myHeaders.append('Content-Type', 'image/jpeg');

var heading = document.querySelector("#headings");
var headingWapons = document.querySelector('#headingsWeapons')
var catagory = document.querySelector('#CatagoryRow')
var kills = document.querySelector("#killsRow");
var shotsFired = document.querySelector("#shotsFiredRow");
var shotsHit = document.querySelector("#shotshitRow");
var shotsAccuracy = document.querySelector("#shotsAccuracyRow");
var profileDiv = document.querySelector(".profileDiv");
var search = document.querySelector(".search_icon");
var titles = document.querySelector(".avatarTitles");
var timePlayed = document.getElementById("dispTime");
var secTable = document.getElementById("secondTable");
var thirdTab = document.getElementById("thirdTable");
var fouthTab = document.getElementById("fourthTable");
var loadingIcons = document.querySelector(".loadingicons")


var name = "Akali"
apiFetch(name)
stat(name)
detail(name)
search.addEventListener('click',() => {
    var newName = document.querySelector("#username")

    if (newName.innerHTML != null && newName.value ){
        stat(newName.value)
        apiFetch(newName.value)
        detail(newName.value)
    }
    else{
        newName.style.border = "solid 3px red"
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
        catagory.innerHTML =   '<th scope="col">Catagory</th>'
        kills.innerHTML = '<th scope="row">KILLS</th>'
        shotsFired.innerHTML ='<th scope="row">SHOTS FIRED</th>'
        shotsHit.innerHTML = '<th scope="row">SHOTS HIT</th>'
        shotsAccuracy.innerHTML = '<th scope="row">SHOTS ACCURACY</th>'
        headingWapons.innerHTML = '<th scope="col"></th>'
        var dataElems = data["data"];
        for(i=0;i<Object.keys(dataElems).length;i++){
            heading.innerHTML += `<th scope="col">${dataElems[i]["attributes"]["key"].toUpperCase()}</th>`
            headingWapons.innerHTML += `<th scope="col"><img src="${dataElems[i]["metadata"]["imageUrl"]}" alt=""></th>`
            catagory.innerHTML += `<td scope="col">${dataElems[i]["metadata"]["category"]["displayValue"]}</td>`
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
    loadingIcons.style.display = "inline"
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
    .then(response => {
      loadingIcons.style.display = "none";
      return response.json();
    } )
        .then(function(data){
            profileDiv.innerHTML = `<img class="profile mr-3 float-left" src="${data["data"][0]["avatarUrl"]}" alt="">
        <h2>${name.toUpperCase()}</h2>`;
        }
        )
        .catch(error => {
            console.log(error);
    });
}

function detail(name){

    fetch(
        `https://public-api.tracker.gg/v2/csgo/standard/profile/steam/${name}/?TRN-Api-Key=de89f9b3-26ff-433d-bcec-e3bbb477dfdd`, {
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
            timePlayed.innerHTML = ''
            secTable.innerHTML = ''
            thirdTab.innerHTML = ''
            fouthTab.innerHTML = ''
            var statsData =  data["data"]["segments"][0]["stats"]
            for(let i=0;i<6;i++){
                timePlayed.innerHTML += 
                `<tr>
                <th>
                    <h4 class="m-b-0 font-16">${statsData[Object.keys(statsData)[i]]["displayName"]}</h4>
                </th>
                <td>${statsData[Object.keys(statsData)[i]]["displayValue"]}</td>
                <td>${statsData[Object.keys(statsData)[i]]["percentile"]}</td>
                </tr>`
            } 
            for(let i=6;i<12;i++){
                secTable.innerHTML += 
                `<tr>
                <th>
                    <h4 class="m-b-0 font-16">${statsData[Object.keys(statsData)[i]]["displayName"]}</h4>
                </th>
                <td>${statsData[Object.keys(statsData)[i]]["displayValue"]}</td>
                <td>${statsData[Object.keys(statsData)[i]]["percentile"]}</td>
                </tr>`
            }

            for(let i=12;i<17;i++){
                thirdTab.innerHTML += 
                `<tr>
                <th>
                    <h4 class="m-b-0 font-16">${statsData[Object.keys(statsData)[i]]["displayName"]}</h4>
                </th>
                <td>${statsData[Object.keys(statsData)[i]]["displayValue"]}</td>
                <td>${statsData[Object.keys(statsData)[i]]["percentile"]}</td>
                </tr>`
            }

            for(let i=17;i<24;i++){
                fouthTab.innerHTML += 
                `<tr>
                <th>
                    <h4 class="m-b-0 font-16">${statsData[Object.keys(statsData)[i]]["displayName"]}</h4>
                </th>
                <td>${statsData[Object.keys(statsData)[i]]["displayValue"]}</td>
                <td>${statsData[Object.keys(statsData)[i]]["percentile"]}</td>
                </tr>`
            }
            
        }
        )
        .catch(error => {
            console.log(error);
    });
}

