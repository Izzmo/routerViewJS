define([], function () {
  'use strict';

  return function home(view) {
    view.get('views/home.html', function (html) {
      view.show();
    });
  };
});