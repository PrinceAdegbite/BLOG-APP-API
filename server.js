const express = require('express')
const bodyParser= require('body-parser')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors')
const  authRoutes = require('./routes/authRoutes')
const  blogRoutes = require('./routes/blogRoutes')



require('dotenv').config()
require('./db')


app.use(cors())
// app.use(express.json())
app.use(bodyParser.json())
app.use('/users', authRoutes)
app.use('/blogs', blogRoutes)


app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the API'
    })
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})