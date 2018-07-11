const Drones = require('./models/drones.js');
const GlobeView = require('./views/globe_view.js');
const DroneView = require("./views/drone_view.js");
const GeneralInfoView = require("./views/general_info_view.js");
const CountryInfoView = require("./views/country_info_view.js");
const Calculations = require('./helpers/calculations.js');
const ChartView = require('./views/chart_view.js');


document.addEventListener('DOMContentLoaded', ()=> {
  console.log("hello");

const dronesUrl ='http://localhost:3000/api/drones'
const drones = new Drones(dronesUrl);
drones.getData();


const mapContainer = document.querySelector('div#mapid');
const sideBar = document.querySelector('div#sidebar');
const globeView = new GlobeView(sideBar, mapContainer);
globeView.bindEvents();

const detailContainer = document.querySelector('div#strikes-data');
const droneView = new DroneView(detailContainer);
droneView.bindEvents();

const generalContainer = document.querySelector('div#general-info');
const generalInfoView = new GeneralInfoView(generalContainer);
generalInfoView.bindEvents();

const countryContainer = document.querySelector('div#country-info');
const countryInfoView = new CountryInfoView(countryContainer);
countryInfoView.bindEvents();


// const calculationsContainer = document.querySelector('div#calculations');
// const calculationsView = new CalculationsView(calculationsContainer);
// calculationsView.bindEvents();

const chartContainer = document.querySelector('div#chartContainer')
const chartView = new ChartView(chartContainer);
chartView.render();

})
