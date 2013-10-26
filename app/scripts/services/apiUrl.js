'use strict';

angular.module('quantlTestApp')
  .service('apiUrl', function(appSettings) {
    return {
      toQueryString: function(params) {
        var parts = [];
        params = params || {};
        for (var i in params) {
          if (params.hasOwnProperty(i)) {
            if (params[i]) { // Only include non empty params
              parts.push(encodeURIComponent(i) + "=" + encodeURIComponent(params[i]));
            }
          }
        }
        return parts.join("&");
      },
      buildUrl: function(section, params) {
        var auth_token = {
          'auth_token': appSettings.apiToken
        };
        angular.extend(params, auth_token);
        return appSettings.apiBaseUrl + section + '.' + appSettings.apiExt + '?' + this.toQueryString(params);
      }
    }
  });