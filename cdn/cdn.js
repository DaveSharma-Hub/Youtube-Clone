const app = require('express')()
const cors = require('cors')
const PORT = 8000;

app.use(cors())

app.listen(PORT,()=>{console.log(`Listening on ${PORT}`)});