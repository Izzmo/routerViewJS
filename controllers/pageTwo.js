define([], function () {
  'use strict';

  return function pageTwo(view) {
    view.get('views/pageTwo.html', function (html) {
      view.show();
    });
  };
});