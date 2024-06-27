// Função para consumir a API OverFast. Evita repetição de códigos.
// Parâmetros: o endpoint da api, o elemento html do portrato, o elemento html da descrição
// Retorno: Nada
export function api_call(endpoint, name, description, portrait, role, location, birthday, age, abilities, chapters) {
 
    fetch(endpoint)
    .then(res => res.json())
    .then(hero_data => {

        name.innerHTML = hero_data.name;
        description.innerHTML = hero_data.description;
        portrait.src = hero_data.portrait;
        role.innerHTML = "Role: " + hero_data.role;
        location.innerHTML = "Location: " + hero_data.location;
        birthday.innerHTML = "Birthday: " + hero_data.birthday;
        age.innerHTML = "Age: " + hero_data.age;
        abilities = [...hero_data.abilities];
        chapters = [...hero_data.chapters];
    })
}

// O objetivo é criar uma segunda api call para testar, e aí quando ela tiver pronta, é só
// remover a api call antiga e renomear a api call v2 para api call
export function api_callv2(endpoint, name, description, portrait, role, 
    location, birthday, age, hitpoints, summary,
    chapters, abilities) { // chapters e abilities sao arrays de capitulos e habilidades

    fetch(endpoint)
    .then(res => res.json())
    .then(hero_data => {

        name.innerHTML = hero_data.name;
        description.innerHTML = hero_data.description;
        portrait.src = hero_data.portrait;
        role.innerHTML = "Role: " + hero_data.role;
        location.innerHTML = "Location: " + hero_data.location;
        birthday.innerHTML = "Birthday: " + hero_data.birthday;
        age.innerHTML = "Age: " + hero_data.age;
        hitpoints.innerHTML = "Hitpoints: " +
            `<ul>
                <li>Armor: ${hero_data.hitpoints.armor}</li>
                <li>Health: ${hero_data.hitpoints.health}</li>
                <li>Shields: ${hero_data.hitpoints.shields}</li>
                <li>Total: ${hero_data.hitpoints.total}</li>
            </ul>`

        summary.innerHTML = hero_data.story.summary;

        const story_chapters = hero_data.story.chapters;

        // distribuir os capitulos da historia dinamicamente
        for (let i = 0; i < story_chapters.length; i++) {
            chapters[i].title.innerHTML = story_chapters[i].title;
            chapters[i].content.innerHTML = story_chapters[i].content;
            chapters[i].picture.src = story_chapters[i].picture;
        }

        const hero_abilities = hero_data.abilities;

        // distribuir as habilidades dinamicamente
        for (let j = 0; j < hero_abilities.length; j++) {
            abilities[j].name.innerHTML = hero_abilities[j].name;
            abilities[j].desc.innerHTML = hero_abilities[j].description;
            abilities[j].icon.src = hero_abilities[j].icon;
            abilities[j].video.src = hero_abilities[j].video.link.mp4;
        }
        
    })
}

// Classe para as habilidades
export class Ability {
    constructor(name, desc, icon, video) {
        this.name = name;
        this.desc = desc;
        this.icon = icon;
        this.video = video;
    }
}

// Classe para os capitulos da historia
export class Chapter {
    constructor(title, content, picture){
        this.title = title;
        this.content = content;
        this.picture = picture;
    }
}
