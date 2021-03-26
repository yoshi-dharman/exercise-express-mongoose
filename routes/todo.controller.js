const express = require('express');
const { Counter, Todo } = require('../models/');

const app = express();

app.get('/', (req, res) => {
    Todo.find({})
    .then(result => {
        res.send(result);
    })
    .catch(e => {
        console.log(e);
        res.status(500).send(e);
    });
});

app.get('/:id', (req, res) => {
    Todo.find(
        {"_id": req.params.id}
    )
    .then(result => res.send(result))
    .catch(e => {
        console.log(e);
        res.status(500).send(e);
    });
});

app.post('/', (req, res) => {
    nextCounter()
    .then(result => {
        Todo.create({...req.body, "_id" : result})
        .then(result => {
            res.send(result);
        })
        .catch(e => {
            console.log(e);
            res.status(500).send(e);
        });
    });
});

app.delete('/:id', (req, res) => {
    Todo.deleteOne(
        {"_id": req.params.id}
    )
    .then(result => {
        if(result.deletedCount > 0){
            res.json({
                message: "Berhasil delete"
            })
        }else{
            res.json({
                message: "ID tidak ditemukan atau gagal delete"
            })
        }
    })
    .catch(e => {
        console.log(e);
        res.status(500).send(e);
    });
});

app.put('/:id', (req, res) => {
    Todo.updateOne(
        {"_id": req.params.id},
        {...req.body}
    )
    .then(result => {
        console.log(result)
        if(result.nModified > 0){
            res.json({
                message: "Berhasil update"
            })
        }else{
            res.json({
                message: "ID tidak ditemukan atau gagal update"
            })
        }
    })
})

async function nextCounter(){
    let sql = await Counter.findOneAndUpdate(
        {"_id":"todo_id"},
        {$inc : {"val":1}}
    )
    return sql.val
}

module.exports = app;