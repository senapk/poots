# Getters e Setters em TypeScript

Em TypeScript, os getters e setters são métodos especiais que permitem controlar o acesso e a modificação de propriedades de uma classe. Eles são úteis para encapsular a lógica de acesso e modificação dos dados de um objeto, garantindo que as regras de negócio sejam respeitadas e mantendo a integridade dos dados.

## Classe Time

Na classe Time, os getters e setters serão utilizados para manipular os atributos privados da classe. É importante ressaltar que os getters são responsáveis apenas por retornar o valor de uma propriedade, enquanto os setters são responsáveis por definir o valor de uma propriedade.

### Exemplo de Getters

Os getters são métodos que retornam o valor de uma propriedade específica da classe. Eles permitem acessar o valor de uma propriedade sem expor diretamente o atributo correspondente.

```typescript
getHour(): number {
    return this.hour;
}
```

Os métodos getHour(), getMinute() e getSecond() retornam os valores das propriedades correspondentes. Eles não alteram o estado do objeto, apenas fornecem acesso aos valores.

### Exemplo de Setters

Os setters são métodos que definem o valor de uma propriedade específica da classe. Eles permitem atribuir um novo valor a uma propriedade, garantindo que as regras de negócio sejam respeitadas e que o estado do objeto seja atualizado corretamente.

```typescript
setHour(hour: number): void {
    if (hour < 0 || hour > 23) {
        console.log("fail: hora inválida");
        return;
    }
    this.hour = hour;
}
```

Os métodos setHour(), setMinute() e setSecond() são responsáveis por definir os valores das propriedades correspondentes. Eles garantem que as regras de negócio sejam respeitadas, como limites mínimos e máximos, e que o estado do objeto seja atualizado de acordo com os valores fornecidos.

## Importância dos Getters e Setters

Ao utilizar getters e setters em TypeScript, é importante entender que uma propriedade da classe Time só pode ser alterada por meio de um setter, enquanto um getter apenas retorna o valor atual da propriedade. Isso ajuda a garantir a integridade dos dados e a consistência do objeto Time, evitando que valores inválidos sejam atribuídos às propriedades e garantindo que as regras de negócio sejam respeitadas.

Além disso, os getters e setters facilitam a manutenção do código, pois encapsulam a lógica de acesso e modificação dos dados em métodos específicos da classe. Isso torna o código mais legível, modular e fácil de entender, contribuindo para uma melhor organização e escalabilidade do projeto.

Em resumo, os getters e setters em TypeScript são uma ferramenta poderosa para controlar o acesso e a modificação de propriedades de uma classe, garantindo a integridade dos dados e facilitando a manutenção do código.