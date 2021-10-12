const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);

    if (req.method === "GET" && req.url === "/") {
        const resBody = fs.readFileSync("index.html");
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        return res.end(resBody);
    }

    if (req.method === "GET" && req.url.startsWith("/assets")) {
        console.log(req.url); // /assets/main.css
        const file = req.url.split('/')[2]; // ['', 'assets', 'main.css']
        const ext = file.split('.')[1];
        const resBody = fs.readFileSync(`./assets/${file}`);
        res.statusCode = 200;
        if (ext === 'png') {
            res.setHeader("Content-Type", `image/${ext}`);
        } else {
            res.setHeader("Content-Type", "text/css");
        }
        return res.end(resBody);
    }

    let reqBody = "";
    req.on("data", (data) => {
        reqBody += data;
    });

    req.on("end", () => {
        console.log(reqBody, 'reqBody');
        if (reqBody) {
            req.body = reqBody
                .split("&")
                .map((keyValuePair) => keyValuePair.split("="))
                .map(([key, value]) => [key, value.replace("+", " ")])
                .map(([key, value]) => [key, decodeURIComponent(value)])
                .reduce((acc, [key, value]) => {
                    acc[key] = value;
                    return acc;
                }, {});
        }

        if (req.method === "POST" && req.url === "/tasks") {
            console.log(req.body.tasks, req.body.time);
            res.statusCode = 302;
            res.setHeader("Location", "/");
            return res.end();
        }
    });
});

const port = 5000;

server.listen(port, () => console.log(`Server is listening on port ${port}`));