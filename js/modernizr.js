// @ts-nocheck
/*! Modernizr 3.6.0 (Custom Build) | MIT */
;(function(window, document, undefined){
  var tests = [];
  var Modernizr = function(){};
  Modernizr.prototype = {
    _version: '3.6.0',
    addTest: function(name, fn, options) {
      tests.push({name: name, fn: fn, options: options});
    }
  };
  window.Modernizr = new Modernizr();
  
  // CSS Animations test
  Modernizr.addTest('cssanimations', function() {
    var style = document.documentElement.style;
    return 'animationName' in style || 
           'WebkitAnimation' in style || 
           'MozAnimation' in style || 
           'OAnimation' in style || 
           'msAnimation' in style;
  });

})(window, document);