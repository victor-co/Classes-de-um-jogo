class Heroi {
    constructor (nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar () {
        let ataque;

        switch (this.tipo){
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'poder desconhecido';
        }
        console.log(`O ${this.tipo} ${this.nome}, com ${this.idade} anos, atacou usando ${ataque}`);
    }

}

const mago = new Heroi ('Gandalf', 180, 'mago')
const guerreiro = new Heroi ('Eren', 25, 'guerreiro')
const monge = new Heroi ('Shaolin', 100, 'monge')
const ninja = new Heroi ('Naruto', 25, 'ninja')

mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();
