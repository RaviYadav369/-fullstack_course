const express = require("express");

const app = express();
app.use(express.json());

const port = 8081;

const toDodoList = ["Complete Node Part", "Play Cricket"];

app.get("/todos", (req, res) => {
  res.status(200).send(toDodoList);
});

app.post("/todos", (req, res) => {
  let newTodo = req.body.item;
  toDodoList.push(newTodo);
  res.status(201).send({
    message: "Task is added Successfully",
  });
});

app.delete("/todos", (req, res) => {

  const itemDeleted = req.body.item;

  toDodoList.find((element, index) => {
    if (element === itemDeleted) {
     toDodoList.splice(index, 1);
    }
  });
  res.status(201).send({
    message: `Deleted element is ${itemDeleted}`,
  });
});

app.all('/todos',(req,res)=>{
    res.status(501).send()
})

app.all('*',(req,res)=>{
    res.status(404).send()
})
app.listen(port, () => {
  console.log(`Node js server started at ${port}`);
});
