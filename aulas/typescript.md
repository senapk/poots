# typescript

<!-- toc -->
<!-- toc -->

## ts: Windows

Abra o Git Bash e insira esses comandos:

```bash
# Verificar se o nodejs e npm estão instalados
node -v
npm -v

# Instalar o typescript e ts-node
npm install -g typescript ts-node esbuild

# Habilitar a execução de scripts
Set-ExecutionPolicy Unrestricted

# Testando
tsc -v
ts-node -v
```

## ts: Debian
  
```bash
# Instalando globalmente se você tem permissão de admin
sudo npm install -g typescript ts-node esbuild

# Testando
tsc -v
ts-node -v
```

## Rodando projetos modo texto

- Abra o vscode
  - Escolha Abrir Pasta, e abra a pasta onde você vai salvar seus projetos.
- Crie um arquivo chamado `ola.ts` com o seguinte conteúdo:

```typescript
console.log("Olá Mundo");
```

- Abra o terminal (ctrl+shift+`)
  - Selecione o terminal bash
- Digite o comando `ts-node ola.ts`
  - Se tudo deu certo, você deve ver a mensagem `Olá Mundo` no terminal.

## Configurando um projeto Typescript com P5

- Você pode seguir as instruções [aqui](https://github.com/senapk/p5ts)
- Ou seguir o guia rápido nos links abaixo:

```bash

# baixe o repositório
git clone https://github.com/senapk/p5ts

# entre na pasta
cd p5ts

# instale os módulos
npm install

# abra o vscode na pasta
code .

# dentro do terminal do vscode inicie o processo
npm start

```

## Para quem usa Arch

Para quem usa Arch Linux ou Manjaro, a instalação de tudo é uma única linha:

```bash
sudo pacman -S nodejs npm typescript ts-node esbuild code
```
