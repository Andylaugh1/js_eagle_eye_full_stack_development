const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');
const Drones = require('../models/drones.js');

const GlobeView = function(container){
  this.container = container;
}

GlobeView.prototype.bindEvents = function () {
PubSub.subscribe('Drones:data-ready', (evt) =>{
  droneData = evt.detail;
  this.render(droneData);
  });
};


GlobeView.prototype.render = function (droneData) {
  droneData.strike.forEach((drone, index) => {
    console.log(drone);
    const strike = document.createElement('p');
    strike.value = index;
    strike.textContent = drone.lat;
    this.container.appendChild(strike);
  });
};


module.exports = GlobeView;
