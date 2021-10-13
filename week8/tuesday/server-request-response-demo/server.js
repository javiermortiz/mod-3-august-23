const http = require('http');
const fs = require('fs');

let database = [];

const quotes = {
    good: ["hello", "another quote", "another one"],
    bad: ["hello again", "yet another one", "final example"]
}

const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);

    if (req.method === "GET" && req.url === "/") {
        const htmlPage = fs.readFileSync("index.html", "utf-8");
        const tasksList = database.map(quote => {
            return `<li>${quote}</li>`
        });
        console.log(tasksList);
        const resBody = htmlPage.replace(/#{tasks}/g, tasksList.join(""));
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        return res.end(resBody);
    }
    
    // /assets/images/dogs

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

    if (req.method === "GET" && req.url.startsWith('/assets/images')) {
        const resBody = fs.readFileSync("index.html");
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
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

        if (req.method === "POST" && req.url === "/quotes") {
            console.log(req.body);
            const newStatus = req.body;
            console.log(newStatus);
            const randomNum = Math.floor(Math.random() * quotes[newStatus.status].length);
            const quote = quotes[newStatus.status][randomNum];
            database.push(quote);
            res.statusCode = 302;
            res.setHeader("Location", "/");
            return res.end();
        }
    });
});

const port = 5000;

server.listen(port, () => console.log(`Server is listening on port ${port}`));