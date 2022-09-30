const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const result = [];
  species.forEach((element, index) => {
    (element.id === ids) ? result.push(element): element;
  });
}
// getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce')
console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));


module.exports = getSpeciesByIds;
