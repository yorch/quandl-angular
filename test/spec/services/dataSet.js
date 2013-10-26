'use strict';

describe('Service: dataSet', function () {

  // load the service's module
  beforeEach(module('quantlTestApp'));

  // instantiate service
  var dataSet;
  beforeEach(inject(function (_dataSet_) {
    dataSet = _dataSet_;
  }));

  it('should do something', function () {
    expect(!!dataSet).toBe(true);
  });

});
