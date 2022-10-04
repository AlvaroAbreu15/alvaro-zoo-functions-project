const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const days = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];

const createDayObject = (days) => {
  
let object = {};
   days.forEach((e) => {
    object[e] = 
  });
  return object;
};
console.log(createDayObject(days));






function getSchedule(scheduleTarget) {

  return species.find((e) => e.name === scheduleTarget).availability;  /// OK  
}



module.exports = getSchedule;
