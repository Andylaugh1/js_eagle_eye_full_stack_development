const Drones = require('./models/drones.js');
const GlobeView = require('./views/globe_view.js');


document.addEventListener('DOMContentLoaded', ()=> {
  console.log("hello");


const dronesUrl ='http://localhost:3000/api/drones'
const drones = new Drones(dronesUrl);
drones.getData();
drones.bindEvents();

const mapContainer = document.querySelector('div#mapid');
const globeView = new GlobeView(mapContainer);
globeView.bindEvents();

// const mapContainer = document.querySelector('div#mapid')
// const map = new MapView(mapContainer);

})
