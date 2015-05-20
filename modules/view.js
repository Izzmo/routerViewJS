define(['modules/ajax'], function (ajax) {
  'use strict';

  var urlPrefix = '/resources/js/',
      htmlElement,
      onLoad = function (domElement) { };

  function show() {
    var e = document.querySelector('.viewContainer');
    if (null !== e) {
      e.innerHTML = '';
      e.appendChild(htmlElement);
    }
  }

  function getView(location, callback) {
    if (typeof location === 'string') {
      ajax('GET', urlPrefix + location, true, {}, function (content) {
        var div = document.createElement('div');
        div.innerHTML = content;
        htmlElement = div;
        onLoad(div);
        callback(div);
      });
    }
  }

  return {
    get: getView,
    show: show,
    setOnLoad: function (fn) { onLoad = fn; }
  };
});