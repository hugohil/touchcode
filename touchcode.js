'use strict';

/**
 * Touchcode constructor
 * @constructor
 */
function Touchcode(){}

/**
 * Initilization of the Touchcode.
 * @param {Array} sequence - Sequence to execute.
 * @param  {Function} callback - The callback function to be executed when the sequence is over.
 */
Touchcode.prototype.init = function(sequence, callback){
  var self = this;
  self.counter = 0;
  self.sequence = sequence;
  self.cb = callback;
  var detect = function(event){
    var x, y;
    if(event instanceof TouchEvent){
      x = event.touches[0].clientX;
      y = event.touches[0].clientY;
    } else {
      x = event.clientX;
      y = event.clientY;
    }
    var zone = self.zone(x, y);
    console.log('touchcode.js:23 - ', zone);
    if(sequence[self.counter] == zone){
      if(self.counter == sequence.length - 1){
        self.cb();
      } else {
        self.counter++;
      }
    } else {
      self.counter = 0;
    }
  }
  document.body.addEventListener('touchstart', detect, true);
  document.body.addEventListener('click', detect, true);
}

/**
 * Zone detection function
 * @param  {Number} x - clientX
 * @param  {Number} y - clientY
 * @return {String | null} Will return the String associated to the current zone where the event was triggered. Will return null if x or y are not numbers.
 */
Touchcode.prototype.zone = function(x, y){
  if(typeof(x) !== 'number' || typeof(y) !== 'number'){
    return null;
  }
  if(x < window.innerWidth / 2){
    if(y < window.innerHeight/ 2){
      return 'A';
    } else {
      return 'C';
    }
  } else {
    if(y < window.innerHeight / 2){
      return 'B';
    } else {
      return 'D';
    }
  }
}

/*
 * TODO:
 *   - Define custom touch point with a custom padding.
 *   - Implement a timeout to reset the counter.
 */