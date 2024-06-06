# Métodos de Manipulação de Arrays

Para entender os métodos .map, .join e o uso de \n no contexto da programação orientada a objetos em TypeScript, vamos analisar o método toString da classe Mercantil.

## Método toString da Classe Mercantil

```typescript
toString(): string {
    let caixas = this.caixas
                .map(x => x == null ? "-----" : x.getNome())
                .join(", ");
    let espera = this.espera
                .map(x => x.getNome())
                .join(", ");
    return "Caixas: [" + caixas + "]\nEspera: [" + espera + "]";
}
```

### .map

O método .map é utilizado para transformar os elementos de um array, criando um novo array com os resultados da transformação aplicada a cada elemento do array original.

No método toString, temos dois usos de .map:

1. Transformação dos elementos do array caixas:

```typescript
let caixas = this.caixas
            .map(x => x == null ? "-----" : x.getNome())
```

Aqui, this.caixas é um array de Pessoa | null. O método .map percorre cada elemento x do array:

Se x for null, substitui por "-----".
Caso contrário, substitui pelo resultado do método getNome() do objeto Pessoa.

2. Transformação dos elementos do array espera:

```typescript
let espera = this.espera
            .map(x => x.getNome())
```

Aqui, this.espera é um array de Pessoa. O método .map percorre cada elemento x do array e substitui pelo resultado do método getNome() do objeto Pessoa.

### .join
 
O método .join é utilizado para concatenar todos os elementos de um array em uma única string, separando os elementos por um delimitador especificado.

No método toString, temos dois usos de .join:

Concatenar os elementos do array transformado caixas:

```typescript
let caixasStr = caixas.join(", ");
```

Aqui, .join(", ") junta todos os elementos do array caixas em uma única string, separando-os por ", ".

Concatenar os elementos do array transformado espera:

```typescript
let esperaStr = espera.join(", ");
```

Aqui, .join(", ") junta todos os elementos do array espera em uma única string, separando-os por ", ".

### \n

O \n é um caractere de nova linha utilizado para separar as linhas em uma string. No método toString, \n é usado para separar a linha que mostra o estado dos caixas da linha que mostra a fila de espera:

```typescript
return "Caixas: [" + caixas + "]\nEspera: [" + espera + "]";
```

Aqui, \n insere uma nova linha entre "Caixas: [" + caixas + "] e "Espera: [" + espera + "]", formatando a saída para que cada seção seja exibida em uma linha separada.

### Resumo
.map: Transforma os elementos de um array, aplicando uma função a cada elemento e retornando um novo array com os resultados.
.join: Concatena os elementos de um array em uma única string, usando um delimitador especificado para separar os elementos.
\n: Insere uma nova linha em uma string, permitindo formatar a saída em múltiplas linhas.
Esses métodos são úteis para manipular e formatar dados em arrays, especialmente quando queremos gerar representações textuais de objetos em programação orientada a objetos.