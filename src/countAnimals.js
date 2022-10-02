const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');
const { residents } = require('../data/zoo_data');

function countAnimals(animal) {
   if(animal.length === 1) {
    return species.filter((element) => element.name === animal.specie)[0].residents.length;
   } else if (animal === undefined) {
   let obj = {};
   species.forEach((e) =>  {
      obj[e.name] = e.residents.length
   });
   return obj;
   }

   return species.filter((element) => element.name === animal.specie)[0].residents.filter((j) => j.sex === animal.sex).length;
   // && (element.residents[0].sex === animal.sex
}
const value = { specie: 'bears', sex: 'female' };



module.exports = countAnimals;
