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

function calculateEntry(entrants) {
  const count = countEntrants(entrants);
  if (entrants === undefined || (Object.keys(entrants).length === 0)) {
    return 0;
  }
  return (count.child * 20.99) + (count.adult * 49.99) + (count.senior * 24.99);
}

module.exports = { calculateEntry, countEntrants };
