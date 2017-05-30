Package.describe({
    name: 'custom:cornerstone',
    summary: 'Cornerstone libraries',
    version: '0.0.1'
});

Npm.depends({
    'cornerstone-core': '0.10.10',
    'cornerstone-wado-image-loader-test': '0.14.4'
});

Package.onUse(function(api) {
    api.versionsFrom('1.4.4.3');
    api.use('ecmascript');

    api.mainModule('main.js', 'client');

    api.export('cornerstone', 'client');
    api.export('cornerstoneTools', 'client');
    api.export('cornerstoneWADOImageLoader', 'client');
});
