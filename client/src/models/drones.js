const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Drones = function (url) {
  this.url = url;
  this.dronesData = [];
};

Drones.prototype.getData = function () {
    const request = new Request(this.url);
    request.get()
      .then((data) => {
        PubSub.publish('Drones:data-loaded', games);
      })
      .catch(console.error);

};



module.exports = Drones;
