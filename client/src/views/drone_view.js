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
DroneView.prototype.render = function (droneData) {
    const strikeCountry = document.createElement('p');
    strikeCountry.textContent = droneData.detail.country;
    this.container.appendChild(strikeCountry);
};
module.exports = DroneView;
