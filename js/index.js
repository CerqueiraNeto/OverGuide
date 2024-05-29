const endpoint = "https://overfast-api.tekrop.fr/heroes/ana";
const ana_img = document.getElementById("ana_image");
const ana_description = document.getElementById("ana_description");

fetch(endpoint)
.then(res => res.json())
.then(hero_data => {

    ana_img.src = hero_data.portrait;
    ana_description.innerHTML = hero_data.description;
    
})

const endpoint2 = "https://overfast-api.tekrop.fr/heroes/ashe";
const ashe_img = document.getElementById("ashe_image");
const ashe_description = document.getElementById("ashe_description");

// TODO a imagem da Ashe não tá carregando
fetch(endpoint2)
.then(res => res.json())
.then(hero_data => {

    ashe_img.src == hero_data.portrait;
    ashe_description.innerHTML = hero_data.description;
})

const endpoint3 = "https://overfast-api.tekrop.fr/heroes/baptiste";
const baptiste_img = document.getElementById("baptiste_image");
const baptiste_description = document.getElementById("baptiste_description");

fetch(endpoint3)
.then(res => res.json())
.then(hero_data => {

    baptiste_img.src = hero_data.portrait;
    baptiste_description.innerHTML = hero_data.description
})