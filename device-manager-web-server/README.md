# 프로젝트 초기화
npm init -y

# 필수 패키지 설치
npm install express ws https

# 개발용 패키지 설치
## for basic 
npm install express ws https
npm install typescript ts-node mocha chai tsx pkg nodemon @types/node @types/express @types/ws @types/mocha @types/chai --save-dev

## for websocket
npm install utf-8-validate bufferutil --save

## for AsyncApi
npm install @asyncapi/generator @asyncapi/html-template --save-dev

## for webpack
npm install concurrently --save-dev
npm install webpack webpack-cli webpack-dev-server --save-dev

# TypeScript 설정 파일 생성
tsc --init
