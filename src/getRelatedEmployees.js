const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  const found = employees.some((object) => object.managers.includes(id));
  return found;
}

function getRelatedEmployees(managerId) {
  const id = employees.filter((people) => people.managers.includes(managerId));

  return id.map((j) => `${j.firstName} ${j.lastName}`);
}

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
 