Package.describe({
  summary: "node-cldr packaged for meteor.",
  version: "2.2.1",
  git: "https://github.com/Nemo64/meteor-cldr"
});

Npm.depends({
    'cldr': '2.2.1'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.1');
  api.addFiles('cldr.js', 'server');
  api.export('cldr');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('nemo64:cldr');
  api.addFiles('cldr-tests.js', 'server');
});
