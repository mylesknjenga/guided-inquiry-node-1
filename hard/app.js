const express = require('express');
const app = express();
const port = 3000;

const jsonData= require('./employees.json'); 

app.get('/employees', (req, res) => {
    res.send(jsonData);
});

app.get('/employees/:employeeID', (req, res) => {
    const employeeID = req.params.employeeID - 1;

    if (req.params.employeeID > jsonData.Employees.length) {
        res.status(404).send('Employee not found');
    } else {
        res.send(jsonData.Employees[employeeID]);
    }    
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));