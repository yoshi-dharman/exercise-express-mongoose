const express = require('express');
const app = express();
const cors = require('cors');
const { PORT, dbConfigMongo } = require('./config');
const LocalPort = PORT || 3000;

const routes = require('./routes');
const { Counter, User, Todo } = require('./models');

app.use(cors());
app.use(express.json());
app.use(routes);

app.get('/', (req, res) => {
    res.send("<h1 style='text-align:center; padding-top:3rem'>Welcome to my Api Inventory ⊂◉‿◉つ</h1>"+
    "<h3 style='text-align:center;'>/user to see the data</h3>")
})

app.get("/all", (req, res) => {
    User.aggregate().lookup({
        from: "todos",
        localField: "_id",
        foreignField: "user_id",
        as: "todoList"
    })
    .then(result => {
        res.json(result);
    })
    .catch(e => console.log(e));

    // User.aggregate().lookup({
    //     from: "todos",
    //     localField: "_id",
    //     foreignField: "user_id",
    //     as: "todoList"
    // }).unwind({
    //     path: '$todoList', preserveNullAndEmptyArrays: true
    // })
    // .then(result => {
    //     console.log(result);
    //     res.json(result);
    // })
    // .catch(e => console.log(e));
})

function initialCounter() {
    Counter.find({})
    .then(result => {
        if(result.length < 1){
            Counter.create({
                "_id": "user_id",
                "val": 1
            },{
                "_id": "todo_id",
                "val": 1
            })
            .then(() => console.log("create initial counter from 1"))
            .catch(e => console.log(e));
        }
    })
}
initialCounter();

if(dbConfigMongo) {
    app.listen(LocalPort, ()=>{
        console.log("server running at ", LocalPort);
    });
} else {
    console.log("Not Connected");
}
