//arguments object - no longer bound with arrow functions

 const add = (a,b) => {
     //console.log(arguments);
     return a+b;
 };
 console.log(add(7,2,3));

 // this keyword - no longer bound

 const user = {
    name: 'Veena KR',
    cities: ['Blore', 'Maldivies', 'Switzerland'],
    printPlacesLived() {
        console.log(this.name);
        console.log(this.cities);

        return this.cities.map((city) => this.name+' has lived in '+ city+'!');
        // this.cities.forEach((city) =>{
        //     console.log(this.name+' has lived in '+city);
        // });
    }
 };

console.log(user.printPlacesLived());

const multiplier = {
    number: [3, 6, 9],
    multiplyBy: 2,
    multiply() {
        return this.number.map((num) => num*this.multiplyBy);
    }
};

console.log(multiplier.multiply());