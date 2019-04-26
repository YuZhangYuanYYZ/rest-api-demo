const fetch = require('node-fetch');

const commentsPromise = fetch('http://localhost:3000/comments');
commentsPromise
    .then(response => {
        const dataPromise = response.json();
        return dataPromise
    })
    .then(result => console.log(result), (error) => {});

fetch('http://localhost:3000/comments/1')
    .then(res => res.json())
    .then(json => console.log(json));

const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        body: 'hello comments 3',
        postId: 1
    })
}
fetch('http://localhost:3000/comments', options)
    .then(res => res.json()) // expecting a json response
    .then(json => console.log(json));

const options = {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        body: 'hello comments ,I just put it',
        postId: 1
    })
}
fetch('http://localhost:3000/comments/2', options)
    .then(res => res.json()) // expecting a json response
    .then(json => console.log(json));


const deleteOption = {
    method: 'DELETE'
}
fetch('http://localhost:3000/comments/3', deleteOption)
    .then(res => res.json()) // expecting a json response
    .then(json => console.log(json));