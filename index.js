function createBicycle1(){
    var cycle = {};
    cycle.name = "Hero Herculues";
    cycle.brand = "Hero";
    cycle.color = "Balck";
    cycle.day = "Monday";
    return cycle;
}

var bicycle1 = createBicycle1();

function createBicycle(name, brand, color, day){
    var cycle = {};
    cycle.name = name;
    cycle.brand = brand;
    cycle.color = color;
    cycle.day = day;
    return cycle;
}

var bicycle2 = createBicycle("MyCycle", "Bajaj", "Green", "Saturday");
var bicycle3 = createBicycle("YourCycle", "Bajaj", "Red", "Friday");


function CreateBicycle(name, brand, color, day){
    this.name = name;
    this.brand = brand;
    this.color = color;
    this.day = day;
}

let newBicycle1 = new CreateBicycle("Crazy", "Subhash", "Orange", "Tuesday");
let newBicycle2 = new CreateBicycle("Psych", "Subhash", "Reddish", "Wednesday");