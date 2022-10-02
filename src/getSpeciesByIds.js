const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const arr = [];
  return (ids !== undefined) ? species.filter((element, index) => element.id === ids[0] || element.id === ids[1]) : arr;
}

console.log(getSpeciesByIds('01422318-ca2d-46b8-b66c-3e9e188244ed'));
module.exports = getSpeciesByIds;
