# Modificadores de acesso e a classe Adapter

<!-- toc -->
- [Modificadores de Acesso](#modificadores-de-acesso)
- [A Classe Adapter](#a-classe-adapter)

<!-- toc -->

## Modificadores de Acesso

TypeScript oferece modificadores de acesso para controlar a visibilidade das propriedades e métodos de uma classe.

public: (padrão) Propriedades e métodos são acessíveis de qualquer lugar.
private: Propriedades e métodos são acessíveis apenas dentro da classe.

```typescript
class Animal {
  public nome: string;
  private idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  public getIdade(): number {
    return this.idade;
  }
}

const animal1 = new Animal('Elefante', 10);
console.log(animal1.nome); // Saída: Elefante
console.log(animal1.getIdade()); // Saída: 10
// console.log(animal1.idade); // Erro: 'idade' é privada e não pode ser acessada
```

## A Classe adapter

A classe Adapter serve como uma ponte para interagir com a classe Animal. Ela facilita a manipulação dos objetos Animal sem precisar se preocupar com os detalhes internos.

### Função da Classe Adapter

Encapsulamento: A classe Adapter cria e controla um objeto Animal, protegendo a forma como interagimos com ele.

```typescript
class Adapter {
    animal: Animal;

    constructor(especie: string, barulho: string) {
        this.animal = new Animal(especie, barulho);
    }
}
```

### Facilidade de Uso: A Adapter oferece métodos simples para interagir com o Animal:

grow: Aumenta a idade do animal.

```typescript
grow(qtd: number): void {
    this.animal.envelhecer(qtd);
}
```

noise: Retorna o barulho que o animal faz, dependendo da idade dele.

```typescript
noise(): string {
    return this.animal.fazerBarulho();
}
```

show: Retorna uma representação em texto do estado do animal.

```typescript
show(): string {
    return this.animal.toString();
}
```

### Exemplo de Uso

A função main mostra como a classe Adapter é usada para controlar um Animal através de comandos:

```typescript
function main(): void {
    let adp: Adapter = new Adapter("", "");

    while (true) {
        const line: string = input();
        const args: string[] = line.split(' ');
        write("$" + line);

        if      (args[0] === "end"  ) { break;                               }
        else if (args[0] === "init" ) { adp = new Adapter(args[1], args[2]); }
        else if (args[0] === "grow" ) { adp.grow(parseInt(args[1]));         }
        else if (args[0] === "noise") { write(adp.noise());                  }
        else if (args[0] === "show" ) { write(adp.show());                   }
        else                          { write("fail: comando invalido");     }
    }
}

main();
```

### Benefícios da Classe Adapter

1. Isolamento: Mudanças na classe Animal não afetam o resto do código que usa Adapter.
2. Controle: A Adapter pode adicionar regras ao interagir com Animal, como impedir que a idade passe de um certo limite.
3. Facilidade de Manutenção: Torna o código mais fácil de entender e modificar, pois oferece uma interface simples para operações complexas.

A classe Adapter é um exemplo de como criar uma camada intermediária para interagir com outra classe, facilitando a manipulação e proteção dos dados e comportamentos internos.