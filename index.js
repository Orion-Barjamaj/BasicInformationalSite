const express = require('express');
const path = require('path');
const app = express();

app.get('/', function(req, res){
    const options = {
        root: path.join(__dirname)
    }

    res.sendFile('index.html', options, function(error){
        if(error){
            console.log('We have got an error -> ' + error);
        }else {
           
        }
    });
})

app.get('/about', function(req, res){
    const options = {
        root: path.join(__dirname)
    }

    res.sendFile('about.html', options, function(error){
        if(error){
            console.log('We have got an error -> ' + error);
        }else {
           
        }
    });
})

app.get('/contact-us', function(req, res){
    const options = {
        root: path.join(__dirname)
    }

    res.sendFile('contact-us.html', options, function(error){
        if(error){
            console.log('We have got an error -> ' + error);
        }else {
           
        }
    });
})

app.get('*', (req, res) => {
    const options = {
        root: path.join(__dirname)
    }

    res.sendFile('404.html', options, function(error){
        if(error){
            console.log('We have got an error -> ' + error);
        }else {
           
        }
    });
})

const PORT = 8080;
app.listen(PORT);