'use strict';

var bizHrs = ['6 am', '7 am', '8am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'];

var firstPike = {
    hrlyCookies: 6.3, // average cookies per hour
    custMax: 65, // maximum amount of customers
    custMin: 23, // minimum about of customers
    hrlyCust: function() { // finds customers per hour
        return Math.floor((Math.random() * this.custMax - this.custMin + 1) + this.custMin); // source: MDN docs
      },
      render: function() {
          for(var i = 0; i < bizHrs.length; i++) {
              var firstStore = document.getElementById('firstPike');
              var liEl = document.createElement('li');
              var hrlySales = Math.floor((this.hrlyCust(this.custMin,this.custMax)) * this.hrlyCookies);
              liEl.textContent = bizHrs[i]  + ': ' + hrlySales + ' cookies sold.'; // output ex. "6am: 30 cookies sold."
              firstStore.appendChild(liEl);
          }
      }
};

var secondStore = document.getElementById('seatacAirport');
var seatacAirport = {
    hrlyCookies: 1.2, // average cookies per hour
    custMax: 24, // maximum amount of customers
    custMin: 3, // minimum about of customers
    hrlyCust: function() { // finds customers per hour
        return Math.floor((Math.random() * this.custMax - this.custMin + 1) + this.custMin); // source: MDN docs
      },
      render: function() {
          for(var i = 0; i < bizHrs.length; i++) {
              var liEl = document.createElement('li');
              var hrlySales = Math.floor((this.hrlyCust(this.custMin,this.custMax)) * this.hrlyCookies);
              liEl.textContent = bizHrs[i]  + ': ' + hrlySales + ' cookies sold.'; // output ex. "6am: 30 cookies sold."
              secondStore.appendChild(liEl);
          }
      }
};

var thirdStore = document.getElementById('seattleCenter');
var seattleCenter = {
    hrlyCookies: 3.7, // average cookies per hour
    custMax: 38, // maximum amount of customers
    custMin: 11, // minimum about of customers
    hrlyCust: function() { // finds customers per hour
        return Math.floor((Math.random() * this.custMax - this.custMin + 1) + this.custMin); // source: MDN docs
      },
      render: function() {
          for(var i = 0; i < bizHrs.length; i++) {
              var liEl = document.createElement('li');
              var hrlySales = Math.floor((this.hrlyCust(this.custMin,this.custMax)) * this.hrlyCookies);
              liEl.textContent = bizHrs[i]  + ': ' + hrlySales + ' cookies sold.'; // output ex. "6am: 30 cookies sold."
              thirdStore.appendChild(liEl);
          }
      }
};

var fourthStore = document.getElementById('capitolHill');
var capitolHill = {
    hrlyCookies: 2.3, // average cookies per hour
    custMax: 38, // maximum amount of customers
    custMin: 20, // minimum about of customers
    hrlyCust: function() { // finds customers per hour
        return Math.floor((Math.random() * this.custMax - this.custMin + 1) + this.custMin); // source: MDN docs
      },
      render: function() {
          for(var i = 0; i < bizHrs.length; i++) {
              var liEl = document.createElement('li');
              var hrlySales = Math.floor((this.hrlyCust(this.custMin,this.custMax)) * this.hrlyCookies);
              liEl.textContent = bizHrs[i]  + ': ' + hrlySales + ' cookies sold.'; // output ex. "6am: 30 cookies sold."
              fourthStore.appendChild(liEl);
          }
      }
};

var fifthStore = document.getElementById('alki');
var alki = {
    hrlyCookies: 4.6, // average cookies per hour
    custMax: 16, // maximum amount of customers
    custMin: 2, // minimum about of customers
    hrlyCust: function() { // finds customers per hour
        return Math.floor((Math.random() * this.custMax - this.custMin + 1) + this.custMin); // source: MDN docs
      },
      render: function() {
          for(var i = 0; i < bizHrs.length; i++) {
              var liEl = document.createElement('li');
              var hrlySales = Math.floor((this.hrlyCust(this.custMin,this.custMax)) * this.hrlyCookies);
              liEl.textContent = bizHrs[i]  + ': ' + hrlySales + ' cookies sold.'; // output ex. "6am: 30 cookies sold."
              fifthStore.appendChild(liEl);
          }
      }
};

firstPike.render();
seatacAirport.render();
seattleCenter.render();
capitolHill.render();
alki.render();