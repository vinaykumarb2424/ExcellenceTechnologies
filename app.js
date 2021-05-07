const express= require('express');
const mongoose= require('mongoose');
const bodyParser= require('body-parser');
const cors=require('cors');
const model= require('./model');
const candidate= mongoose.model('candidate');
const test= require('./test');
const test_score= mongoose.model('test_score');
const app= new express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


const url= "mongodb+srv://Vinay:Vinay@551888@cluster0.wx4mi.mongodb.net/ExcellenceTechnologies?retryWrites=true&w=majority";
const port= process.env.PORT || 5000 ;


mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useCreateIndex', true);

//connecting database
let db;
mongoose.connect(url, (err, connection)=>{
    if (!err){
        db=mongoose.connection;
      //   db = connection.db('ExcellenceTechnologies');
         console.log('MongoDB connection succeeded.');
        // console.log(db);
    }
    else{
         console.log('Error.' +JSON.stringify(err, undefined,2));
    }
});


//connecting server
app.listen(port, (err) =>{
    if(err){
           console.log(err);
    }
    else{
      console.log(`Server running on http://localhost:${port}`);
    }

});

//health ok
app.get('/', (req,res) =>{
    res.status(200).send({
        Message: "Server ok",

    })
});

