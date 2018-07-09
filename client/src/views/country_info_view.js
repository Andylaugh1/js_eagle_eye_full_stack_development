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
  const info = document.createElement('p');
  country.textContent = countryData.detail.country;
  town.textContent = countryData.detail.town;
  info.textContent = this.getSelectedCountryInfo(countryData);
  this.container.appendChild(country);
  this.container.appendChild(town);
  this.container.appendChild(info);
};

CountryInfoView.prototype.getSelectedCountryInfo = function (countryData) {
  data = "";
  if (countryData.detail.country === "Yemen") {
    data = `Yemen’s conflict began in 2014, when the Houthis, Shia rebels from the country’s north, seized the nation’s capital and ousted the Saudi-backed ruler, Abd Rabbu Mansour Hadi, who lives in exile in Riyadh. In response, a Saudi-led Arab coalition began a bombing campaign in 2015, to restore the exiled government to power.

    US drone strikes in Yemen are a key part of the campaign against al-Qaida in the Arabian Peninsula (AQAP)

    Airstrikes have also increased in Yemen, where the US campaign against Islamists has played out alongside a tangled civil war, which has already drawn in regional rivals Saudi Arabia and Iran.`
  } else if (countryData.detail.country === "Pakistan") {
    data = `The Haqqani network, affiliated with the Taliban and designated as a terrorist group by the United States, has carried out numerous deadly attacks in Afghanistan in recent years. The presence of its leaders and militants in Pakistan and its links with the country’s military intelligence agency have long caused friction between United States and Pakistan.

    The Kurram region has been used frequently by Haqqani network fighters to cross into neighbouring Afghanistan.
    Hence the US has been targeting these network fighters, within Pakistani regions.` }
    
    return data;
  };

  module.exports = CountryInfoView;
