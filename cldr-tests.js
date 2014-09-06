var methods = {
  'extractLocaleDisplayPattern': 'object',
  'extractLanguageDisplayNames': 'object',
  'extractTimeZoneDisplayNames': 'object',
  'extractTimeZoneFormats': 'object',
  'extractTerritoryDisplayNames': 'object',
  'extractCurrencyInfoById': 'object',
  'extractScriptDisplayNames': 'object',
  'extractKeyTypes': 'object',
  'extractTransformNames': 'object',
  'extractMeasurementSystemNames': 'object',
  'extractCodePatterns': 'object',
  'extractEraNames': 'undefined',
  'extractQuarterNames': 'object',
  'extractDayPeriods': 'object',
  'extractCyclicNames': 'object',
  'extractMonthNames': 'object',
  'extractMonthPatterns': 'object',
  'extractDayNames': 'object',
  'extractFields': 'object',
  'extractDateTimePatterns': 'object',
  'extractDateFormats': 'object',
  'extractTimeFormats': 'object',
  'extractDateFormatItems': 'object',
  'extractDateIntervalFormats': 'object',
  'extractDateIntervalFallbackFormat': 'string',
  'extractNumberSymbols': 'object',
  'extractNumberFormats': 'undefined',
  'extractDefaultNumberSystemId': 'string',
  'extractUnitPatterns': 'object',
  'extractDelimiters': 'object',
  'extractListPatterns': 'object',
  'extractLayout': 'object',
  'extractCharacters': 'object',
  'extractPluralRuleFunction': 'function',
  'extractRbnfFunctionByType': 'object',
  'extractDigitsByNumberSystemId': 'object'
};


Tinytest.add("cldr - test function existence", function (test) {
  test.equal(typeof cldr.localeIds, 'object');
  test.equal(typeof cldr.calendarIds, 'object');
  test.equal(typeof cldr.numberSystemIds, 'object');
  
  for (var method in methods) {
    test.equal(typeof cldr[method], 'function', method);
  }
});

Tinytest.add("cldr - test function return value", function (test) {
  for (var method in methods) {
    test.equal(typeof cldr[method]('en_US', 'chinese'), methods[method], method);
  }
});
