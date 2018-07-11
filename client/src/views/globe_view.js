const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');
const Drones = require('../models/drones.js');
const L = require('leaflet');
const CountryInfoView = require('./country_info_view.js')

const GlobeView = function(container, container2){
  this.myMap = null;
  this.container = container;
  this.container2 = container2;
  this.selectElement = document.querySelector('select#filter-list');
  this.markers = [];
  this.button = document.querySelector('input#reset-button');
}

GlobeView.prototype.bindEvents = function () {
  PubSub.subscribe('Drones:data-ready', (evt) =>{
    droneData = evt.detail;
    data = droneData.strike;
    selectedYear = this.mapSliderFilter(data);
    this.mapRender(droneData.strike);
    this.populateFilter();
  });

  GlobeView.prototype.filterByYear = function (data, selectedYear) {
    const allFromYear = data.filter((drone) => drone.date.substring(0,4) === selectedYear)
    return allFromYear;
  };

  GlobeView.prototype.mapSliderFilter = function (data) {

    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");

    slider.oninput = (evt) => {
      output.innerHTML = evt.target.value;
      filteredData = this.filterByYear(data, evt.target.value);
      this.renderMarkers(filteredData);
    };

  };

  this.selectElement.addEventListener('change', (event) => {
    const countryName = event.target.value;
    const data = droneData.strike;
    const newData = data.filter(drone => drone.country === countryName);
    this.renderMarkers(newData);
    if (countryName === "Pakistan"){
      this.myMap.setView([33, 69], 5.5)
    }
    else if (countryName === "Somalia") {
      this.myMap.setView([2.5, 43], 6)
    }
    else if (countryName === "Yemen") {
      this.myMap.setView([15.3, 47.2], 6.5)
    }
  })

  this.button.addEventListener('click', (event) => {
    const buttonClicked = event.target.value;
    this.clearMarkers();
    this.renderMarkers(droneData.strike);
    this.myMap.setView([20, 56], 3.5);
  })

};



GlobeView.prototype.mapRender = function (droneData) {
  this.myMap = L.map(this.container2).setView([20, 56], 3.5);
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution:
    'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.light',
    accessToken: 'pk.eyJ1IjoiYXQtbGF1Z2hsaW4iLCJhIjoiY2pqYjhjc2VkM21uaDNxbzR2aGh3Ynh5ciJ9.N4uJndedEpzsbVCwTCNnJw'
  })
  .addTo(this.myMap);

  this.renderMarkers(droneData)
};

GlobeView.prototype.renderMarkers = function (droneData) {
  this.clearMarkers();
  droneData.forEach((drone, index) => {
    var marker = L.marker([drone.lat, drone.lon], {droneInfo: drone}).addTo(this.myMap)
    .on('click', (event) => {
      const selectedIndex = event.target.options.droneInfo;
      PubSub.publish('Drones:selected-strike', selectedIndex);
    });
    this.markers.push(marker);
  });
};

GlobeView.prototype.clearMarkers = function () {
  this.markers.forEach((marker) => {
    marker.remove();
  })
};

GlobeView.prototype.populateFilter = function () {
  const blank = document.createElement('option');
  const option1 = document.createElement('option');
  const option2 = document.createElement('option');
  const option3 = document.createElement('option');
  blank.textContent = 'select country'
  option1.textContent = 'Pakistan';
  option2.textContent = 'Somalia';
  option3.textContent = 'Yemen';
  this.selectElement.appendChild(blank)
  this.selectElement.appendChild(option1)
  this.selectElement.appendChild(option2)
  this.selectElement.appendChild(option3)
};

module.exports = GlobeView;
