require.config({
  paths: {
    'jquery': 'vendor/jquery-1.8.3.min'
  }
});

define(['jquery'], function ($) {
  'use strict';

  function checkForPresenceOfHeaders(data) {
    if (data.headers)
      return data.headers;
    else
      return {};
  }

  return function ajax(verb, url, async, data, successCallback, errorCallback) {
    $.ajax({
      url: url,
      type: verb,
      async: async,
      data: data.form,
      headers: checkForPresenceOfHeaders(data),
      success: successCallback,
      error: errorCallback,
      complete: function () {}
    });
  };
});
