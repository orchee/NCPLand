class Person {
    constructor(id, x, y){ //age, first, last, parents,
        this.id = id;
        this.x = x || random(map.width);
        this.y = y || random(map.height);
    }
}

