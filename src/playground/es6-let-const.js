var nameVar = 'Veena';
var nameVar = "KR";
console.log('nameVar',nameVar );

let nameLet = "Sachin";
nameLet = "C";
console.log('nameLet',nameLet);

const nameConst = "Suchetha";
console.log('nameConst',nameConst);

function getPetName() {
    var petName = "Putti";
    return petName;
}

const petName = getPetName();
console.log(petName);

//block scoping

const fullName = "Veena KR";
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);

