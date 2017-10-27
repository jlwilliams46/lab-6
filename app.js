'use strict';

var firstPike = {
  hrlyCookies: 6.3, // average cookies per hour
  custMax: 65, // maximum amount of customers
  custMin: 23, // minimum about of customers
  bizhrs: ['6 am', '7 am', '8am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'], // hours of business operations

  hrlyCust: function () { // finds customers per hour
    return Math.floor((Math.random() * this.custMax - this.custMin + 1) + this.custMin); // source: MDN docs
  },
  render: function() { // HTML DOM textContent Property source: w3schols.com
    while(i < bizhrs.length) {
      i = 0;
      var firstStore = documemt.getElementById('firstPike'); // source: MDN docs
      var liEl = document.createElement('li'); // source: MDN docs
      var hrlySales = Math.floor((this.hrlyCust(this.custMin,this.custMax)) * this.hrlyCookies);
      liEl.textContent = bizhrs[i] + ': ' + hrlySales + ' cookies sold.';// output ex. "6am: 30 cookies sold."
      firstStore.appendChild(liEl); // source: MDN docs
      i++;
    }
  }
};

var seatacAirport = {
  hrlyCookies: 1.2, // average cookies per hour
  custMax: 24, // maximum amount of customers
  custMin: 3, // minimum about of customers
  bizhrs: ['6 am', '7 am', '8am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'], // hours of business operations

  hrlyCust: function () { // finds customers per hour
    return Math.floor((Math.random() * this.custMax - this.custMin + 1) + this.custMin); // source: MDN docs
  },
  render: function() { // HTML DOM textContent Property source: w3schols.com
    while(i < bizhrs.length) {
      i = 0;
      var secondStore = documemt.getElementById('seatacAirport'); // source: MDN docs
      var liEl = document.createElement('li'); // source: MDN docs
      var hrlySales = Math.floor((this.hrlyCust(this.custMin,this.custMax)) * this.hrlyCookies);
      liEl.textContent = bizhrs[i] + ': ' + hrlySales + ' cookies sold.'; // output ex. "6am: 30 cookies sold."
      secondStore.appendChild(liEl); // source: MDN docs
      i++;
    }
  }
};

var seattleCenter = {
  hrlyCookies: 3.7, // average cookies per hour
  custMax: 38, // maximum amount of customers
  custMin: 11, // minimum about of customers

  hrlyCust: function () { // finds customers per hour
    return Math.floor((Math.random() * this.custMax - this.custMin + 1) + this.custMin); // source: MDN docs
  },
  render: function() { // HTML DOM textContent Property source: w3schols.com
    while(i < bizhrs.length) {
      i = 0;
      var thirdStore = documemt.getElementById('seattleCenter'); // source: MDN docs
      var liEl = document.createElement('li'); // source: MDN docs
      var hrlySales = Math.floor((this.hrlyCust(this.custMin,this.custMax)) * this.hrlyCookies);
      liEl.textContent = bizhrs[i] + ': ' + hrlySales + ' cookies sold.'; // output ex. "6am: 30 cookies sold."
      thirdStore.appendChild(liEl); // source: MDN docs
      i++;
    }
  }
};

var capitolHill = {
  hrlyCookies: 2.3, // average cookies per hour
  custMax: 38, // maximum amount of customers
  custMin: 20, // minimum about of customers
  bizhrs: ['6 am', '7 am', '8am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'], // hours of business operations

  hrlyCust: function () { // finds customers per hour
    return Math.floor((Math.random() * this.custMax - this.custMin + 1) + this.custMin); // source: MDN docs
  },
  render: function() { // HTML DOM textContent Property source: w3schols.com
    while(i < bizhrs.length) {
      i = 0;
      var fourthStore = documemt.getElementById('capitolHill'); // source: MDN docs
      var liEl = document.createElement('li'); // source: MDN docs
      var hrlySales = Math.floor((this.hrlyCust(this.custMin,this.custMax)) * this.hrlyCookies);
      liEl.textContent = bizhrs[i] + ': ' + hrlySales + ' cookies sold.'; // output ex. "6am: 30 cookies sold."
      fourthStore.appendChild(liEl); // source: MDN docs
      i++;
    }
  }
};

var alkiBeach = {
  hrlyCookies: 3.7, // average cookies per hour
  custMax: 38, // maximum amount of customers
  custMin: 11, // minimum about of customers
  bizhrs: ['6 am', '7 am', '8am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'], // hours of business operations

  hrlyCust: function () { // finds customers per hour
    return Math.floor((Math.random() * this.custMax - this.custMin + 1) + this.custMin); // source: MDN docs
  },
  render: function() { // HTML DOM textContent Property source: w3schols.com
    while(i < bizhrs.length) {
      i = 0;
      var fifthStore = documemt.getElementById('alkiBeach'); // source: MDN docs
      var liEl = document.createElement('li'); // source: MDN docs
      var hrlySales = Math.floor((this.hrlyCust(this.custMin,this.custMax)) * this.hrlyCookies);
      liEl.textContent = bizhrs[i] + ': ' + hrlySales + ' cookies sold.'; // output ex. "6am: 30 cookies sold."
      fifthStore.appendChild(liEl); // source: MDN docs
      i++;
    }
  }
};

firstPike.render(); // first store
seatacAirport.render(); // second store
seattleCenter.render(); // third store
capitolHill.render(); // fourth store
alkiBeach.render(); // fifth store
