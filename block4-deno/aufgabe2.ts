import {serve} from "https://deno.land/std@0.75.0/http/server.ts";

const s = serve({port: 8000});
console.log("http://localhost:8000/");
for await (const req of s) {
    console.log(req.url);
    if(req.url === '/foo'){
        Deno.readTextFile("../uebung4.html").then((c: string) => {
            req.respond({body: c});
        })
    }else if(req.url === '/bar'){
        Deno.readTextFile("../todo-app.html").then((c: string) => {
            req.respond({body: c});
        })
    }else{
        req.respond({body: '404'})
    }
}
