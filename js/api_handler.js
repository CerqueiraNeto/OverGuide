// Função para consumir a API OverFast. Evita repetição de códigos.
// Parâmetros: o endpoint da api, o elemento html do portrato, o elemento html da descrição
// Retorno: Nada
export function api_call(endpoint, portrait, description) {
 
    fetch(endpoint)
    .then(res => res.json())
    .then(hero_data => {

        portrait.src = hero_data.portrait;
        description.innerHTML = hero_data.description;

    })
}
