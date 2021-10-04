
const express = require('express');
const sendMail = require('./mail');
const log = console.log;
const app = express();
const path = require('path');
    
const PORT = 3000;


// DARTA PARSING to get the data here when i client send the data and i able to process it  

app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

// the app.post is going to receive data from a client (HTML)
app.post('/email', (req,res)=>{
    //TODO:
    //send email here
    const{subject, email, text}= req.body;
    console.log('Data: ', req.body)

    sendMail(email, subject,text, function(err,data){
        if(err){
            res.status(500).json({message:'Internal Error'});
        }else{
                res.json({message: 'Email sent'});

            }
        });
    });

    //res.json({message: 'Message received!!!'})


app.get('/', (req, res)=>{

    res.sendFile(path.join(__dirname,'views','index.html'));
});
app.listen(PORT, ()=> {log('Server is starting on PORT, ', 3000)});
