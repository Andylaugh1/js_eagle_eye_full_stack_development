const GeneralInfoView = function(container){
  this.container = container;
}

GeneralInfoView.prototype.bindEvents = function () {
  this.render();
};

GeneralInfoView.prototype.render = function () {
  const heading = document.createElement('h2');
  const line1 = document.createElement('p');
  const line2 = document.createElement('p');
  const line3 = document.createElement('p');
  const line4 = document.createElement('p');
  const line5 = document.createElement('p');

  heading.textContent = "What is a Drone?"

  line1.textContent = `To the military, drones are UAVs (Unmanned Aerial Vehicles) or RPAS (Remotely Piloted Aerial Systems).`
  line2.textContent = `They are quickly becoming one of the U.S. military's primary weapons as the U.S. counterterrorism shifts from engaging in traditional, specified armed conflicts to targeting and killing individuals regardless of their location.`
  line3.textContent = `Drones are used in situations where manned flight is considered too risky or difficult. They provide troops with a 24-hour "eye in the sky", seven days a week. Each aircraft can stay aloft for up to 17 hours at a time, loitering over an area and sending back real-time imagery of activities on the ground.`
  line4.textContent = `Although the US Government does not routinely speak publicly about operations involving drones, President Obama confirmed that they regularly targeted suspected militant targets in Pakistan's tribal areas.`
  line5.textContent = `Drones are seen by many in the military as delivering precision strikes without the need for more intrusive military action. However, they are not without controversy…`

  this.container.appendChild(heading);
  this.container.appendChild(line1);
  this.container.appendChild(line2);
  this.container.appendChild(line3);
  this.container.appendChild(line4);
  this.container.appendChild(line5);
};



module.exports = GeneralInfoView;
