'use strict';

describe('Service: apiUrl', function() {

  // load the service's module
  beforeEach(module('quandlAngularApp'));

  // instantiate service
  var apiUrl;
  beforeEach(inject(function(_apiUrl_) {
    apiUrl = _apiUrl_;
  }));

  it('should do something', function() {
    expect( !! apiUrl).toBe(true);
  });

  it('should convert an object to querystring', function() {
    var params = {
      'param1': 'value1',
      'param2': 'value2'
    }
    expect(apiUrl.toQueryString(params)).toBe('param1=value1&param2=value2');
  });

  it('should build the correct full api url', function() {
    var params = {
      'some_param': 'someval'
    };
    expect(apiUrl.buildUrl('something', params))
      .toBe('http://www.quandl.com/api/v1/something.json?some_param=someval')
  });

  it('should build the correct full api url with an empty param', function() {
    var params = {
      'some_param': 'someval',
      'empty_param': null
    };
    expect(apiUrl.buildUrl('something', params))
      .toBe('http://www.quandl.com/api/v1/something.json?some_param=someval')
  });
});