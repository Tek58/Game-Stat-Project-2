var legendDisp = document.getElementById("legends");
var profileDiv = document.querySelector(".profileDiv");
var overview = document.getElementById("dispTime");
var xbox = document.querySelector(".xbox");
var ps = document.querySelector(".psn");
var origin = document.querySelector(".origin");
var loadingIcons = document.querySelector(".loadingicons")

var name = "DV_effect"

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
    loadingIcons.style.display = "inline"
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
    .then(response =>{
        loadingIcons.style.display = "none"
        return response.json()
    } )
    .then(function(data){
        if (Object.keys(data)[0] == 'errors'){
            let i;
        profileDiv.innerHTML = `<img class="align-self-start profile mr-3 float-left" src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png" style = "background-color: white;" width="12%" height="100%" alt="">
        <div class="media-body">
        <h2 class="mt-0" >Player Not Found</h2>
      </div>`;
        overview.innerHTML = ''
        legendDisp.innerHTML = ""
            return;
        }

        overview.innerHTML=''
        
        profileDiv.innerHTML = `<img class="align-self-start profile mr-3 float-left" src="${data["data"]["platformInfo"]["avatarUrl"]}" alt="" width="12%" height="100%">
        <div class="media-body">
        <h2 class="mt-0" >${data["data"]["platformInfo"]["platformUserId"]}</h2>
      </div>`;

        // Overview part
        var kil = "-"
        var level = "-"
        var dataElems = data["data"]["segments"];
        if(dataElems[0]["stats"]["kills"]["rank"] != undefined || dataElems[0]["stats"]["kills"]["rank"] != null ){
            kil = dataElems[0]["stats"]["kills"]["displayValue"]
        
        }
        if(dataElems[0]["stats"]["level"]["rank"] != undefined || dataElems[0]["stats"]["level"]["rank"] != null ){
            level= dataElems[0]["stats"]["level"]["rank"]
        }
        overview.innerHTML += ` <tr>
                                    <td>Kills</td> 
                                    <td>${kil}</td>  
                                    <td>${dataElems[0]["stats"]["kills"]["percentile"]}%</td> 
                                    <td>${dataElems[0]["stats"]["kills"]["displayValue"]}</td> 
                                </tr>
                                
                                <tr>
                                    <td>Level</td> 
                                    <td>${level}</td>  
                                    <td>${dataElems[0]["stats"]["level"]["percentile"]}%</td> 
                                    <td>${dataElems[0]["stats"]["level"]["displayValue"]}</td> 
                                </tr>                              
                                `

        // legends part
                                        
        
        legendDisp.innerHTML = ""
        for(i=1;i<dataElems.length;i++){
            var kills = "-"
            var matchesPlayed = "-"
            var damage = "-"
            if(dataElems[i]["stats"]["kills"] != undefined || dataElems[i]["stats"]["kills"] != null ){
                kills = dataElems[i]["stats"]["kills"]["displayValue"]
            
            }
            if(dataElems[i]["stats"]["matchesPlayed"] != undefined || dataElems[i]["stats"]["matchesPlayed"] != null ){
                matchesPlayed = dataElems[i]["stats"]["matchesPlayed"]["displayValue"]
            }
            if(dataElems[i]["stats"]["damage"] != undefined || dataElems[i]["stats"]["damage"] != null ){
                damage = dataElems[i]["stats"]["damage"]["displayValue"]
            }
            
            legendDisp.innerHTML += `<tr>
                                        <td id="imageTD"><img src="${dataElems[i]["metadata"]["imageUrl"]}" style="width:100%;  border-radius: 10%"></td>
                                        <td>${dataElems[i]["attributes"]["id"]}</td>
                                        <td>${dataElems[i]["metadata"]["name"]}</td>  
                                        <td>${kills}</td>
                                        <td>${matchesPlayed}</td>  
                                        <td>${damage}</td>  
                                        <td>${dataElems[i]["metadata"]["isActive"]}</td> 
                                    </tr>`;
                                                                          
        }
    }
        
    )
    .catch(error => {
        console.log(error);
});
}