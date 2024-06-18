// Função para consumir a API OverFast. Evita repetição de códigos.
// Parâmetros: o endpoint da api, o elemento html do portrato, o elemento html da descrição
// Retorno: Nada
export function api_call(endpoint, name, description, portrait, role, location, birthday, age, hitpoints) {
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
        ;
    })
}