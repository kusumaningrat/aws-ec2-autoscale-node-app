const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const os = require('os');
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    let dumyData;
    for (let i = 0; i < 100000; i++) {
        dumyData = fs.readFileSync('data.json');
    }
    const data = JSON.parse(dumyData);
    const ec2_hostname = os.hostname();
    res.json({
        'message': 'Success',
        'data': data
    });
    res.send(`<h1>This is Instance: ${ec2_hostname}</h1>`)
});

app.listen(3000, () => {
    console.log('App running on port 3000');
});