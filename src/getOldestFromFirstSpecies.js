const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const animalId = employees.filter((e) => e.id === id)[0].responsibleFor[0];
  const animal = species.find((j) => j.id === animalId).residents;

  const fera = animal.reduce((acc, curr) => {
    if (curr.age > acc) {
      return curr.age;
    }
      return acc;
  }, []);

  const finalObject = animal.filter((el) => el.age === fera)[0];
  return [finalObject.name, finalObject.sex, finalObject.age];
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;
