class Person {
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }

    getGreeting(){
        //return 'Hi I am '+this.name+ ' !!!';

        //es6 string =>
        return `Hi I am ${this.name}!!!`;
    }

    getDesc() {
        return `${this.name} is ${this.age} year(s) old!`;
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDesc() {
        let description = super.getDesc();
        if(this.hasMajor()){
            description +=` Their major is ${this.major}`; 
        }
        return description;

    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }

    

    getGreeting() {
        let greet = super.getGreeting();
        if(this.homeLocation){
            greet += ` I am visiting from ${this.homeLocation}`;
        }
        return greet;
    }
}

const me = new Traveler('Veena KR', 24, 'India');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());