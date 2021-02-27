let myHeaders = new Headers();
myHeaders.append('Content-Type', 'image/jpeg');
var n = document.querySelector(".profileDiv")
var m = document.querySelector("#rightSecOverall")

fetch(
        'https://public-api.tracker.gg/v2/csgo/standard/profile/steam/stepbro/?TRN-Api-Key=de89f9b3-26ff-433d-bcec-e3bbb477dfdd', {
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
    .then(function(posts) {
            let output = `<img class="profile mr-3 float-left" src="${posts["data"]["platformInfo"]["avatarUrl"]}" alt="" width="12%" height="100%">
            <h3>Step Bro</h3>`

            let killOutput = `
            <h2>Kills</h2>
            <div class="row my-5 killsRow">
            <div class="col-sm-4 killsClass">
            <h4>Percentile</h4>
            <h3 class="actionTitle text-primary">${posts["data"]["segments"][0]["stats"]["kills"]["percentile"]}</h3></div>

            <div class="col-sm-4 killsClass">
            <h4>Value</h4>
            <h3 class="actionTitle text-primary">${posts["data"]["segments"][0]["stats"]["kills"]["displayValue"]}</h3></div>
            <div class="col-sm-4 killsClass">
            <h4>Category</h4>
            <h3 class="actionTitle text-primary">${posts["data"]["segments"][0]["stats"]["kills"]["category"]}</h3></div>
            <div class="col-sm-4 killsClass">
            <h4>Percentile</h4>
            <h3 class="actionTitle text-primary">${posts["data"]["segments"][0]["stats"]["deaths"]["percentile"]}</h3></div>

            <div class="col-sm-4 killsClass">
            <h4>Value</h4>
            <h3 class="actionTitle text-primary">${posts["data"]["segments"][0]["stats"]["deaths"]["displayValue"]}</h3></div>
            <div class="col-sm-4 killsClass">
            <h4>Category</h4>
            <h3 class="actionTitle text-primary">${posts["data"]["segments"][0]["stats"]["deaths"]["category"]}</h3></div>
            </div>
            `
        ;
        
        n.innerHTML = output;
        m.innerHTML = killOutput;

    })
    .catch(error => {
        console.log(error);
});