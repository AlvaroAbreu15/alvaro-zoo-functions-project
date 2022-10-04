const data = require('../data/zoo_data');
// const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  const zero = 0;
  if ((entrants === undefined) || (Object.keys(entrants).length === 0)) {
    return zero;
  }
  const childs = entrants.filter((element) => element.age < 18).length;
  const adults = entrants.filter((e) => e.age >= 18 && e.age < 50).length;
  const seniors = entrants.filter((j) => j.age >= 50).length;
  const obj = { child: childs, adult: adults, senior: seniors };
  return obj;
}

const entrants = [
	{ name:  'Lara Carvalho', age:  5 },
	{ name:  'Frederico Moreira', age:  5 },
	{ name:  'Pedro Henrique Carvalho', age:  5 },
	{ name:  'Maria Costa', age:  18 },
	{ name:  'Núbia Souza', age:  18 },
	{ name:  'Carlos Nogueira', age:  50 },
];

function calculateEntry(entrants) {
  const count = countEntrants(entrants);
  return (count.child * 20.99) + (count.adult * 49.99) + (count.senior * 24.99);
}

console.log(calculateEntry(entrants));

module.exports = { calculateEntry, countEntrants };
