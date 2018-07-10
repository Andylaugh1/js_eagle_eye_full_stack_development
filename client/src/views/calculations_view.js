const Drones = require('../models/drones.js')
const PubSub = require('../helpers/pub_sub.js')
const Highcharts = require('highcharts');

const CalculationsView = function (container) {
    this.container = container;
}

CalculationsView.prototype.bindEvents = function () {
    PubSub.subscribe('Drones:data-ready', (evt) => {

        initialData = evt.detail;
        dronesData = initialData.strike;

        this.render();
    })
};

CalculationsView.prototype.render = function () {
    const minDeaths = document.createElement('p');
    const maxDeaths = document.createElement('p');
    const injuriesTotal = document.createElement('p');
    const civilianDeaths = document.createElement('p');
    const childrenDeaths = document.createElement('p');

    maxDeaths.textContent = 'Max Deaths : ' + this.maxDeaths(dronesData);
    minDeaths.textContent = 'Min Deaths : ' + this.minDeaths(dronesData);
    injuriesTotal.textContent = 'Recorded Injuries : ' + this.injuriesTotal(dronesData);
    civilianDeaths.textContent = 'Recorded Civilian Deaths : ' + this.civilianDeaths(dronesData);
    childrenDeaths.textContent = 'Recorded Child Deaths : ' + this.childrenDeaths(dronesData);

    this.container.appendChild(maxDeaths);
    this.container.appendChild(minDeaths);
    this.container.appendChild(civilianDeaths);
    this.container.appendChild(injuriesTotal);
    this.container.appendChild(childrenDeaths);

};

CalculationsView.prototype.totalDeaths = function (dronesData) {
    let totalDeaths = 0;
    dronesData.forEach((drone) => {
        if ( ! isNaN(parseInt(drone.deaths))){
            totalDeaths += parseInt(drone.deaths)
        }
    })
    console.log(`total:${totalDeaths}`);
    return parseInt(totalDeaths);
};
CalculationsView.prototype.minDeaths = function (dronesData) {
    let minDeaths = 0;
    dronesData.forEach((drone) => {
        if ( ! isNaN(parseInt(drone.deaths_min))){
            minDeaths += parseInt(drone.deaths_min)
        }
    })
    return parseInt(minDeaths);
};

CalculationsView.prototype.maxDeaths = function (dronesData) {
    let maxDeaths = 0;
    dronesData.forEach((drone) => {
        if ( ! isNaN(parseInt(drone.deaths_max))){
            maxDeaths += parseInt(drone.deaths_max)
        }
    })
    return parseInt(maxDeaths);

};

CalculationsView.prototype.injuriesTotal = function (dronesData) {
    let injuriesTotal = 0;
    dronesData.forEach((drone) => {
        if ( ! isNaN(parseInt(drone.injuries))){
            injuriesTotal += parseInt(drone.injuries)
        }
    })
    return parseInt(injuriesTotal);
};

CalculationsView.prototype.civilianDeaths = function (dronesData) {
    let civilianDeaths = 0;
    dronesData.forEach((drone) => {
        if ( ! isNaN(parseInt(drone.civilians))){
            civilianDeaths += parseInt(drone.civilians)
        }
    })
    return parseInt(civilianDeaths);
};

CalculationsView.prototype.childrenDeaths = function (dronesData) {
    let childrenDeaths = 0;
    dronesData.forEach((drone) => {
        if ( ! isNaN(parseInt(drone.children))){
            childrenDeaths += parseInt(drone.children)
        }
    })
    return parseInt(childrenDeaths);
};




module.exports = CalculationsView;
