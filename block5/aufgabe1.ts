const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
const jsonObj = await response.json()
console.log(jsonObj);
