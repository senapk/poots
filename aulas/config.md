# Configuração

<!-- toc -->
- [Entendendo as Ferramentas](#entendendo-as-ferramentas)
- [Instalando](#instalando)
  - [Ubuntu, Debian, Mint](#ubuntu-debian-mint)
  - [Arch Linux && Manjaro](#arch-linux--manjaro)
  - [Windows](#windows)
- [Rodando](#rodando)
<!-- toc -->

## Entendendo as Ferramentas

- vscode: a IDE onde você vai escrever seu código.
  - Entendendo o vscode: [link](https://github.com/senapk/fupisfun/blob/master/wiki/configure_vscode.md)
  - Plugin úteis
    - Error Lens
  - Configuração importante:
    - auto save: afterDelay
- bash: o interpretador de comandos que você vai usar para executar seus programas.
  - Entendendo o bash: [link](https://github.com/senapk/fupisfun/blob/master/wiki/configure_bash_and_git_bash.md)

## Instalando

### Ubuntu, Debian, Mint

Abra o terminal e digite

```bash
# habilitar uma versão mais recente do nodejs, a versão padrão é muito antiga
sudo apt install -y curl 
curl -sL https://deb.nodesource.com/setup_19.x | sudo -E bash - 

# Instalar o nodejs e npm
sudo apt install -y nodejs

# para testar a instalação
node -v
npm -v

# Instalar o vscode:
sudo snap install code --classic

# Instalando globalmente se você tem permissão de admin
sudo npm install -g typescript
sudo npm install -g ts-node

# Testando
tsc -v
ts-node -v
```

### Arch Linux && Manjaro

```bash
# Instalar tudo
sudo pacman -S nodejs npm typescript ts-node code

# Para testar a instalação
node -v
npm -v
tsc -v
ts-node -v
code -v
```

### Windows

- Instalar o [nodejs](https://nodejs.org/en/download/)
- Instalar o [vscode](https://code.visualstudio.com/download)
- Instalar o [Git for Windows](https://gitforwindows.org/)

Abra o Git Bash e insira esses comandos:

```bash
# Verificar se o nodejs e npm estão instalados
node -v
npm -v

# Instalar o typescript e ts-node
npm install -g typescript ts-node

# Testando
tsc -v
ts-node -v
```

## Rodando

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

