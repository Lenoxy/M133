import {Application, Router} from 'https://deno.land/x/oak@v6.3.1/mod.ts';
import {walk} from "https://deno.land/std/fs/mod.ts";


const app = new Application();
const router = new Router();


router
    .get('/', async (context: any) => {
        let html = '<html><body>'
        for await (const entry of walk("./images/")) {
            if (entry.path !== 'images/') {
                console.log('localhost:8000/' + entry.path);
                html = html + "<img style='width: 600px' src=" + 'http://localhost:8000/' + entry.path + ">"
            }
        }

        html = html + '</body></html>'
        context.response.body = html;
    }).get('/images/:name', async (context) => {
    try {
        console.log(context.params.name)
        context.response.body = await Deno.readFile('images/' + context.params.name);
    } catch (err) {
        context.response.body = {status: 404}
    }

})

app.use(router.routes());
app.listen({port: 8000});
