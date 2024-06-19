import { api_call } from "./api_handler.js";

const hero_endpoint = "https://overfast-api.tekrop.fr/heroes";
const dmgBtn = document.getElementById("dmg_button");
const supBtn = document.getElementById("sup_button");
const tankBtn = document.getElementById("tank_button");
const allBtn = document.getElementById("all_button");
const searchInput = document.getElementById("hero_search");

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

// filtragem de heróis
const dmgHeroes = [
    "ashe", "bastion", "cassidy", "echo", "genji", "hanzo", "junkrat", "mei", "pharah", "reaper", "sojourn", "soldier-76", 
    "sombra", "symmetra", "torbjorn", "tracer", "venture", "widowmaker"
];

const supHeroes = [
    "ana", "baptiste", "brigitte", "illari", "kiriko", "lifeweaver", "lucio", "mercy", "moira", "zenyatta"
];

const tankHeroes = [
    "dva", "doomfist", "mauga", "orisa", "junker-queen", "ramattra", "reinhardt", "roadhog", "sigma", "winston",
    "wrecking-ball", "zarya"
];

const allHeroes = [...dmgHeroes, ...supHeroes, ...tankHeroes].sort();

const filterDamage = () => {

    for (let i = 0; i < supHeroes.length; i++) {
        document.getElementById(`${supHeroes[i]}_div`).style.display = 'none';
    }
    
    for (let j = 0; j < tankHeroes.length; j++) {
        document.getElementById(`${tankHeroes[j]}_div`).style.display = 'none';
    }

    for (let m = 0; m < dmgHeroes.length; m++) {
        document.getElementById(`${dmgHeroes[m]}_div`).style.display = "block";
    }
   
}

const filterTank = () => {
    
    for (let k = 0; k < dmgHeroes.length; k++) {
        document.getElementById(`${dmgHeroes[k]}_div`).style.display = 'none';
    }

    for (let l = 0; l < supHeroes.length; l++) {
        document.getElementById(`${supHeroes[l]}_div`).style.display = 'none';
    }

    for (let n = 0; n < tankHeroes.length; n++) {
        document.getElementById(`${tankHeroes[n]}_div`).style.display = "block";
    }
}

const filterSupport = () => {

    for (let o = 0; o < dmgHeroes.length; o++) {
        document.getElementById(`${dmgHeroes[o]}_div`).style.display = 'none';
    }

    for (let p = 0; p < tankHeroes.length; p++) {
        document.getElementById(`${tankHeroes[p]}_div`).style.display = 'none';
    }

    for (let q = 0; q < supHeroes.length; q++) {
        document.getElementById(`${supHeroes[q]}_div`).style.display = 'block';
    }
}

const showAll = () => {

    for (let r = 0; r < allHeroes.length; r++) {
        document.getElementById(`${allHeroes[r]}_div`).style.display = 'block';
    }
}

dmgBtn.addEventListener("click", filterDamage);
tankBtn.addEventListener("click", filterTank);
supBtn.addEventListener("click", filterSupport);
allBtn.addEventListener("click", showAll);

// busca de heróis
searchInput.addEventListener("input", (e) => {

    const value = e.target.value.toLowerCase();
    console.log(value);
    for (let s = 0; s < allHeroes.length; s++) {
        const isVisible = allHeroes[s].toLowerCase().includes(value)
        
        if (!isVisible) {
            document.getElementById(`${allHeroes[s]}_div`).style.display = 'none';
        } else {
            document.getElementById(`${allHeroes[s]}_div`).style.display = 'block';
        }
        
    }
})