import {Application, Router} from 'https://deno.land/x/oak@v6.3.1/mod.ts';

const app = new Application();
const router = new Router();

router
    .get('/foo', async (context: any) => {
        context.response.body = await Deno.readTextFile("../uebung4.html");
    })
    .get('/bar', async (context: any) => {
        context.response.body = await Deno.readTextFile("../todo-app.html");
    })

app.use(router.routes());
app.listen({port: 8000});
