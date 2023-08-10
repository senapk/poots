# Configuração

## Configurações sugeridas para o vscode

- Plugin
  - Error Lens
- Configuração:
  - auto save: afterDelay

## Ubuntu, Debian, Mint

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

## Arch Linux && Manjaro

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

## Windows

- Instalar o [nodejs](https://nodejs.org/en/download/)
- Instalar o [vscode](https://code.visualstudio.com/download)
- Instalar o [Git for Windows](https://gitforwindows.org/)

Abra o Git Bash

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
