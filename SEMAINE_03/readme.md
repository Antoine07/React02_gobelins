# React / TypeScript / GraphQL

- Installez le projet data-analyst à l'aide la commande suivante :

```bash

npx create-react-app data-analyst --template typescript

```

- Installez le router avec les pages suivantes

## Installation du serveur

créez un dossier server à côté du projet

dans le dossier

```bahs
npm init -y

```

Dans le fichier package.json ajoutez les lignes suivantes

```json
  "type": "module",
  "exports": "./dist/index.js",
  "scripts": {
    "dev": "nodemon --watch './**/*.ts' --exec 'node --experimental-specifier-resolution=node --loader ts-node/esm' src/index.ts",
    "start": "node dist/src/index.js"
  },
```

Les dépendances

```bash
npm install @apollo/server
npm install graphql

```

Les dépendances dev

```bash
  npm install typescript --dev
  npm install @types/node --dev
  npm install ts-node-dev --dev

```

Avec typescript vous avez un fichier de configuration pour typescript propre

```json
{
  "compilerOptions": {
    "rootDirs": ["src"],
    "outDir": "dist",
    "lib": ["es2020"],
    "target": "es2020",
    "module": "esnext",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "types": ["node"]
  }
}
```
