const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Drones = function (url) {
  this.url = url;
  this.dronesData = [];
};

Drones.prototype.bindEvents = function () {
  PubSub.subscribe('Drones:selected-strike', (event) => {
    const strikeData = event.detail;
    console.log(strikeData);
  });

};

Drones.prototype.getData = function () {
  const url = this.url;
  const request = new Request(url);
  const handleRequest = (responseData) => {
    this.dronesData = responseData;
    PubSub.publish('Drones:data-ready', this.dronesData);

  }

  request.get()
    .then(handleRequest)
    .catch(error => console.error(error));
};



module.exports = Drones;
