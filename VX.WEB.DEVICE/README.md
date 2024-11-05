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

