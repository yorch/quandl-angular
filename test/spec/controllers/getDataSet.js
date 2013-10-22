'use strict';

describe('Controller: GetDataSetCtrl', function () {

  // load the controller's module
  beforeEach(module('quantlTestApp'));

  var GetDataSetCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GetDataSetCtrl = $controller('GetDataSetCtrl', {
      $scope: scope
    });
  }));
});
