const Jogo = {

    // atributos
    ano_de_lançamento: Number,
    nome: String,
    peso: Number,
    altura: Number,

    // this == self in python
    get_info: function() {
        return `Nome: ${this.nome} \nIdade: ${this.idade} \nPeso: ${this.peso} \nAltura: ${this.altura}`;
    }

}

const overwatch = Jogo

Daniel.idade = 21;
Daniel.nome = "Daniel Rodrigo";
Daniel.peso = 65;
Daniel.altura = 1.81;

console.log(Daniel.get_info());