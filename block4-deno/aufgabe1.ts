import {serve} from "https://deno.land/std@0.75.0/http/server.ts";

const s = serve({port: 8000});
console.log("http://localhost:8000/");
for await (const req of s) {
    Deno.readTextFile("../uebung4.html").then((c: string) => {
        req.respond({body: c});
    })
}
