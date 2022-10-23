const express = require('express');
require('dotenv').config();
require('./config/db.config')
const app = express();
app.use(express.json());

app.get('/api/customers', (req, res) => {
    const customers = [
        {id: 1, firstName: 'John', lastName: 'smith'}
    ];
    res.json(customers);
})

app.listen(process.env.PORT, (err)=>{
    if(err) throw err;
    console.log(`server running on port ${process.env.PORT}`);
})