const Drones = require('./models/drones.js');


document.addEventListener('DOMContentLoaded', ()=> {
  console.log("hello");


const dronesUrl ='http://localhost:3000/api/drones'
const drones = new Drones(dronesUrl);
drones.getData();

// const mapContainer = document.querySelector('div#mapid')
// const map = new MapView(mapContainer);

})
