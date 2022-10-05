const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');


function getEmployeesCoverage(arg) {

  const ids = employees.some((l) => l.id === arg.id || l.firstName === arg.name || l.lastName === arg.name);
  const spec = employees.filter((e) => e.id === arg.id || e.firstName === arg.name || e.lastName === arg.name)[0]
  .responsibleFor.map((j) => species
   .filter((i) => i.id === j)); 
  const names = spec.map((element) => element[0].name); 
  const location = spec.map((indice) => indice[0].location); 

  const findName = employees
 .find((q) => q.firstName === arg.name || q.lastName === arg.name || q.id === arg.id);
  if(arg !== undefined) {
    return {
      id: findName.id, 
      fullName: `${findName.firstName} ${findName.lastName}`,
      species: names,
      locations : location, 
    };
  } else if (ids === false ) {
    throw new Error('Informações inválidas');
  } 
}

console.log(getEmployeesCoverage({ id: 'c1f50212-35a6-4ecd-8223-f835538526c2' }));

module.exports = getEmployeesCoverage;
