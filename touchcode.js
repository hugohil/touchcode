'use strict';

/**
 * Touchcode constructor.
 * @constructor
 */
function Touchcode(){}

/**
 * Initilization of the Touchcode.
 * @param {Array} sequence - An array of objects {x,y} correspond to the point where the user should clic/touch to trigger the action.
 * @param {Number} padding - The padding for the bouding box of your points.
 * @param  {Function} callback - The callback function to be executed when the sequence is over.
 */
Touchcode.prototype.init = function(sequence, padding, callback){
  var self = this;
  self.counter = 0;
  self.sequence = sequence;
  self.padding = padding;
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
    if(zone){
      if(self.counter == sequence.length - 1){
        self.cb();
      } else {
        self.counter++;
      }
    } else {
      self.counter = 0;
    }
  }
  if(('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)){
    document.body.addEventListener('touchstart', detect, true);
  } else {
    document.body.addEventListener('click', detect, true);
  }
}

/**
 * Zone detection function. It is called on the event handler, you won't have to deal with it.
 * @param  {Number} x - clientX.
 * @param  {Number} y - clientY.
 * @return {Boolean} Will return true or false, depending if the event was triggered on the correct point in your sequence at the right index.
 */
Touchcode.prototype.zone = function(x, y){
  var self = this;
  if(typeof(x) !== 'number' || typeof(y) !== 'number'){
    return null;
  }
  var index = self.counter;
  if(x > (self.sequence[index].x) - self.padding && x < (self.sequence[index].x + self.padding)){
    if(y > (self.sequence[index].y) - self.padding && y < (self.sequence[index].y + self.padding)){
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

/*
 * TODO:
 *   - Implement a timeout to reset the counter.
 */