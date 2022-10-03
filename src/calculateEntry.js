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
  if ((entrants === undefined) || (Object.keys(entrants).length === 0)) {
    return 0;
  }
  const childrens = entrants.filter((element) => element.age < 18);
  const adults = entrants.filter((e) => e.age >= 18 && e.age < 50).length;
  const seniors = entrants.filter((j) => j.age >= 50).length;
  return (childrens.length * 20.99) + (adults * 49.99) + (seniors * 24.99);
}

module.exports = { calculateEntry, countEntrants };
