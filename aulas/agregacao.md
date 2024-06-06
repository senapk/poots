# Agregação em typescript

A agregação é um dos conceitos fundamentais da programação orientada a objetos (POO) e refere-se a um tipo específico de associação entre objetos, onde um objeto (o "todo") é composto por outros objetos (as "partes"). No contexto do TypeScript, a agregação é usada para expressar que um objeto contém ou é composto por outros objetos, mas os objetos componentes podem existir independentemente do objeto agregado.

Para ilustrar o conceito de agregação em TypeScript, considere o seguinte exemplo:

## Exemplo de Agregação em TypeScript

Imagine que temos uma classe Departamento e uma classe Funcionario. Um departamento pode ter vários funcionários, mas um funcionário pode existir fora de um departamento.

```typescript
class Funcionario {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    mostrarInfo(): void {
        console.log(`Funcionário: ${this.nome}`);
    }
}

class Departamento {
    nome: string;
    funcionarios: Funcionario[];

    constructor(nome: string) {
        this.nome = nome;
        this.funcionarios = [];
    }

    adicionarFuncionario(funcionario: Funcionario): void {
        this.funcionarios.push(funcionario);
    }

    mostrarInfo(): void {
        console.log(`Departamento: ${this.nome}`);
        this.funcionarios.forEach(funcionario => funcionario.mostrarInfo());
    }
}

// Criando instâncias de Funcionario
let func1 = new Funcionario("Alice");
let func2 = new Funcionario("Bob");

// Criando uma instância de Departamento
let departamento = new Departamento("Recursos Humanos");

// Adicionando funcionários ao departamento
departamento.adicionarFuncionario(func1);
departamento.adicionarFuncionario(func2);

// Mostrando informações do departamento e dos funcionários
departamento.mostrarInfo();
```

## Explicação do Exemplo

1. Classe Funcionario: Define um funcionário com um nome e um método mostrarInfo para exibir informações sobre o funcionário.
2. Classe Departamento: Define um departamento que contém uma lista de funcionários. Possui métodos para adicionar funcionários (adicionarFuncionario) e para mostrar informações sobre o departamento e seus funcionários (mostrarInfo).
3. Agregação: O departamento agrega (ou contém) vários funcionários. A relação é de agregação porque os funcionários podem existir independentemente do departamento. Se o departamento for destruído, os objetos Funcionario ainda podem existir.

## Diferença entre Agregação e Composição

Agregação: Os objetos componentes podem existir independentemente do objeto agregado. No exemplo acima, Funcionario pode existir sem Departamento.
Composição: Os objetos componentes dependem fortemente do objeto todo. Se o objeto todo for destruído, os componentes também são. Por exemplo, uma Carro que tem um Motor e Rodas que não têm sentido fora do contexto do Carro.
No TypeScript, a diferença entre agregação e composição é mais uma questão de design e entendimento do domínio do problema, já que ambas podem ser implementadas de forma semelhante no código, mas com diferentes implicações de dependência e ciclo de vida dos objetos.