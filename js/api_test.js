const endpoint = "https://overfast-api.tekrop.fr/heroes/ana";
const hero_name = document.getElementById("hero_name");
const hero_description = document.getElementById("hero_description");
const hero_portrait = document.getElementById("hero_portrait");
const hero_role = document.getElementById("hero_role");
const hero_location = document.getElementById("hero_location");
const hero_birthday = document.getElementById("hero_birthday");
const hero_age = document.getElementById("hero_age");


fetch(endpoint)
.then(res => res.json())
.then(hero_data => {

    //console.log(hero_data);
    //console.log(hero_data.name);
    //console.log(hero_data.abilities[0].name);

    hero_name.innerHTML = hero_data.name;
    hero_description.innerHTML = hero_data.description;
    hero_portrait.src = 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/3429c394716364bbef802180e9763d04812757c205e1b4568bc321772096ed86.png';
    hero_role.innerHTML = "Role: " + hero_data.role;
    hero_location.innerHTML = "Location: " + hero_data.location;
    hero_birthday.innerHTML = "Birthday: " + hero_data.birthday;
    hero_age.innerHTML = "Age: " + hero_data.age;
    
})