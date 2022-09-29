const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return ((ids.length === 0) ? [] : species.filter(((element) => ids.some(animal) => animal.id === id)));
}

console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));


module.exports = getSpeciesByIds;
