const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');
const Drones = require('../models/drones.js');


const GlobeView = function(container, container2){
  this.container = container;
  this.container2 = container2;
}

GlobeView.prototype.bindEvents = function () {
PubSub.subscribe('Drones:data-ready', (evt) =>{
  droneData = evt.detail;
  this.render(droneData);
  this.mapRender(droneData);
  });
};


GlobeView.prototype.render = function (droneData) {
  droneData.strike.forEach((drone, index) => {
    const strike = document.createElement('p');
    strike.value = index;
    var lat = drone.lat;
    var lon = drone.lon;
  });

};

GlobeView.prototype.mapRender = function (droneData) {

  var mymap = L.map(this.container2).setView([25, 56.4], 4.5);
  droneData.strike.forEach((drone, index) => {
  L.marker([drone.lat, drone.lon]).addTo(mymap);
})
// var marker = L.marker([25, 56]).addTo(mymap);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox.emerald',
  accessToken: 'pk.eyJ1IjoiYXQtbGF1Z2hsaW4iLCJhIjoiY2pqYjhjc2VkM21uaDNxbzR2aGh3Ynh5ciJ9.N4uJndedEpzsbVCwTCNnJw'
}).addTo(mymap);

};


module.exports = GlobeView;
