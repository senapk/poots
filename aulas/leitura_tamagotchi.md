# Getters e Setters em TypeScript

Em TypeScript, os getters e setters são métodos especiais que permitem controlar o acesso e a modificação de propriedades de uma classe. Eles são úteis para encapsular a lógica de acesso e modificação dos dados de um objeto, garantindo que as regras de negócio sejam respeitadas e mantendo a integridade dos dados.

## Classe Pet

Na classe Pet, os getters e setters serão utilizados para manipular os atributos privados da classe. É importante ressaltar que os getters são responsáveis apenas por retornar o valor de uma propriedade, enquanto os setters são responsáveis por definir o valor de uma propriedade.

### Exemplo de Getters

Os getters são métodos que retornam o valor de uma propriedade específica da classe. Eles permitem acessar o valor de uma propriedade sem expor diretamente o atributo correspondente.

```typescript
public getClean() {
    return this.clean;
}

public getHungry() {
    return this.hungry;
}

public getEnergy() {
    return this.energy;
}
```

Os métodos getClean(), getHungry() e getEnergy() retornam os valores das propriedades correspondentes. Eles não alteram o estado do objeto, apenas fornecem acesso aos valores.

### Exemplo de Setters

Os setters são métodos que definem o valor de uma propriedade específica da classe. Eles permitem atribuir um novo valor a uma propriedade, garantindo que as regras de negócio sejam respeitadas e que o estado do objeto seja atualizado corretamente.

```typescript
public setClean(value: number) {
    if (value <= 0) {
        this.alive = false;
        this.clean = 0;
        console.log("fail: pet morreu de sujeira");
        return;
    }
    if (value > this.cleanMax) {
        this.clean = this.cleanMax;
        return;
    }
    this.clean = value;
}
```

Os métodos setClean(), setHungry() e setEnergy() são responsáveis por definir os valores das propriedades correspondentes. Eles garantem que as regras de negócio sejam respeitadas, como limites mínimos e máximos, e que o estado do objeto seja atualizado de acordo com os valores fornecidos.

## Classe Game

Na classe Game, os getters e setters da classe Pet serão usados para interagir com o objeto pet.

Exemplo de Utilização:

```typescript
public play() {
    if (!this.testAlive()) 
        return;
    this.pet.setEnergy(this.pet.getEnergy() - 2);
    this.pet.setHungry(this.pet.getHungry() - 1);
    this.pet.setClean(this.pet.getClean() - 3);
    this.pet.setAge(this.pet.getAge() + 1);
    this.pet.setDiamonds(this.pet.getDiamonds() + 1);
}
```

O método play() da classe Game interage com o pet, usando os métodos getters e setters para modificar seus atributos com base em certas condições.

### Importância dos Getters e Setters

Ao utilizar getters e setters em TypeScript, é importante entender que uma propriedade de Pet só pode ser alterada por meio de um setter, enquanto um getter apenas retorna o valor atual da propriedade. Isso ajuda a garantir a integridade dos dados e a consistência do objeto Pet, evitando que valores inválidos sejam atribuídos às propriedades e garantindo que as regras de negócio sejam respeitadas.

Além disso, os getters e setters facilitam a manutenção do código, pois encapsulam a lógica de acesso e modificação dos dados em métodos específicos da classe. Isso torna o código mais legível, modular e fácil de entender, contribuindo para uma melhor organização e escalabilidade do projeto.

Em resumo, os getters e setters em TypeScript são uma ferramenta poderosa para controlar o acesso e a modificação de propriedades de uma classe, garantindo a integridade dos dados e facilitando a manutenção do código.