const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getNamesAndLocation(arg) {
  const spec = employees.filter((e) => e.id === arg.id || e
    .firstName === arg.name || e.lastName === arg.name)[0]
    .responsibleFor.map((j) => species
      .filter((i) => i.id === j));
  const names = spec.map((element) => element[0].name);
  const location = spec.map((indice) => indice[0].location);
  return { names, location };
}

function getNames(arg) {
  const findName = employees
    .find((q) => q.firstName === arg.name || q.lastName === arg.name || q.id === arg.id);
  return findName;
}

function getEveryObjects() {
  const allIds = employees.map((obj) => obj.id);
  const array = [];
  allIds.forEach((o) => {
    const spec2 = employees.filter((l) => l.id === o)[0]
      .responsibleFor.map((r) => species.filter((k) => k.id === r));
    const names2 = spec2.map((elemen) => elemen[0].name);
    const location2 = spec2.map((elemen2) => elemen2[0].location);
    const findName2 = employees.find((w) => w.id === o);
    array.push({
      id: findName2.id,
      fullName: `${findName2.firstName} ${findName2.lastName}`,
      species: names2,
      locations: location2,
    });
  });
  return array;
}

function getEmployeesCoverage(arg) {
  if (arg === undefined) {
    const func3 = getEveryObjects();
    return func3;
  }
  const values = employees.some((el) => el.firstName
    .includes(arg.name) || el.id.includes(arg.id) || el.lastName.includes(arg.name));
  if (values === true) {
    const func1 = getNamesAndLocation(arg);
    const func2 = getNames(arg);
    return {
      id: func2.id,
      fullName: `${func2.firstName} ${func2.lastName}`,
      species: func1.names,
      locations: func1.location,
    };
  }
  throw new Error('Informações inválidas');
}

module.exports = getEmployeesCoverage;
