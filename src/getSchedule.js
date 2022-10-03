const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');


function getSchedule(scheduleTarget) {

  // if(Object.keys(obj).includes(scheduleTarget)) {
  //  return obj.filter((element) => element[scheduleTarget])
  // }

  return species.find((e) => e.name === scheduleTarget).availability;  /// OK

  
  
}
console.log(getSchedule('lions'));


module.exports = getSchedule;
