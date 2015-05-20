require(['modules/router', 'controllers/home', 'controllers/pageTwo'], function (router, home, pageTwo) {
  'use strict';
  
  var routes = {
    home: { url: '', module: home },
    pageTwo: { url: 'page-two', module: pageTwo },
  };

  router('example', routes);
});