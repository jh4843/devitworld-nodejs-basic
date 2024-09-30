# 프로젝트 초기화
npm init -y

# 필수 패키지 설치
npm install express ws https

# 개발용 패키지 설치
## for basic 
npm install express ws https
npm install typescript ts-node tsx nodemon @types/node @types/express @types/ws --save-dev

## for package
npm install -g pkg
npm install --save-dev pkg

## for test
npm install --save-dev mocha chai
npm install --save-dev @types/mocha @types/chai

## for websocket
npm install utf-8-validate bufferutil --save

## for AsyncApi
npm install @asyncapi/generator @asyncapi/html-template --save-dev

## for webpack
npm install concurrently --save-dev
npm install webpack webpack-cli webpack-dev-server --save-dev

# TypeScript 설정 파일 생성
tsc --init

## for document
문서는 markdown(.md)로 작성된다.
ctrl + shfit + P 누른 후, markdown PDF -> export 선택하여 export할 수 있다.

```
vx.web.app
├─ .vscode
│  └─ launch.json
├─ CodingConvention.md
├─ nodemon.json
├─ ormconfig.json
├─ package-lock.json
├─ package.json
├─ public
│  ├─ asyncapi-docs
│  │  ├─ css
│  │  │  ├─ asyncapi.min.css
│  │  │  └─ global.min.css
│  │  ├─ index.html
│  │  └─ js
│  │     └─ asyncapi-ui.min.js
│  └─ settings
│     ├─ .last_build_id
│     ├─ assets
│     │  ├─ AssetManifest.bin
│     │  ├─ AssetManifest.bin.json
│     │  ├─ AssetManifest.json
│     │  ├─ FontManifest.json
│     │  ├─ fonts
│     │  │  └─ MaterialIcons-Regular.otf
│     │  ├─ NOTICES
│     │  ├─ packages
│     │  │  └─ cupertino_icons
│     │  │     └─ assets
│     │  │        └─ CupertinoIcons.ttf
│     │  └─ shaders
│     │     └─ ink_sparkle.frag
│     ├─ canvaskit
│     │  ├─ canvaskit.js
│     │  ├─ canvaskit.js.symbols
│     │  ├─ canvaskit.wasm
│     │  ├─ chromium
│     │  │  ├─ canvaskit.js
│     │  │  ├─ canvaskit.js.symbols
│     │  │  └─ canvaskit.wasm
│     │  ├─ skwasm.js
│     │  ├─ skwasm.js.symbols
│     │  ├─ skwasm.wasm
│     │  └─ skwasm.worker.js
│     ├─ favicon.png
│     ├─ flutter.js
│     ├─ flutter_bootstrap.js
│     ├─ flutter_service_worker.js
│     ├─ icons
│     │  ├─ Icon-192.png
│     │  ├─ Icon-512.png
│     │  ├─ Icon-maskable-192.png
│     │  └─ Icon-maskable-512.png
│     ├─ index.html
│     ├─ main.dart.js
│     ├─ manifest.json
│     └─ version.json
├─ README.md
├─ server.cert
├─ server.key
├─ src
│  ├─ app.ts
│  ├─ database
│  │  └─ index.ts
│  ├─ entity
│  │  ├─ Patient.ts
│  │  └─ Study.ts
│  ├─ middlewares
│  │  └─ validators
│  │     ├─ patientValidator.ts
│  │     └─ studyValidator.ts
│  ├─ routes
│  │  ├─ patientRoutes.ts
│  │  └─ studyRoutes.ts
│  ├─ services
│  │  ├─ patientService.ts
│  │  └─ studyService.ts
│  └─ utils
│     └─ webSocketUtils.ts
├─ test
│  └─ user.spec.ts
├─ tsconfig.json
├─ vss.sqlite
├─ webpack.common.js
├─ webpack.dev.js
└─ webpack.prod.js

```