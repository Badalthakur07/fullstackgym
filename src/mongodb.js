const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/login",{useNewUrlparser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
})
.then(()=>{
    console.log('mongodb connect')
}).catch((e)=>{
    console.log('failed ');
})



