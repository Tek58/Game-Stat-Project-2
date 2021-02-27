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
    .then(data => console.log(data)

    )
    .catch(error => {
        console.log(error);
});