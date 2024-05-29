# Imprimindo mensagens e usando o return

## Imprimir Mensagens em TypeScript

Em TypeScript, assim como em JavaScript, você pode imprimir mensagens no console usando o método console.log(). Este método aceita qualquer número de argumentos e os imprime no console do navegador ou terminal.

Por exemplo, no seu código:

``` typescript
console.log("fail: limite de pessoas atingido");
```

Esta linha imprimirá a mensagem "fail: limite de pessoas atingido" no console quando o método enter() for chamado e o limite de passageiros for atingido.

## Palavra-chave return em TypeScript

A palavra-chave return é usada para especificar o valor retornado por uma função ou método. Em TypeScript, como em muitas outras linguagens, uma função pode retornar um valor usando return. Quando a palavra-chave return é usada dentro de uma função, ela imediatamente encerra a execução da função e retorna o valor especificado.

No seu código, você usará return principalmente para encerrar a execução de um método assim que uma condição específica for atendida. Por exemplo:

``` typescript
enter(): void {
    if (this.pass < this.passMax) {
        this.pass += 1;
        return; // Encerra a execução do método após aumentar o número de passageiros
    }
    console.log("fail: limite de pessoas atingido");
}
```

Neste trecho, se o número de passageiros for menor que o limite máximo, um passageiro é adicionado e o método enter() retorna imediatamente, encerrando assim a execução do método.

A palavra-chave return também pode ser usada para retornar um valor específico de uma função. Por exemplo:

``` typescript
add(a: number, b: number): number {
    return a + b; // Retorna a soma de a e b
}
```

Neste caso, a função add retorna a soma dos seus dois argumentos, a e b. O tipo de retorno da função é especificado após os parênteses de fechamento, neste caso number, indicando que a função retornará um número.