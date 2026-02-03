const express = require("express");
const { error } = require("node:console");
const app = express();

app.use(express.json());


const transcations = [];


app.post("/postTransaction", (req, res) => {
    const transaction = req.body;

    if(transaction){
        transaction.push(newTransaction)
    }else {
        throw new error("Transaction not possible");
    }
    return "Transcation succeffull"
})

app.get("/transacation/:id", (req, res) => {
    const id = req.params;

    const transcation = transcations.find((t) => t.id === id);

    if(transcation){
        return transcation
    }else {
        throw new error("Transaction does not exist");
    }
})


