const Drones = require('../models/drones.js')
const PubSub = require('../helpers/pub_sub.js')


const CalculationsView = function (container) {
  this.container = container;
}

CalculationsView.prototype.bindEvents = function () {
  PubSub.subscribe('Drones:data-ready', (evt) => {
    initialData = evt.detail;
    dronesData = initialData.strike;
    this.minDeaths(dronesData);
    this.maxDeaths(dronesData);
  })
};


CalculationsView.prototype.minDeaths = function (dronesData) {
  let minDeaths = 0;
  dronesData.forEach((drone) => {
    if ( ! isNaN(parseInt(drone.deaths_min))){
      minDeaths += parseInt(drone.deaths_min)
  }
})
  return parseInt(minDeaths);
};

CalculationsView.prototype.maxDeaths = function (dronesData) {
  let maxDeaths = 0;
  dronesData.forEach((drone) => {
    if ( ! isNaN(parseInt(drone.deaths_max))){
      maxDeaths += parseInt(drone.deaths_max)
  }
})
// console.log(maxDeaths);
  return parseInt(maxDeaths);

};

CalculationsView.prototype.injuriesTotal = function (dronesData) {
  let injuriesTotal = 0;
  dronesData.forEach((drone) => {
    if ( ! isNaN(parseInt(drone.injuries))){
      injuriesTotal += parseInt(drone.injuries)
  }
})
  console.log(injuriesTotal);
  return parseInt(injuriesTotal);
};



module.exports = CalculationsView;
