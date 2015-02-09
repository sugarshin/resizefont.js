// Generated by CoffeeScript 1.9.0
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory(require('jquery'), require('throttle-debounce')));
  } else if (typeof module !== 'undefined' && module.exports) {
    module.exports = factory(require('jquery'), require('throttle-debounce'));
  } else {
    root.FluidFont || (root.FluidFont = factory(root.jQuery));
  }
})(this, function($, td) {
  "use strict";
  var FluidFont;
  if (td === void 0) {
    td = $;
  }
  return FluidFont = (function() {
    FluidFont.prototype._defaults = {
      baseWidth: 640,
      baseSize: '1em',
      delay: 300,
      type: 'debounce'
    };

    function FluidFont(opts) {
      this.opts = $.extend({}, this._defaults, opts);
      this.$body = $('body');
      $('html').css('font-size', this.opts.baseSize);
      this.resize();
      this.addEvent();
    }

    FluidFont.prototype.resize = function(width) {
      var size;
      size = (width / this.opts.baseWidth * 100) + "%";
      this.$body.css('font-size', size);
      return this;
    };

    FluidFont.prototype.addEvent = function() {
      $(window).on('resize.fluidfont', td[this.opts.type](this.opts.delay, (function(_this) {
        return function() {
          return _this.resize(window.innerWidth);
        };
      })(this)));
      return this;
    };

    FluidFont.prototype.rmEvent = function() {
      $(window).off('resize.fluidfont');
      return this;
    };

    return FluidFont;

  })();
});
