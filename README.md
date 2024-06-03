# devitworld-nodejs-basic

node.js basic tutorial repository

## Initialize Proejct

```
$ npm install express
$ npm install typescript ts-node @types/node @types/express --save-dev
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
  }
}
```
