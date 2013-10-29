'use strict';

describe('Controller: NavigationCtrl', function () {

  // load the controller's module
  beforeEach(module('quandlAngularApp'));

  var NavigationCtrl, scope, location;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $location) {
    scope = $rootScope.$new();
    location = $location;
    NavigationCtrl = $controller('NavigationCtrl', {
      $scope: scope
    });
  }));

  it('should gotoHome work', function () {
    scope.gotoHome();
    expect(location.path()).toBe('/');
  });

  it('should gotoSearchDataSet function', function () {
    scope.gotoSearchDataSet();
    expect(location.path()).toBe('/searchDataSets');
  });
});
