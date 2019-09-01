const fetch = require('node-fetch');

const commentsPromise = fetch('https://blockchaintech-code-test.herokuapp.com/trades.json');
commentsPromise
    .then(response => {
        const dataPromise = response.json();
        return dataPromise
    })
    .then(result => console.log(result, "111"), (error) => { console.log(error) });

fetch('http://localhost:3004/comments/1')
    .then(res => res.json())
    .then(json => console.log(json));

fetch('http://localhost:3004/todos')
    .then(res => res.json())
    .then(json => console.log(json));


const postOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        body: 'hello comments 3',
        postId: 1
    })
}
fetch('http://localhost:3004/comments', postOptions)
    .then(res => res.json()) // expecting a json response
    .then(json => console.log(json));



const putOptions = {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        body: 'hello comments ,I just put it',
        postId: 1
    })
}
fetch('http://localhost:3004/comments/2', putOptions)
    .then(res => res.json()) // expecting a json response
    .then(json => console.log(json));


const deleteOption = {
    method: 'DELETE'
}
fetch('http://localhost:3004/comments/3', deleteOption)
    .then(res => res.json()) // expecting a json response
    .then(json => console.log(json));