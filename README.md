# devitworld-nodejs-basic

node.js basic tutorial repository

## Initialize Proejct

```
$ npm init -y
$ npm install express
$ npm install typescript ts-node ts-node-dev @types/node @types/express --save-dev
$ tsc --init
```

## Basic Setting

### tsconfig.json

```
{
  "compilerOptions":
  {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}
```

### package.json

```
{
  "scripts":
  {
    "start": "ts-node src/index.ts",
    or
    "start": "nodemon --watch 'src/**/*.ts' --exec 'ts-node' src/index.ts"
  }
}
```

## tree

tree -I 'node_modules|dist'
