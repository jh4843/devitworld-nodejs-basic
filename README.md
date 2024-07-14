# devitworld-nodejs-basic

node.js basic tutorial repository

## Initialize Proejct

```
$ npm init -y
$ npm install express
$ npm install typescript ts-node ts-node-dev @types/node @types/express --save-dev
$ npx tsc --init
```

## Test 시 설치

$ npm install --save-dev mocha chai @types/mocha @types/chai

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
    "start": "nodemon"
  }
}
```

## tree

tree -I 'node_modules|dist'
