const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');
const { residents } = require('../data/zoo_data');

function countAnimals(animal) {
   
   if (animal !== undefined) {
      if (Object.keys(animal).length === 1) {
         return species
        .filter((element) => element.name === animal.specie)[0]
         .residents.length;
      }
      return species.filter((element) => element.name === animal.specie)[0].residents
        .filter((j) => j.sex === animal.sex).length;
   } 
   let obj = {};
   species.forEach((e) =>  {
     obj[e.name] = e.residents.length
   });
   return obj;
} 
  
console.log(countAnimals());



module.exports = countAnimals;
