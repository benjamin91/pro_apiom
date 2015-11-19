// conf.js

exports.config = {
  framework: 'jasmine2',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  jasmineNodeOpts: {defaultTimeoutInternal: 500000},
  specs: [/*'unlogin_spec.js','loggedin_spec.js',*/'test.js']
}