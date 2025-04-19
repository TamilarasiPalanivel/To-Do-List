const express =require('express');
const cors=require('cors');
const app=express();
app.use(express.json());
app.use(cors());//cross-origin resource sharing
app.listen(5000,()=>{
    console.log('server started');
})
