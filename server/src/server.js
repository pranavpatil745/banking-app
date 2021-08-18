const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
var cors = require('cors')
const userRoutes = require('./routes/users')
const transRoutes = require('./routes/transactions')



app.listen(4000, () => console.log('server is up and running on 4000'))
mongoose.connect('mongodb+srv://admin123:admin123@cluster0.p4gyl.mongodb.net/BankingApp?retryWrites=true&w=majority', {useNewUrlParser: true},() => console.log("Database Connected"))


app.get('/',(req,res,next) => {
    res.status(200).json({
        message: "hello from server"
    })
});
app.use(cors())
app.use(express.json())
app.use(bodyParser())
app.use('/app', userRoutes);
app.use('/app', transRoutes);


