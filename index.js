class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
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
                ataque = 'ataque desconhecido';
        }

        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

function main() {
    
    const herois = [
        new Heroi("Gandalf", 300, "mago"),
        new Heroi("Aragorn", 87, "guerreiro"),
        new Heroi("Li", 45, "monge"),
        new Heroi("Shinobi", 25, "ninja"),
    ];

    for (const heroi of herois) {
        heroi.atacar();
    }
}

main();
