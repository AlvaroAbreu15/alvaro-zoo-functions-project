const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  const found = employees.some((object) => object.managers.includes(id));
  return found;
}

function getRelatedEmployees(managerId, isManager) {
  if (isManager === true) {
  const id = employees.filter((people) => people.managers.includes(managerId));

  return id.map((j) => `${j.firstName} ${j.lastName}`);
  } 

  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

console.log(getRelatedEmployees('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));

module.exports = { isManager, getRelatedEmployees };
