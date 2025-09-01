//Object

let Dog={
    name:"Jack",
    age:12,
    Breed:"German Shepherd",
      features:{
        breed:"Labrador",
        furType:"Short",
        temperament:"Friendly",
        
    },
};

console.log(Dog.name);

Dog.color="Brown";

console.log(Dog)

Dog.name="Tyson";

console.log(Dog);
delete Dog.age;

console.log(Dog);

console.log(Dog.hasOwnProperty('height'));
console.log(Dog.features.color)

//values
//entries

 const result=Object.keys(Dog)
console.log(result);

const Answer=Object.values(Dog)
console.log(Answer);
//D

