import { api_call } from "./api_handler.js";

const hero_endpoint = "https://overfast-api.tekrop.fr/heroes";
const dmgBtn = document.getElementById("dmg_button");
const supBtn = document.getElementById("sup_button");
const tankBtn = document.getElementById("tank_button");

// consumindo a api
fetch(hero_endpoint)
.then(res => res.json())
.then(hero_data => {

    for (let i = 0; i < hero_data.length; i++){
        let key = hero_data[i].key;
        let hero_img = document.getElementById(`${key}_image`);
        let hero_desc = document.getElementById(`${key}_description`);
        hero_img.src = hero_data[i].portrait;
        hero_desc.innerHTML = "Role: " + hero_data[i].role;
    }

})

const filterDamage = () => {
    // implementar isso aqui depois
    console.log("Filtrar herois de dano");
}


const filterTank = () => {
    // implementar isso aqui depois
    console.log("Filtrar herois tanks");
}


const filterSupport = () => {
    // implementar isso aqui depois
    console.log("Filtrar herois de suporte");
}

dmgBtn.addEventListener("click", filterDamage);
tankBtn.addEventListener("click", filterTank);
supBtn.addEventListener("click", filterSupport);