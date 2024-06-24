# Treinando para fazer o @relogio

## Parte 1: atributos públicos

- Crie a classe relógio com os atributos públicos hora, minuto e segundo.
- Crie o método construtor que inicializa os atributos com 0.
- Crie o método toString que retorna a hora no formato HH:MM:SS.
- Crie um objeto relógio, atribua valores para hora, minuto e segundo e imprima a hora.
- Atribua valores inválidos para hora, minuto e segundo e imprima a hora.

## Parte 2: atributos privados

- Torne os atributos hora, minuto e segundo privados.
- Crie os métodos getters e setters para cada atributo.
  - Nos métodos set, NÃO realize nenhuma validação.
- Crie um objeto relógio, atribua valores para hora, minuto e segundo e imprima a hora.
- Atribua valores inválidos para hora, minuto e segundo e imprima a hora.

## Parte 3: validação

- Nos métodos set, realize a validação dos valores.
  - Hora deve ser entre 0 e 23. Minuto e segundo devem ser entre 0 e 59.
- Crie um objeto relógio, atribua valores para hora, minuto e segundo e imprima a hora.
- Tente atribuir valores inválidos para hora, minuto e segundo e verifique se a hora permaneceu a mesma.

## Parte 4: construtor

- Crie um método construtor que recebe hora, minuto e segundo.
- Utilize os métodos set para fazer a inicialização dos atributos.
- Tente atribuir valores inválidos para hora, minuto e segundo através do construtor e verifique se a hora permaneceu a mesma.

## Parte 5: nextSecond

- Crie um método nextSecond que incrementa o segundo em 1.
- Crie um objeto relógio, atribua valores para hora, minuto e segundo e imprima a hora.
- Teste o método nextSecond criando horas com os seguintes valores e testando:
  - 10:02:30
  - 15:50:59
  - 21:59:59
  - 23:59:59