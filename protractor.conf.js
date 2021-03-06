// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const path = require('path');
const { SpecReporter } = require('jasmine-spec-reporter');
const jasmineReporters = require('jasmine-reporters');

const projectRoot = path.resolve(__dirname);

const width = 1366;
const height = 768;

exports.config = {
    allScriptsTimeout: 40000,

    specs: [
        './e2e/suites/authentication/*.test.ts',
        './e2e/suites/list-views/*.test.ts',
        './e2e/suites/application/page-titles.test.ts',
        './e2e/suites/navigation/*.test.ts',
        './e2e/suites/pagination/*.test.ts',
        './e2e/suites/actions/*.test.ts'
    ],

    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            prefs: {
                'credentials_enable_service': false
            },
            args: [ '--incognito', '--headless' ]
        }
    },

    directConnect: true,

    baseUrl: 'http://localhost:4000',

    framework: 'jasmine2',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 60000,
        print: function() {}
    },

    plugins: [{
        package: 'jasmine2-protractor-utils',
        disableHTMLReport: false,
        disableScreenshot: false,
        screenshotOnExpectFailure: true,
        screenshotOnSpecFailure: false,
        clearFoldersBeforeTest: true,
        htmlReportDir: `${projectRoot}/e2e-output/html-report/`,
        screenshotPath: `${projectRoot}/e2e-output/screenshots/`
    }],

    onPrepare() {
        require('ts-node').register({
            project: 'e2e/tsconfig.e2e.json'
        });

        browser.manage().window().setSize(width, height);

        jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));

        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: `${projectRoot}/e2e-output/junit-report`,
            filePrefix: 'results.xml',
            useDotNotation: false,
            useFullTestName: false,
            reportFailedUrl: true
        }));

        return browser.driver.executeScript(disableCSSAnimation);

        function disableCSSAnimation() {
            var css = '* {' +
                '-webkit-transition-duration: 0s !important;' +
                'transition-duration: 0s !important;' +
                '-webkit-animation-duration: 0s !important;' +
                'animation-duration: 0s !important;' +
                '}',
            head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style');

            style.type = 'text/css';
            style.appendChild(document.createTextNode(css));
            head.appendChild(style);
        }

    }
};
