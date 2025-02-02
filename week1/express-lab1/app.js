const express = require ('express');
const app = express();
const port = 3001;


const handleRootRequest = (req, res) => {
    res.send('Hello World');
}; 

const handleServerListening = () => {
    console.log(`Example app listening on port ${port}`);
};

app.get('/', handleRootRequest);

app.listen(port, handleServerListening);




