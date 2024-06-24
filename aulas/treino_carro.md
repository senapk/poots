# Treinando para fazer o @carro

## Parte 1: entrar

- Crie a classe Car com os atributos pass, passMax, gas, gasMax e km;
- Inicialize os atributos no construtor: tanque vazio, 0 passageiros, 0 quilômetros percorridos, máximo de 2 pessoas, máximo de 100 litros de gasolina.
- Crie o método enter que incrementa pass;
- Crie um if para impedir que pass ultrapasse passMax;
- Crie o método toString mostrar o estado do carro no formato `pass: 0, gas: 0, km: 0`.
- Teste seu código.

## Parte 2: desembarcar

- Crie o método leave, que decrementa pass.
- Crie um condicional para impedir que pass seja menor que 0.
- Teste seu código.

## Parte 3: abastecer

- Crie o método fuel que incrementa gas com o valor passado.
- Crie um condicional para impedir que gas ultrapasse gasMax.
- Teste seu código.

## Parte 4: dirigir

- Crie o método drive que incrementa km e decrementa gas com o valor passado.
- Crie testes para impedir que o carro dirija sem passageiros ou sem combustível.
- Teste seu código.

## Parte 5: dirigir longas distâncias

- Crie testes para impedir que o carro dirija mais do que o combustível permite.
- Teste seu código.