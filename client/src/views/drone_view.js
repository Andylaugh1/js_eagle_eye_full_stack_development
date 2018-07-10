const PubSub = require('../helpers/pub_sub.js');
const GlobeView = require('./globe_view.js');

const DroneView = function (container) {
    this.container = container;
};

DroneView.prototype.bindEvents = function () {
    PubSub.subscribe('Drones:selected-strike', (droneData) => {
    this.render(droneData);
    })
};

// DroneView.prototype.populateSidebar = function () {
//    const sidebarContent
//
// };

DroneView.prototype.render = function (droneData) {
  this.container.innerHTML = " ";
    const heading = document.createElement('h2');
    const strikeTown = document.createElement('p');
    const strikeDate = document.createElement('p');
    const strikeNarrative = document.createElement('p');
    const strikeDeaths = document.createElement('p');
    const strikeInjuries = document.createElement('p');
    const strikeSummary = document.createElement('p');

    heading.textContent = 'Strike Details';
    strikeTown.textContent = "Town : " + droneData.detail.town;
    const strikeDateFormat = droneData.detail.date.split("-");
    const strikeDay = droneData.detail.date.substring(8, 10);
    console.log(strikeDay);
    strikeDate.textContent = "Date : " + strikeDay + '/' + strikeDateFormat[1] + '/' + strikeDateFormat[0];
    strikeDeaths.textContent = "Total Deaths : " + droneData.detail.deaths;
    strikeInjuries.textContent = "Total Injuries : " + droneData.detail.injuries;
    strikeSummary.textContent = droneData.detail.bij_summary_short;

    this.container.appendChild(heading);
    this.container.appendChild(strikeTown);
    this.container.appendChild(strikeDate);
    this.container.appendChild(strikeDeaths);
    this.container.appendChild(strikeInjuries);
    this.container.appendChild(strikeSummary);
};
module.exports = DroneView;
