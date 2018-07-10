const Drones = require('../models/drones.js')
const PubSub = require('../helpers/pub_sub.js')


const CalculationsView = function (container) {
  this.container = container;
}

CalculationsView.prototype.bindEvents = function () {
  PubSub.subscribe('Drones:data-ready', (evt) => {
    initialData = evt.detail;
    dronesData = initialData.strike;
    this.totalDeaths(dronesData);
    this.minDeaths(dronesData);
    this.maxDeaths(dronesData);
    this.injuriesTotal(dronesData);
    this.civilianDeaths(dronesData);
    this.childrenDeaths(dronesData);
  })
};


CalculationsView.prototype.totalDeaths = function (dronesData) {
  let totalDeaths = 0;
  dronesData.forEach((drone) => {
    if ( ! isNaN(parseInt(drone.deaths))){
      totalDeaths += parseInt(drone.deaths)
  }
})
console.log(totalDeaths);
  return parseInt(totalDeaths);
};
CalculationsView.prototype.minDeaths = function (dronesData) {
  let minDeaths = 0;
  dronesData.forEach((drone) => {
    if ( ! isNaN(parseInt(drone.deaths_min))){
      minDeaths += parseInt(drone.deaths_min)
  }
})
console.log(minDeaths);
  return parseInt(minDeaths);
};

CalculationsView.prototype.maxDeaths = function (dronesData) {
  let maxDeaths = 0;
  dronesData.forEach((drone) => {
    if ( ! isNaN(parseInt(drone.deaths_max))){
      maxDeaths += parseInt(drone.deaths_max)
  }
})
console.log(maxDeaths);
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

CalculationsView.prototype.civilianDeaths = function (dronesData) {
  let civilianDeaths = 0;
  dronesData.forEach((drone) => {
    if ( ! isNaN(parseInt(drone.civilians))){
      civilianDeaths += parseInt(drone.civilians)
  }
})
console.log(civilianDeaths);
  return parseInt(civilianDeaths);

};

CalculationsView.prototype.childrenDeaths = function (dronesData) {
  let childrenDeaths = 0;
  dronesData.forEach((drone) => {
    if ( ! isNaN(parseInt(drone.children))){
      childrenDeaths += parseInt(drone.children)
  }
})
console.log(childrenDeaths);
  return parseInt(childrenDeaths);

};


module.exports = CalculationsView;
