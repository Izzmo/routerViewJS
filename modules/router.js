define(['modules/view'], function (view) {
  'use strict';

  var index = '',
      routes = {};

  function removeEmpty(value) {
    return typeof value === 'string' && value.length > 0;
  }

  function getRoute() {
    var s = window.location.pathname.substring(window.location.pathname.indexOf(index)).split('/').filter(removeEmpty);
    if (s[0].indexOf(index) >= 0) s.shift();
    return s.join('/');
  }

  function findModule(selectedRoute) {
    var m = null;
    Object.keys(routes).forEach(function (route) {
      if (routes[route].url == selectedRoute) {
        m = routes[route].module;
        return false;
      }
    });
    return m;
  }

  function initRoute() {
    var route = getRoute();
    var m = findModule(route);
    if (null === m)
      console.error('route not found: ' + route);
    else
      m(view);
  }

  function dataRouteClickEvent(e) {
    e.preventDefault();
    window.history.pushState({ html: '' }, '', this.getAttribute('data-route'));
    initRoute();
  }

  return function router(indexName, routeTable) {
    if (typeof indexName === 'string')
      index = indexName;

    if (typeof routeTable === 'object' && Object.keys(routeTable).length)
      routes = routeTable;

    view.setOnLoad(function (domElement) {
      Array.prototype.forEach.call(domElement.querySelectorAll('[data-route]'), function (el, ix) {
        el.addEventListener('click', dataRouteClickEvent);
      });
    });
    window.onpopstate = function(e) {
       initRoute();
    };

    initRoute();
  };
});