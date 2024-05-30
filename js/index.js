import { api_call } from "./api_handler.js";

const endpoint = "https://overfast-api.tekrop.fr/heroes/ana";
const ana_img = document.getElementById("ana_image");
const ana_description = document.getElementById("ana_description");

api_call(endpoint, ana_img, ana_description);

const endpoint2 = "https://overfast-api.tekrop.fr/heroes/ashe";
const ashe_img = document.getElementById("ashe_image");
const ashe_description = document.getElementById("ashe_description");

api_call(endpoint2, ashe_img, ashe_description);

const endpoint3 = "https://overfast-api.tekrop.fr/heroes/baptiste";
const baptiste_img = document.getElementById("baptiste_image");
const baptiste_description = document.getElementById("baptiste_description");

api_call(endpoint3, baptiste_img, baptiste_description);