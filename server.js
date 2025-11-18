const http= require('http');
const fs = require('fs');
const _ = require('lodash');


const server = http.createServer((req, res) =>{

    //lodash
    const num = _.random(0,20);
    console.log(num);

    const greet = _.once(() => {
    console.log('hello');
    });

    greet();


 console.log(req.url, req.method);
 //set header content type 
 res.setHeader('Content-Type', 'text/plain');

 res.write('hello, ninjas');
 res.end();
});

server.listen(3000, 'localhost', ()=> {
    console.log('listening for request from port 3000')
})