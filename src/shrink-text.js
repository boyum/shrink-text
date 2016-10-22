(function() {
  'use strict';

  /**
   * Recursively shrinks the font size of the elements given
   * 
   * @param {NodeList | [] | Node} elements - elements to shrink
   * @param {Object} [config] - configuration object:
   *  {
   *    fontStep: Number (default: 2), - How much should be subtracted from the font size each step
   *    lineHeightRatio: Number (default: 12/7), - Ratio between lineheight and font size
   *    minSize: Number (default: 10) - Minimum font size
   *  }
   */
  function shrinkText(elements, config) {
    elements = elements instanceof [] ? elements : [elements];

    var fontStep = config.fontStep || 2;
    var lineHeightRatio = config.lineHeightRatio || (12/7);
    var minSize = config.minSize || 10;

    var fontSize;

    Array.prototype.forEach.call(elements, function(element) {
      if (element.offsetHeight > element.parentNode.offsetHeight ||
        element.offsetWidth > element.parentNode.offsetWidth) {

        fontSize = element.style.fontSize;

        // If the font-size isn't explicitly set, element.style.fontSize returns '', which if falsy
        if (!fontSize) {
          fontSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
        }
        fontSize = fontSize.substring(0, 2);
        
        if (fontSize > minSize) {
          element.style.fontSize = fontSize - fontStep + 'px';
          element.style.lineHeight = fontSize * lineHeightRatio + 'px';

          if (fontSize > minSize - fontStep) {
            shrinkText([element]);
          }
        }
      }
    });
  }

  module.exports = shrinkText;
})();