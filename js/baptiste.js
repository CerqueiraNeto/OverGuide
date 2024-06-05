const endpoint = "https://overfast-api.tekrop.fr/heroes/baptiste";
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
    hero_portrait.src = hero_data.portrait
    hero_role.innerHTML = "Role: " + hero_data.role;
    hero_location.innerHTML = "Location: " + hero_data.location;
    hero_birthday.innerHTML = "Birthday: " + hero_data.birthday;
    hero_age.innerHTML = "Age: " + hero_data.age;
    
})