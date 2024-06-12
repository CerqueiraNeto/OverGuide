/*
import { api_call } from "./api_handler.js";

const endpoint = "https://overfast-api.tekrop.fr/heroes/ana";
const hero_name = document.getElementById("hero_name");
const hero_description = document.getElementById("hero_description");
const hero_portrait = document.getElementById("hero_portrait");
const hero_role = document.getElementById("hero_role");
const hero_location = document.getElementById("hero_location");
const hero_birthday = document.getElementById("hero_birthday");
const hero_age = document.getElementById("hero_age");

api_call(endpoint, hero_name, hero_description, hero_portrait, hero_role, hero_location, hero_birthday, hero_age);
*/

// Eu modifiquei a chamada da API na página da Ana para testar a implementação de novas informações
// Arma, habilidades, etc. Depois eu vejo como padronizar isso pra todos os herois

const endpoint = "https://overfast-api.tekrop.fr/heroes/ana";

// informações básicas
const hero_name = document.getElementById("hero_name");
const hero_description = document.getElementById("hero_description");
const hero_portrait = document.getElementById("hero_portrait");
const hero_role = document.getElementById("hero_role");
const hero_location = document.getElementById("hero_location");
const hero_birthday = document.getElementById("hero_birthday");
const hero_age = document.getElementById("hero_age");
const hero_hitpoints = document.getElementById("hero_hitpoints");

// habilidades
const weapon_name = document.getElementById("weapon_name");
const weapon_desc = document.getElementById("weapon_desc");
const weapon_icon = document.getElementById("weapon_icon");
const weapon_video = document.getElementById("weapon_video");

const ability1_name = document.getElementById("ability1_name");
const ability1_desc = document.getElementById("ability1_desc");
const ability1_icon = document.getElementById("ability1_icon");
const ability1_video = document.getElementById("ability1_video");

const ability2_name = document.getElementById("ability2_name");
const ability2_desc = document.getElementById("ability2_desc");
const ability2_icon = document.getElementById("ability2_icon");
const ability2_video = document.getElementById("ability2_video");

const ability3_name = document.getElementById("ability3_name");
const ability3_desc = document.getElementById("ability3_desc");
const ability3_icon = document.getElementById("ability3_icon");
const ability3_video = document.getElementById("ability3_video");

fetch(endpoint)
.then(req => req.json())
.then(data => {

    // informações básicas
    hero_name.innerHTML = data.name;
    hero_description.innerHTML = data.description;
    hero_portrait.src = data.portrait;
    hero_role.innerHTML = "Role: " + data.role;
    hero_location.innerHTML = "Location: " + data.location;
    hero_birthday.innerHTML = "Birthday: " + data.birthday;
    hero_age.innerHTML = "Age: " + data.age;
    hero_hitpoints.innerHTML = "Hitpoints: " +
            `<ul>
                <li>Armor: ${data.hitpoints.armor}</li>
                <li>Health: ${data.hitpoints.health}</li>
                <li>Shields: ${data.hitpoints.shields}</li>
                <li>Total: ${data.hitpoints.total}</li>
            </ul>`

    // habilidades
    const abilities = data.abilities;

    weapon_name.innerHTML = abilities[0].name;
    weapon_desc.innerHTML = abilities[0].description;
    weapon_icon.src = abilities[0].icon;
    weapon_video.src = abilities[0].video.link.mp4;

    ability1_name.innerHTML = abilities[1].name;
    ability1_desc.innerHTML = abilities[1].description;
    ability1_icon.src = abilities[1].icon;
    ability1_video.src = abilities[1].video.link.mp4;

    ability2_name.innerHTML = abilities[2].name;
    ability2_desc.innerHTML = abilities[2].description;
    ability2_icon.src = abilities[2].icon;
    ability2_video.src = abilities[2].video.link.mp4;

    ability3_name.innerHTML = abilities[3].name;
    ability3_desc.innerHTML = abilities[3].description;
    ability3_icon.src = abilities[3].icon;
    ability3_video.src = abilities[3].video.link.mp4;

})