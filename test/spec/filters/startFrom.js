'use strict';

describe('Filter: startFrom', function () {

  // load the filter's module
  beforeEach(module('quandlAngularApp'));

  // initialize a new instance of the filter before each test
  var startFrom;
  beforeEach(inject(function ($filter) {
    startFrom = $filter('startFrom');
  }));

  it('should return the input prefixed with "startFrom filter:"', function () {
    var arr = ['a', 'b', 'c', 'd', 'e'];
    expect(startFrom(arr, 2)).toBe(['c', 'd', 'e']);
  });

});
