const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  const found = employees.some((object) => object.managers.includes(id));
  return found;
}

function getRelatedEmployees(managerId) {
  const id = employees.filter((people) => people.managers.includes(managerId));

  return id.map((j) => `${j.firstName} ${j.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
