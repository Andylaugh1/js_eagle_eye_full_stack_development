const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const GlobeView = function(container){
  this.container = container;
}

GlobeView.prototype.bindEvents = function () {
PubSub.subscribe('Drones:drones-ready', (evt) =>{
  this.clearList();
  this.renderDroneDetailView(evt.detail);
  });
};
