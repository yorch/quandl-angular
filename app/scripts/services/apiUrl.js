'use strict';

angular.module('quantlTestApp')
  .service('apiUrl', function (appSettings) {
    return {
      build_url: function(section, params) {
        var auth_token = 'auth_token=' + appSettings.apiToken;
        var url = appSettings.apiBaseUrl + section + '.' + appSettings.apiExt + '?' +
          auth_token + (params ? '&' + params : '');
        return url;
      }
    }
  });
