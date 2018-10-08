'use strict';

let modWorld = require('./World');
let modPopulation = require('./Population');
let modPerson = require('./Person');

var http = require('http');
var port = process.env.PORT || 3000;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Obczaj se konsole\n');
}).listen(port);

const world = new World(400, 400);
const population = new Population();
population.add(new Person(1), 200, 200);

//Tests
function isWorldPresent(){
    if(world !== null){
        console.log(`World has been created. World dimensions ${world.width} x ${world.height}`);
    }
    else{
        console.error('World has not been created.');
    }
}

function isPopulationPresent(){
    if(population !== null){
        console.log(`Population has been created. People alive ${population.alive.count()}`);
    }
    else{
        console.error('Population has not been created.');
    }
}

function isPersonXAlive(id){
    let person = this.alive[(this.alive.findIndex(obj => obj.id == person.id))];
    if(person !== null){
        console.log('Person alive');
    }
    else{
        console.error('Person not available');
    }
}

isWorldPresent();
isPopulationPresent();
isPersonXAlive(1);