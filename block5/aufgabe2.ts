import {Application, Router} from 'https://deno.land/x/oak@v6.3.1/mod.ts';

const app = new Application();
const router = new Router();

router
    .get('/todo/', async (context) => {
        let html = '<html><body>'
        html = html + "<script>function navigate(){ window.location = 'http://localhost:8000/todo/' + document.querySelector('input').value }</script>"
        html = html + '<input type="number"><input type="button" onclick="navigate()">'
        html = html + '</body></html>'
        context.response.body = html;

    }).get('/todo/:id', async (context) => {
    console.log(context.params.id);
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/' + context.params.id);
    const responseObj = await response.json();

    let html = '<html><body>'
    html = html + "<script>function navigate(){ window.location = 'http://localhost:8000/todo/' + document.querySelector('input').value}</script>"
    html = html + '<input type="number" ><input type="button" onclick="navigate()">'
    html = html + '<article><h1>' + responseObj.title + '</h1></article>'


    html = html + '</body></html>'

    context.response.body = html
})

app.use(router.routes());
app.listen({port: 8000});
