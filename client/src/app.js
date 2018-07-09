const Drones = require('./models/drones.js');
const GlobeView = require('./views/globe_view.js');
const DroneView = require("./views/drone_view.js");
const GeneralInfoView = require("./views/general_info_view.js");
const CountryInfoView = require("./views/country_info_view.js");


document.addEventListener('DOMContentLoaded', ()=> {
  console.log("hello");

const dronesUrl ='http://localhost:3000/api/drones'
const drones = new Drones(dronesUrl);
drones.getData();


const mapContainer = document.querySelector('div#mapid');

const globeView = new GlobeView(mapContainer);
globeView.bindEvents();

const detailContainer = document.querySelector('div#sidebar');
const droneView = new DroneView(detailContainer);
droneView.bindEvents();

const generalContainer = document.querySelector('div#general-info');
const generalInfoView = new GeneralInfoView(generalContainer);
generalInfoView.bindEvents();

const countryContainer = document.querySelector('div#country-info');
const countryInfoView = new CountryInfoView(countryContainer);
countryInfoView.bindEvents();
})
