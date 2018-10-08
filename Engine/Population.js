class Population {
    constructor(){
        this.alive = [];
        this.dead = [];
    }
    add (person){
        return this.alive.push(person);
    }
    remove (person){
        this.alive.splice(this.alive.findIndex(obj => obj.id == person.id),1);
        return this.dead.push(person);
    }
}
