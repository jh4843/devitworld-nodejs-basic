# devitworld-nodejs-basic

node.js basic tutorial repository

## basic install
```
$ npm install -g nodemon
```

## Initialize Proejct

```
$ npm init -y
$ npm install express
$ npm install typescript tsx @types/node @types/express --save-dev
$ npx tsc --init
```

## Test 시 설치

```
$ npm install --save-dev mocha chai @types/mocha @types/chai
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
    "start": "nodemon --exec ts-node src/app.ts"
  }
}
```

### package

```
$ npm install -g pkg
```

## tree

tree -I 'node_modules|dist'

```
devitworld-nodejs-basic
├─ .filegeneratorrc
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ objects
│  │  ├─ 0f
│  │  │  └─ 5ea04b612178c38a57cb57c7eaa539876098a0
│  │  ├─ 13
│  │  │  └─ e8fe0af451be01ffbe35b44982709a63a8e835
│  │  ├─ 1d
│  │  │  └─ bf7cb7ff67b9cfff819e2554d8540fd37e56e5
│  │  ├─ 20
│  │  │  └─ 4d67e1002a3b8d06092639fbbb1bc601f589d6
│  │  ├─ 21
│  │  │  └─ 838ca6ef6d6e4a27ac672e2f47406076b84e97
│  │  ├─ 22
│  │  │  └─ 70cffe39ab93c6897eb64be7e23cda0abf2600
│  │  ├─ 29
│  │  │  └─ f55c5e9e3c3325e3721fc90959fa4f4513a2c0
│  │  ├─ 2e
│  │  │  └─ 3b3bac48f1d8995573334a3a49bf4c58891cb5
│  │  ├─ 33
│  │  │  └─ 9e1d23fc6db4858f4f5c862369e378a4c5650c
│  │  ├─ 45
│  │  │  └─ 2866bc590e31e75a51f4781dc14a841213aad8
│  │  ├─ 4a
│  │  │  └─ 4215df31d56cd8cc1fc18bf304f23bc29be435
│  │  ├─ 4e
│  │  │  └─ 536a15eb62a20e6c662efdc0c7cc258a394e4f
│  │  ├─ 56
│  │  │  └─ 6aab1c8eced6efa747cb54fc09c39df558a47d
│  │  ├─ 5d
│  │  │  └─ ee39952496daa2cc61e3f972da0bbdfe1fd1e9
│  │  ├─ 6a
│  │  │  └─ 2718d802a165aaa36359d4b7e3d579fe042238
│  │  ├─ 72
│  │  │  └─ 0d6e13604093d9e5df1143122e829218d78972
│  │  ├─ 75
│  │  │  ├─ 1e481bd5c7427a7e22528f6b0fa38513da84f1
│  │  │  └─ 333f26b02443610cfe4873b3be10b6e8ff23a2
│  │  ├─ 78
│  │  │  └─ 907a090cbe429d436ed41ff452ec652e5303cc
│  │  ├─ 7c
│  │  │  └─ 89d2c51e8cda0ad586716e8c33478283103b6a
│  │  ├─ 8f
│  │  │  └─ 67b505870aacac396be7055f2ccbb8cc262773
│  │  ├─ c5
│  │  │  └─ a084043fb2745908e17871ce266515f51d1e16
│  │  ├─ c7
│  │  │  └─ f711e6d23bf25f99b1a567140bb0a981d3fb28
│  │  ├─ c9
│  │  │  └─ 8978159324f6c3a8ba10fc729cae6593cb9de3
│  │  ├─ dc
│  │  │  └─ dd430591d2754ad3ed8520b5d8adb83eba782d
│  │  ├─ e2
│  │  │  └─ 7c4229b27949400421fe6a94c08e1b70cf9ff0
│  │  ├─ e5
│  │  │  └─ ba314bb71c4528481092a4603af78109c3e8df
│  │  ├─ ee
│  │  │  └─ 0a25b19838181f19d07de060dfac7830085d80
│  │  ├─ ef
│  │  │  └─ df635980b1e848e04b830c26c47699e1fbbff9
│  │  ├─ info
│  │  └─ pack
│  │     ├─ pack-2d63fba63f6f3a930ec86f33797be047f896ffbf.idx
│  │     ├─ pack-2d63fba63f6f3a930ec86f33797be047f896ffbf.pack
│  │     └─ pack-2d63fba63f6f3a930ec86f33797be047f896ffbf.rev
│  ├─ ORIG_HEAD
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     ├─ HEAD
│     │     └─ main
│     └─ tags
├─ .gitignore
├─ .vscode
│  └─ launch.json
├─ 01-first-app
│  └─ app.js
├─ 02_01_commonjs_module
│  ├─ app.js
│  ├─ module_math.js
│  └─ package.json
├─ 02_02_es6_module copy
│  ├─ app.js
│  ├─ module_math.mjs
│  └─ package.json
├─ 03_typescript
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ src
│  │  ├─ app.ts
│  │  ├─ config
│  │  │  └─ dbConfig.ts
│  │  ├─ controllers
│  │  │  └─ userController.ts
│  │  ├─ index.ts
│  │  ├─ middlewares
│  │  │  └─ authMiddleware.ts
│  │  ├─ models
│  │  │  └─ userModel.ts
│  │  ├─ services
│  │  │  └─ userService.ts
│  │  └─ utils
│  │     └─ logger.ts
│  └─ tsconfig.json
├─ 04_express_app
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ src
│  │  └─ index.ts
│  └─ tsconfig.json
├─ 05_02_middleware
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ src
│  │  ├─ app.ts
│  │  ├─ middlewares
│  │  │  ├─ checkAuth.ts
│  │  │  ├─ dataParsers.ts
│  │  │  ├─ errorHandler.ts
│  │  │  └─ requestLogger.ts
│  │  └─ server.ts
│  └─ tsconfig.json
├─ 06_database_mongo
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ src
│  │  ├─ app.ts
│  │  └─ models
│  │     └─ User.ts
│  └─ tsconfig.json
├─ 07_02_auth_jwt
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ src
│  │  ├─ app.ts
│  │  ├─ middleware
│  │  │  └─ authMiddleware.ts
│  │  ├─ types
│  │  │  └─ express
│  │  │     └─ index.d.ts
│  │  └─ utils
│  │     └─ jwt.ts
│  └─ tsconfig.json
├─ 07_auth_session_cookie
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ src
│  │  ├─ app.ts
│  │  └─ types
│  │     └─ express-session
│  │        └─ index.d.ts
│  └─ tsconfig.json
├─ 08_websocket_client
│  ├─ nodemon.json
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ README.md
│  ├─ src
│  │  └─ client.ts
│  └─ tsconfig.json
├─ 08_websocket_server
│  ├─ nodemon.json
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ README.md
│  ├─ src
│  │  └─ server.ts
│  └─ tsconfig.json
├─ 09_test_mocha
│  ├─ .gitignore
│  ├─ .vscode
│  │  └─ launch.json
│  ├─ filegeneratorrc
│  ├─ nodemon.json
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ src
│  │  └─ app.ts
│  ├─ test
│  │  └─ app.spec.ts
│  └─ tsconfig.json
├─ 10_package
│  ├─ .gitignore
│  ├─ .vscode
│  │  └─ launch.json
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ src
│  │  └─ app.ts
│  ├─ test
│  │  └─ app.spec.ts
│  └─ tsconfig.json
└─ README.md

```
```
devitworld-nodejs-basic
├─ .filegeneratorrc
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ objects
│  │  ├─ 0f
│  │  │  └─ 5ea04b612178c38a57cb57c7eaa539876098a0
│  │  ├─ 13
│  │  │  └─ e8fe0af451be01ffbe35b44982709a63a8e835
│  │  ├─ 1d
│  │  │  └─ bf7cb7ff67b9cfff819e2554d8540fd37e56e5
│  │  ├─ 20
│  │  │  └─ 4d67e1002a3b8d06092639fbbb1bc601f589d6
│  │  ├─ 21
│  │  │  └─ 838ca6ef6d6e4a27ac672e2f47406076b84e97
│  │  ├─ 22
│  │  │  └─ 70cffe39ab93c6897eb64be7e23cda0abf2600
│  │  ├─ 29
│  │  │  └─ f55c5e9e3c3325e3721fc90959fa4f4513a2c0
│  │  ├─ 2e
│  │  │  └─ 3b3bac48f1d8995573334a3a49bf4c58891cb5
│  │  ├─ 33
│  │  │  └─ 9e1d23fc6db4858f4f5c862369e378a4c5650c
│  │  ├─ 45
│  │  │  └─ 2866bc590e31e75a51f4781dc14a841213aad8
│  │  ├─ 4a
│  │  │  └─ 4215df31d56cd8cc1fc18bf304f23bc29be435
│  │  ├─ 4e
│  │  │  └─ 536a15eb62a20e6c662efdc0c7cc258a394e4f
│  │  ├─ 56
│  │  │  └─ 6aab1c8eced6efa747cb54fc09c39df558a47d
│  │  ├─ 5d
│  │  │  └─ ee39952496daa2cc61e3f972da0bbdfe1fd1e9
│  │  ├─ 6a
│  │  │  └─ 2718d802a165aaa36359d4b7e3d579fe042238
│  │  ├─ 72
│  │  │  └─ 0d6e13604093d9e5df1143122e829218d78972
│  │  ├─ 75
│  │  │  ├─ 1e481bd5c7427a7e22528f6b0fa38513da84f1
│  │  │  └─ 333f26b02443610cfe4873b3be10b6e8ff23a2
│  │  ├─ 78
│  │  │  └─ 907a090cbe429d436ed41ff452ec652e5303cc
│  │  ├─ 7c
│  │  │  └─ 89d2c51e8cda0ad586716e8c33478283103b6a
│  │  ├─ 8f
│  │  │  └─ 67b505870aacac396be7055f2ccbb8cc262773
│  │  ├─ c5
│  │  │  └─ a084043fb2745908e17871ce266515f51d1e16
│  │  ├─ c7
│  │  │  └─ f711e6d23bf25f99b1a567140bb0a981d3fb28
│  │  ├─ c9
│  │  │  └─ 8978159324f6c3a8ba10fc729cae6593cb9de3
│  │  ├─ dc
│  │  │  └─ dd430591d2754ad3ed8520b5d8adb83eba782d
│  │  ├─ e2
│  │  │  └─ 7c4229b27949400421fe6a94c08e1b70cf9ff0
│  │  ├─ e5
│  │  │  └─ ba314bb71c4528481092a4603af78109c3e8df
│  │  ├─ ee
│  │  │  └─ 0a25b19838181f19d07de060dfac7830085d80
│  │  ├─ ef
│  │  │  └─ df635980b1e848e04b830c26c47699e1fbbff9
│  │  ├─ info
│  │  └─ pack
│  │     ├─ pack-2d63fba63f6f3a930ec86f33797be047f896ffbf.idx
│  │     ├─ pack-2d63fba63f6f3a930ec86f33797be047f896ffbf.pack
│  │     └─ pack-2d63fba63f6f3a930ec86f33797be047f896ffbf.rev
│  ├─ ORIG_HEAD
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     ├─ HEAD
│     │     └─ main
│     └─ tags
├─ .gitignore
├─ .vscode
│  └─ launch.json
├─ 01-first-app
│  └─ app.js
├─ 02_01_commonjs_module
│  ├─ app.js
│  ├─ module_math.js
│  └─ package.json
├─ 02_02_es6_module copy
│  ├─ app.js
│  ├─ module_math.mjs
│  └─ package.json
├─ 03_typescript
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ src
│  │  ├─ app.ts
│  │  ├─ config
│  │  │  └─ dbConfig.ts
│  │  ├─ controllers
│  │  │  └─ userController.ts
│  │  ├─ index.ts
│  │  ├─ middlewares
│  │  │  └─ authMiddleware.ts
│  │  ├─ models
│  │  │  └─ userModel.ts
│  │  ├─ services
│  │  │  └─ userService.ts
│  │  └─ utils
│  │     └─ logger.ts
│  └─ tsconfig.json
├─ 04_express_app
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ src
│  │  └─ index.ts
│  └─ tsconfig.json
├─ 05_02_middleware
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ src
│  │  ├─ app.ts
│  │  ├─ middlewares
│  │  │  ├─ checkAuth.ts
│  │  │  ├─ dataParsers.ts
│  │  │  ├─ errorHandler.ts
│  │  │  └─ requestLogger.ts
│  │  └─ server.ts
│  └─ tsconfig.json
├─ 06_database_mongo
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ src
│  │  ├─ app.ts
│  │  └─ models
│  │     └─ User.ts
│  └─ tsconfig.json
├─ 07_02_auth_jwt
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ src
│  │  ├─ app.ts
│  │  ├─ middleware
│  │  │  └─ authMiddleware.ts
│  │  ├─ types
│  │  │  └─ express
│  │  │     └─ index.d.ts
│  │  └─ utils
│  │     └─ jwt.ts
│  └─ tsconfig.json
├─ 07_auth_session_cookie
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ src
│  │  ├─ app.ts
│  │  └─ types
│  │     └─ express-session
│  │        └─ index.d.ts
│  └─ tsconfig.json
├─ 08_websocket_client
│  ├─ nodemon.json
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ README.md
│  ├─ src
│  │  └─ client.ts
│  └─ tsconfig.json
├─ 08_websocket_server
│  ├─ nodemon.json
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ README.md
│  ├─ src
│  │  └─ server.ts
│  └─ tsconfig.json
├─ 09_test_mocha
│  ├─ .gitignore
│  ├─ .vscode
│  │  └─ launch.json
│  ├─ filegeneratorrc
│  ├─ nodemon.json
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ src
│  │  └─ app.ts
│  ├─ test
│  │  └─ app.spec.ts
│  └─ tsconfig.json
├─ 10_package
│  ├─ .gitignore
│  ├─ .vscode
│  │  └─ launch.json
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ README.md
│  ├─ src
│  │  └─ app.ts
│  ├─ test
│  │  └─ app.spec.ts
│  └─ tsconfig.json
└─ README.md

```