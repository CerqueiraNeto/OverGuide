import { Ability, Chapter, api_callv2 } from "./api_handler.js";

const endpoint = "https://overfast-api.tekrop.fr/heroes/mei";
const hero_name = document.getElementById("hero_name");
const hero_description = document.getElementById("hero_description");
const hero_portrait = document.getElementById("hero_portrait");
const hero_role = document.getElementById("hero_role");
const hero_location = document.getElementById("hero_location");
const hero_birthday = document.getElementById("hero_birthday");
const hero_age = document.getElementById("hero_age");
const hero_hitpoints = document.getElementById("hero_hitpoints");


//história

const hero_summary = document.getElementById("summary");

const chapter1_title = document.getElementById("chapter1_title");
const chapter1_content = document.getElementById("chapter1_content");
const chapter1_picture = document.getElementById("chapter1_picture");

const chapter2_title = document.getElementById("chapter2_title");
const chapter2_content = document.getElementById("chapter2_content");
const chapter2_picture = document.getElementById("chapter2_picture");

const chapter1 = new Chapter(chapter1_title, chapter1_content, chapter1_picture);
const chapter2 = new Chapter(chapter2_title, chapter2_content, chapter2_picture);

const chapters = [chapter1, chapter2];


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

const weapon = new Ability(weapon_name, weapon_desc, weapon_icon, weapon_video);
const ability1 = new Ability(ability1_name, ability1_desc, ability1_icon, ability1_video);
const ability2 = new Ability(ability2_name, ability2_desc, ability2_icon, ability2_video);
const ability3 = new Ability(ability3_name, ability3_desc, ability3_icon, ability3_video);

const abilities = [weapon, ability1, ability2, ability3];

api_callv2(endpoint, hero_name, hero_description, hero_portrait, hero_role, 
    hero_location, hero_birthday, hero_age, hero_hitpoints, hero_summary, chapters, abilities);