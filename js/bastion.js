import { api_call } from "./api_handler.js";

const endpoint = "https://overfast-api.tekrop.fr/heroes/bastion";
const hero_name = document.getElementById("hero_name");
const hero_description = document.getElementById("hero_description");
const hero_portrait = document.getElementById("hero_portrait");
const hero_role = document.getElementById("hero_role");
const hero_location = document.getElementById("hero_location");
const hero_birthday = document.getElementById("hero_birthday");
const hero_age = document.getElementById("hero_age");

api_call(endpoint, hero_name, hero_description, hero_portrait, hero_role, hero_location, hero_birthday, hero_age);