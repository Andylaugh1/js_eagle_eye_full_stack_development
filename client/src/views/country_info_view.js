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
  const conflictDetails =  document.createElement('h2')
  const country = document.createElement('h3');
  const info = document.createElement('p');

  conflictDetails.textContent = "Conflict History"
  country.textContent = countryData.detail.country;
  info.textContent = this.getSelectedCountryInfo(countryData);

  this.container.appendChild(conflictDetails)
  this.container.appendChild(country);
  this.container.appendChild(info);
};

CountryInfoView.prototype.getSelectedCountryInfo = function (countryData) {
  data = "";
  if (countryData.detail.country === "Yemen") {
    data = `Yemen’s conflict began in 2014, when the Houthis, Shia rebels from the country’s north, seized the nation’s capital and ousted the Saudi-backed ruler, Abd Rabbu Mansour Hadi, who lives in exile in Riyadh. In response, a Saudi-led Arab coalition began a bombing campaign in 2015, to restore the exiled government to power.

    US drone strikes in Yemen are a key part of the campaign against al-Qaida in the Arabian Peninsula (AQAP)

    Airstrikes have also increased in Yemen, where the US campaign against Islamists has played out alongside a tangled civil war, which has already drawn in regional rivals Saudi Arabia and Iran.`
  }
  else if (countryData.detail.country === "Pakistan") {
    data = `The Haqqani network, affiliated with the Taliban and designated as a terrorist group by the United States, has carried out numerous deadly attacks in Afghanistan in recent years. The presence of its leaders and militants in Pakistan and its links with the country’s military intelligence agency have long caused friction between United States and Pakistan.

    The Kurram region has been used frequently by Haqqani network fighters to cross into neighbouring Afghanistan.
    Hence the US has been targeting these network fighters, within Pakistani regions.`
  }
  else if (countryData.detail.country === "Somalia") {
    data = `Almost all the strikes target al-Shabaab, the al-Qaida affiliated extremist movement fighting to establish an Islamic state in Somalia for more than a decade.

Most airstrikes hit deep into the territory held by Islamist militants and confirmation of claims of civilian casualties, even when made by relatives of those hurt or killed, is difficult. Some of the dead or injured may be fighters with armed tribal militias who are technically civilians, though sometimes align with the militants.
Michael Keating, the UN special representative in Somalia, said: “All those who are using military means in one way or another [in Somalia] claim that they have standards when it comes to the protection of civilians but are not translating their principles into practice. All actors could do more to protect civilians.”

The strikes have also killed large numbers of livestock and caused extensive damage done to agricultural infrastructure.`
  }

    return data;
  };

  module.exports = CountryInfoView;
