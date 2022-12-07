const apiKey = "3ed0f9014f354da7811c1866738bbca8";

const url = `https://api.rawg.io/api/games/gta/screenshots?key=${apiKey}`;

let input= document.querySelector("#game");
let btn = document.querySelector("#btn");

btn.addEventListener("click", (e) => {
    if(input.value != ""){
        let game = input.value;
        let url = `https://api.rawg.io/api/games/${game}/screenshots?key=${apiKey}`;
        
        fetch(url).then((result) => {
            return result.json();
        }).then((resp) => {
    resp.results.forEach((game) => {
        let divFoto = document.createElement('div');
        divFoto.setAttribute("class", "photo");
        let img = document.createElement('img');
        img.setAttribute("src",game.image);
        divFoto.append(img);
        document.querySelector("#results-container").append(divFoto);
    });
});
input.value = "";
document.querySelector("#results-container").innerHTML = "";
}
});
