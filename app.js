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
// app.post('/addCandidate', (req,res,next) =>{
//     var user = new candidate();
//     user.Name = req.body.Name;
//     user.Email = req.body.Email;
//     user.save((err, doc) => {
//         if (!err)
//         res.status(200).send({
//             Name:user.Name,
//             Email:user.Email
//         });
//         else {
//             if (err.code == 11000)
//                 res.status(422).send(['Duplicate email adrress found.']);
//             else
//                 return next(err);
//         }

//     });
   
// });
// app.post('/addScore', (req,res,next) =>{
//     var test = new test_score();
//     test.Name = req.body.Name;
//     test.first_round = req.body.first_round;
//     test.second_round = req.body.second_round;
//     test.third_round = req.body.third_round;
//     test.max = Number(req.body.first_round)+ Number(req.body.second_round)+Number(req.body.third_round);
//     test.save((err, doc) => {
//         if (!err){
//             res.status(200).send({
//                 Message: "Ok"
//             });
//         }
//         else{
//             return next(err);
//         }

//     });
   
// });


// app.get('/getScore', (req,res,next) =>{
//     db.collection('test_scores').find({}).sort({
//         max: -1,
//     }).limit(1).toArray((err,result)=>{
         
//         if (!err)
//            res.status(200).send({
//             result
//            }); 
//     })
    
// });

