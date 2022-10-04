const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSchedule(scheduleTarget) {
  const exp = {
    'Tuesday': {
      'officeHour': 'Open from 8am until 6pm',
      'exhibition': [ 'lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes' ],
    },
    'Wednesday': {
      'officeHour': 'Open from 8am until 6pm',
      'exhibition': [ 'tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes' ],
    },
    'Thursday': {
      'officeHour': 'Open from 10am until 8pm',
      'exhibition': [ 'lions', 'otters', 'frogs', 'snakes', 'giraffes' ],
    },
    'Friday': {
      'officeHour': 'Open from 10am until 8pm',
      'exhibition': [ 'tigers', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes' ],
    },
    'Saturday': {
      'officeHour': 'Open from 8am until 10pm',
      'exhibition': [
        'lions',  'tigers',
        'bears',  'penguins',
        'otters', 'frogs',
        'snakes', 'elephants',
      ],
    },
    'Sunday': {
      'officeHour': 'Open from 8am until 8pm',
      'exhibition': [ 'lions', 'bears', 'penguins', 'snakes', 'elephants' ],
    },
    'Monday': { 'officeHour': 'CLOSED', 'exhibition': 'The zoo will be closed!' },
  };
  let keys = scheduleTarget;
  let keys2 = scheduleTarget.toLowerCase();
  const keysAnimal = species.map((i) => i.name);

  if (Object.keys(exp).includes(scheduleTarget)){
    return `${keys}: ${exp[keys2]}`;
  } 
  else if(keysAnimal.includes(scheduleTarget)){
    return species.find((e) => e.name === scheduleTarget).availability;  
  }
   else if ((scheduleTarget === undefined) || (scheduleTarget !== Object.keys(exp))) {
    return exp;
  } 
  
}



// console.log();
console.log(getSchedule('Monday'));



module.exports = getSchedule;
