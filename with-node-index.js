const http = require("http");

const port = 3000;

const toDoList = ["Complete Node ", "Play Cricket"];

http
  .createServer((req, res) => {
    const { method, url } = req;
    // console.log(url);
    // console.log(method);
    if (url === "/todes") {
      if (method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(toDoList.toString());
      } else if (method === "POST") {
        let body = "";
        req
          .on("error", (err) => {
            console.log(err);
          })
          .on("data", (chunk) => {
            body += chunk;
            console.log(chunk);
          })
          .on("end", () => {
            body = JSON.parse(body);

            let newTodo = toDoList;
            newTodo.push(body.item);
            console.log(newTodo);
            res.writeHead(201);
          });
      } else if (method === "DELETE") {
        let body = "";
        req
          .on("error", (err) => {
            console.error(err);
          })
          .on("data", (chunk) => {
            body += chunk;
          })
          .on("end", () => {
            body = JSON.parse(body);
            let deleteThis = body.item;
            // for (let i =0;i<toDoList.length;i++){
            //     if (toDoList[i] === deleteThis){
            //         toDoList.slice(i,1);
            //         break
            //     }

            // }
            toDoList.find((element, index) => {
              if (element === deleteThis) {
                toDoList.splice(index, 1);
              }
            });
          });
      } else {
        res.writeHead(501);
      }
    }
    res.end();
  })
  .listen(port, () => {
    console.log(`Nodejs server started on port ${port}`);
  });
