# Herança em TypeScript

Herança é um dos pilares da programação orientada a objetos (POO). Em TypeScript, a herança permite que uma classe (chamada de classe derivada ou subclasse) herde propriedades e métodos de outra classe (chamada de classe base ou superclasse). Isso promove a reutilização de código e a criação de estruturas mais organizadas e fáceis de manter.

## Exemplo de Herança 

### Classe Base: Veiculo

A classe Veiculo é uma classe abstrata que define a estrutura comum para diferentes tipos de veículos. Ela possui atributos e métodos que serão compartilhados pelas subclasses.

```typescript
abstract class Veiculo {
    private id: string;
    protected tipo: string;
    protected entrada: number;
    
    constructor(id: string) {
        this.id = id;
        this.tipo = "";
        this.entrada = 0;
    }

    setEntrada(entrada: number): void {
        this.entrada = entrada;
    }

    getEntrada(): number {
        return this.entrada;
    }

    getTipo(): string {
        return this.tipo;
    }

    getId(): string {
        return this.id;
    }

    toString(): string {
        return this.tipo.padStart(10, "_") + " : " + this.id.padStart(10, "_") + " : " + this.entrada;
    }

    abstract calcularValor(saida: number): number;
}
```

#### Atributos

id: Identificador do veículo.

tipo: Tipo do veículo (ex.: Bike, Moto, Carro).

entrada: Hora de entrada do veículo.

#### Métodos

Métodos para obter e definir id, tipo e entrada.

toString(): Método para retornar uma representação textual do veículo.

calcularValor(saida: number): Método abstrato que deve ser implementado pelas subclasses para calcular o valor a ser cobrado com base na hora de saída.

### Subclasse: Bike

A classe Bike herda da classe Veiculo e implementa o método calcularValor.

```typescript
class Bike extends Veiculo {
    constructor(id: string) {
        super(id);
        this.tipo = "Bike";
    }

    calcularValor(saida: number): number {
        return 3;
    }
}
```

#### Construtor

Chama o construtor da classe base Veiculo usando super(id) e define o tipo como "Bike".

#### Método calcularValor

Implementa o cálculo específico para bicicletas, retornando um valor fixo de 3.

## Benefícios da Herança

1. Reutilização de Código: As subclasses Bike, Moto e Carro reutilizam o código da classe base Veiculo, evitando duplicação de código.
2. Extensibilidade: É fácil adicionar novos tipos de veículos no futuro, criando novas subclasses que herdam de Veiculo.
3. Organização: A estrutura do código é mais clara e organizada, com funcionalidades comuns centralizadas na classe base e funcionalidades específicas implementadas nas subclasses.

### Resumo

A herança em TypeScript permite que uma classe (subclasse) herde propriedades e métodos de outra classe (superclasse). No exemplo fornecido, a classe Veiculo define a estrutura comum para diferentes tipos de veículos, e as subclasses Bike, Moto e Carro herdam dessa classe e implementam seus próprios comportamentos específicos. A herança promove a reutilização de código, extensibilidade e organização do código, facilitando a manutenção e a escalabilidade.