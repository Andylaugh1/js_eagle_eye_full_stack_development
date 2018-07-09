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
  })
};


CalculationsView.prototype.totalDeaths = function (dronesData) {
  let totalDeaths = 0;
  dronesData.forEach((drone) => {
    if ( ! isNaN(drone.deaths_min)){
      totalDeaths += parseInt(drone.deaths_min)
    console.log(totalDeaths);
  }
})
  return parseInt(totalDeaths);
}


module.exports = CalculationsView;
