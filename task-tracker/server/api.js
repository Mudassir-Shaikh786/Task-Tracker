const mongoClient = require("mongodb").MongoClient;
const express = require("express");
const cors = require("cors");
var conString = "mongodb://127.0.0.1:27017";

const app = express();

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/users', (req, res)=>{
     mongoClient.connect(conString).then(clientObj=>{
          var database = clientObj.db("Tasktracker");
          database.collection("users").find({}).toArray().then(documents=>{
              res.send(documents);
              res.end();
          });
     });  
});

app.get('/tasks', (req, res)=>{
    mongoClient.connect(conString).then(clientObj=>{
         var database = clientObj.db("Tasktracker");
         database.collection("tasks").find({}).toArray().then(documents=>{
             res.send(documents);
             res.end();
         });
    });  
});

app.get("/get-task/:id", (req, res)=>{

    mongoClient.connect(conString).then(clientObj=>{
         var database = clientObj.db("Tasktracker");
         database.collection("tasks").find({UserId:parseInt(req.params.id)}).toArray().then(documents=>{
              res.send(documents);
              res.end();
         });
    });
});

app.post('/register-user', (req, res)=>{
    
     var user = {
         UserName: req.body.UserName,
         Password: req.body.Password,
         Email: req.body.Email,
         Country: req.body.Country
     }

     mongoClient.connect(conString).then(clientObj=>{
          var database = clientObj.db("Tasktracker");
          database.collection('users').insertOne(user).then(()=>{
             console.log('User Registered..');
             res.end();
          });
     });
});

app.post('/add-task', (req, res)=>{
    
    var user = {
        UserId: req.body.UserId,
        Title: req.body.Title,
        Description: req.body.Description,
        Status: req.body.Status,
        Date: req.body.Date
    }

    mongoClient.connect(conString).then(clientObj=>{
         var database = clientObj.db("Tasktracker");
         database.collection('tasks').insertOne(user).then(()=>{
            console.log('Task Added..');
            res.end();
         });
    });
});



app.put("/edit-task/:id", (req, res)=>{

    mongoClient.connect(conString).then(clientObj=>{

          var database = clientObj.db("Tasktracker");

          database.collection("tasks").updateOne({UserId:parseInt(req.params.id)},{$set:{UserId:parseInt(req.body.UserId), Title: req.body.Title, Description: req.body.Description, Status:req.body.Status, Date:new Date(req.body.Date)}}).then(()=>{
              console.log('Appointment Details Updated..');
              res.end();
          });
    });
});

app.delete("/delete-task/:id", (req, res)=>{

    mongoClient.connect(conString).then(clientObj=>{

              var database = clientObj.db("Tasktracker");

              database.collection("tasks").deleteOne({UserId:parseInt(req.params.id)}).then(()=>{

                   console.log('Task Deleted..');
                   res.end();
              });
    });
});

app.get("/get-task/:userid", (req, res)=>{

    mongoClient.connect(conString).then(clientObj=>{
         var database = clientObj.db("Tasktracker");
         database.collection("tasks").find({UserId:parseInt(req.params.userid)}).toArray().then(documents=>{
              res.send(documents);
              res.end();
         });
    });
});

app.listen(4050);
console.log(`Server Started http://127.0.0.1:4050`);