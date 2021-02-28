let myHeaders = new Headers();
myHeaders.append('Content-Type', 'image/jpeg');

fetch(
        'https://public-api.tracker.gg/v2/csgo/standard/profile/steam/stepbro/segments/weapon?TRN-Api-Key=de89f9b3-26ff-433d-bcec-e3bbb477dfdd', {
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

document.getElementById("defaultOpen-1").click();

function openTab(evt, tabName, boxName) {    
    var i, tabcontent, tablinks;

    var box = document.getElementById(boxName)

    tabcontent = box.getElementsByClassName("sg-tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = box.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" sg-current", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " sg-current";
}