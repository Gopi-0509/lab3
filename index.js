const express=require("express");
const app=express();
app.get("/",function(request,response){
    response.send("Gopi");
});

app.listen(4000,function(){
    console.log("Hostname gopi");
})