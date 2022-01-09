const express=require("express");
const bodyparser=require("body-parser");
const nodemailer=require("nodemailer");
const cors=require("cors");
 
const app=express();
var port=process.env.PORT || 5000;

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use(cors());

app.use(express.static(__dirname+"/public"));

//email sending




app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
// res.send("welcome to coding competition #2 by Tonia Joseph Norka batch B2");
});

app.get("/home",(req,res)=>{
res.sendFile(__dirname+"/form.html");
});

app.post("/mailer",(req,res)=>{
    var data=req.body.email;
    var data1=req.body.message;
    //email sending
    var transporter=nodemailer.createTransport({
        service: "gmail",
        auth: {
            user:"annatonia13@gmail.com",
            pass:"toniaanna*123"
        }
    
    });
     
    var mailoptions={
        from:"annatonia13@gmail.com",
        to: data,
        subject:"sending email",
        text: data1
    };
    transporter.sendMail(mailoptions,function(err,info){
        if(err){
            console.log(err);
            res.send("something went wrong");
        }
        else{
            console.log("email send successfully");
            res.sendFile(__dirname+"/success.html");
        }
    });
    //email sending
    
});

app.listen(port,()=>{
console.log("server is running at "+port);
});