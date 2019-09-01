## Start JSON Server

https://github.com/typicode/json-server

Get a full fake REST API with zero coding in less than 30 seconds (seriously)

    $ npm run server

## Use Curl to query

curl http://127.0.0.1:3000/comments

curl -X POST -H "Content-Type: application/json" -d '{"body": "hello lj , SHMILY",
"postId": 1}' "http://127.0.0.1:3004/comments"

curl -X DELETE "http://127.0.0.1:3004/comments/6"

curl -X PUT -H "Content-Type: application/json" -d '{"body": "hello lj , SHMILY",
"postId": 1}' "http://127.0.0.1:3004/comments/2"

## How to use node-fetch to query API

see controller.js
