'use strict';

describe('Controller: SearchDataSetsCtrl', function () {

  // load the controller's module
  beforeEach(module('quantlTestApp'));

  var SearchDataSetsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SearchDataSetsCtrl = $controller('SearchDataSetsCtrl', {
      $scope: scope
    });
  }));
});
