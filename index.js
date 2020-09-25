const express = require('express')
const app = express();
// const rootCall = (req , res) =>{
//     res.send('Thank you very much')
// }
app.get('/',(req,res)=> {
    res.send('thank you so much for calling me  , and i know how to open node' )
})
app.listen(3000 , ()=> console.log('listening to post 3000'))