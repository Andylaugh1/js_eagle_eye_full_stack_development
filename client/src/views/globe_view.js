const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');
const Drones = require('../models/drones.js');
const L = require('leaflet')
require('leaflet-sidebar')

const GlobeView = function(container, container2){
  this.container = container;
  this.container2 = container2;
}

GlobeView.prototype.bindEvents = function () {
  PubSub.subscribe('Drones:data-ready', (evt) =>{
    droneData = evt.detail;
    // console.log(evt.detail);
    this.mapRender(droneData);
  });
};

GlobeView.prototype.mapRender = function (droneData) {

  var mymap = L.map(this.container2).setView([20, 55], 3.5);

  droneData.strike.forEach((drone, index) => {
    var marker = L.marker([drone.lat, drone.lon], {droneInfo: drone}).addTo(mymap)
    .on('click', (event) => {
        const selectedIndex = event.target.options.droneInfo;
        PubSub.publish('Drones:selected-strike', selectedIndex);
    });

});

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution:
    'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.light',
    accessToken: 'pk.eyJ1IjoiYXQtbGF1Z2hsaW4iLCJhIjoiY2pqYjhjc2VkM21uaDNxbzR2aGh3Ynh5ciJ9.N4uJndedEpzsbVCwTCNnJw'
  })
  .addTo(mymap);

  var sidebar = L.control.sidebar(this.container, {
    position: 'left'
  });
  console.log(mymap);
  console.log(sidebar);
  mymap.addControl(sidebar);
  sidebar.show()
  sidebar.setContent("A String")
};


module.exports = GlobeView;
