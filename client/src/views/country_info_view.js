const PubSub = require('../helpers/pub_sub.js');
const GlobeView = require('./globe_view.js');

const CountryInfoView = function (container) {
    this.container = container;
};

CountryInfoView.prototype.bindEvents = function () {
    PubSub.subscribe('Drones:selected-strike', (countryData) => {
        this.render(countryData);
    })

};

CountryInfoView.prototype.render = function (countryData) {
  this.container.innerHTML = " ";
    const country = document.createElement('h1');
    const town = document.createElement('p');
    country.textContent = countryData.detail.country;
    town.textContent = countryData.detail.town;
    this.container.appendChild(country);
    this.container.appendChild(town);
};

module.exports = CountryInfoView;
