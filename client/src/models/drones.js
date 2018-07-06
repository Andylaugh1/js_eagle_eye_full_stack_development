const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Drones = function () {
  this.dronesData = [];
};

Drones.prototype.getData = function () {
  const request = new Request('https://api.dronestre.am/data')
  request.get((data) =>{
    PubSub.publish('Drones:drones-ready', data);
  })


};



module.export = Drones;
