# note-app-mern-practice

## ✔️ Objectives

MERN stack 훑어보기

<br/>

## Express 프로젝트 생성

```sh
sudo npm install -g express
npm install -g express express-generator
express <프로젝트 이름>
```

## DB Test

/server 경로에서 테스트

```sh
# MongoDB start 명령어
mongosh

# use <DB 이름>
use notes

# collection 생성하기
db.createCollection('notes')

# DB에 데이터 추가하기
db.notes.insert({
  ... 추가할 데이터
})

# 추가한 데이터 확인하기
db.notes.find()
```

<br/>

## Postman 으로 서버 작동 확인하기
