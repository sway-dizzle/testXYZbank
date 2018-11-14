var app = angular.module('reportingApp', []);

app.controller('ScreenshotReportController', function ($scope) {
    $scope.searchSettings = {
        description: '',
        passed: true,
        failed: true,
        pending: true,
        withLog: true,
    };

    $scope.inlineScreenshots = false;
    this.showSmartStackTraceHighlight = true;

    this.chooseAllTypes = function () {
        $scope.searchSettings.passed = true;
        $scope.searchSettings.failed = true;
        $scope.searchSettings.pending = true;
        $scope.searchSettings.withLog = true;
    };

    this.getParent = function (str) {
        var arr = str.split('|');
        str = "";
        for (var i = arr.length - 2; i > 0; i--) {
            str += arr[i] + " > ";
        }
        return str.slice(0, -3);
    };

    this.specLevel = function (str) {
        var arr = str.split('|');
        str = "";
        if (arr.length < 3) {
            return true;
        }
        return false;
    };

    this.getSpec = function (str) {
        return getSpec(str);
    };


    this.getShortDescription = function (str) {
        return str.split('|')[0];
    };


    this.nToBr = function (str) {
        return str.replace(/(?:\r\n|\r|\n)/g, '<br />');
    };


    this.convertTimestamp = function (timestamp) {
        var d = new Date(timestamp),
            yyyy = d.getFullYear(),
            mm = ('0' + (d.getMonth() + 1)).slice(-2),
            dd = ('0' + d.getDate()).slice(-2),
            hh = d.getHours(),
            h = hh,
            min = ('0' + d.getMinutes()).slice(-2),
            ampm = 'AM',
            time;

        if (hh > 12) {
            h = hh - 12;
            ampm = 'PM';
        } else if (hh === 12) {
            h = 12;
            ampm = 'PM';
        } else if (hh == 0) {
            h = 12;
        }

        // ie: 2013-02-18, 8:35 AM
        time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm;

        return time;
    };


    this.round = function (number, roundVal) {
        return (parseFloat(number)/1000).toFixed(roundVal);
    };


    this.passCount = function () {
        var passCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.passed) {passCount++};
        }
        return passCount;
    };


    this.pendingCount = function () {
        var pendingCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.pending) {pendingCount++};
        }
        return pendingCount;
    };


    this.failCount = function () {
        var failCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (!result.passed && !result.pending) {failCount++}
        }
        return failCount;
    };

    this.applySmartHighlight = function (line) {
        if (this.showSmartStackTraceHighlight) {
            if (line.indexOf('node_modules') > -1) {
                return 'greyout';
            }
            if (line.indexOf('  at ') === -1) {
                return '';
            }

            return 'highlight';
        }
        return true;
    };


    var results =[
    {
        "description": "Open the xyz bank url|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7880,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00d500c5-00ae-0065-0066-00d9003e0085.png",
        "timestamp": 1539687006654,
        "duration": 35581
    },
    {
        "description": "click on bank manager button|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7880,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "003400fd-0040-009d-0031-00d700060046.png",
        "timestamp": 1539687047560,
        "duration": 1277
    },
    {
        "description": "Click on Add Customer button|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7880,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "008f0016-0047-0066-0084-001d000500f6.png",
        "timestamp": 1539687049535,
        "duration": 172
    },
    {
        "description": "Enter the first name|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7880,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "009e009c-00ed-0057-004e-0074004f0087.png",
        "timestamp": 1539687050525,
        "duration": 1205
    },
    {
        "description": "Enter the last name|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7880,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00b10019-000b-00f9-0035-00860088007b.png",
        "timestamp": 1539687052225,
        "duration": 190
    },
    {
        "description": "Enter the post code|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7880,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00a60014-0073-00b7-00cd-003d00a0005a.png",
        "timestamp": 1539687052827,
        "duration": 225
    },
    {
        "description": "Click on Add Customer Button to generte Customer ID|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7880,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "008100d2-00a6-00ca-00dd-00c3004b00b0.png",
        "timestamp": 1539687053482,
        "duration": 623
    },
    {
        "description": "Go to homePage|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7880,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00ce00f1-0082-00cf-0042-000c008000d9.png",
        "timestamp": 1539687054862,
        "duration": 153
    },
    {
        "description": "Click on Bank Manager Button|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7880,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00ce004c-0002-0027-00f0-00f7003c0085.png",
        "timestamp": 1539687055915,
        "duration": 170
    },
    {
        "description": "click on open account button|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7880,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00ca000d-0078-0095-00f6-0028007f00d5.png",
        "timestamp": 1539687056427,
        "duration": 183
    },
    {
        "description": "select customer name|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7880,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "008a0010-000d-0092-00e0-00bf00d000ff.png",
        "timestamp": 1539687056975,
        "duration": 210
    },
    {
        "description": "select currency |BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7880,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "009d0029-00e9-008f-0012-003a000d00be.png",
        "timestamp": 1539687057675,
        "duration": 290
    },
    {
        "description": "click on Process button to generate account no|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7880,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "00130007-00c6-000d-00e0-00ee00ab00a6.png",
        "timestamp": 1539687058407,
        "duration": 210
    },
    {
        "description": "After generating account number go to homePage|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7880,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "008300c7-00cc-00c6-0011-0089008100bd.png",
        "timestamp": 1539687059367,
        "duration": 158
    },
    {
        "description": "Click on Bank Manager Button|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7880,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00b600e6-0048-0018-0021-00ee00d60004.png",
        "timestamp": 1539687059990,
        "duration": 175
    },
    {
        "description": "Click on Customer Button|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7880,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "009f004c-00b7-0013-004e-002300d000a1.png",
        "timestamp": 1539687060582,
        "duration": 145
    },
    {
        "description": "Click on Customer Button|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7880,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00750074-0003-00ae-0084-008f00060058.png",
        "timestamp": 1539687061077,
        "duration": 253
    },
    {
        "description": "Click on Customer Button|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7880,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00b800ee-001a-00bd-0078-005800a300db.png",
        "timestamp": 1539687061800,
        "duration": 215
    },
    {
        "description": "Go to homePage|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7880,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "007c00bd-00b7-00fa-000c-002b0078004f.png",
        "timestamp": 1539687062425,
        "duration": 157
    },
    {
        "description": "Launch XYZ|Launch URL",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 2024,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "008c0033-0049-009c-0089-005b00ab0037.png",
        "timestamp": 1539773809870,
        "duration": 4898
    },
    {
        "description": "Launch XYZ|Launch URL",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 12244,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00e5002f-00d8-007b-006d-00bf007e00bf.png",
        "timestamp": 1539774957883,
        "duration": 4569
    },
    {
        "description": "Open the browser|Launch URL",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 12244,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00840048-00e9-00e4-00e5-00f800c9008d.png",
        "timestamp": 1539774966062,
        "duration": 2461
    },
    {
        "description": "Verify Title|Launch URL",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 12244,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Failed: name.split is not a function",
        "trace": "TypeError: name.split is not a function\n    at className (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\by.js:138:22)\n    at call (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:1068:28)\n    at C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:907:19\n    at ManagedPromise.invokeCallback_ (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2974:25)\n    at C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)\nFrom: Task: WebDriver.call(function)\n    at Driver.call (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:901:23)\n    at Driver.findElementsInternal_ (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:1068:17)\n    at Driver.findElements (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:1043:19)\n    at ptor.waitForAngular.then (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:159:44)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as getText] (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as getText] (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at UserContext.<anonymous> (C:\\Users\\E001105.CIGNITIGLOBAL\\Desktop\\JbHunt\\Protractor_typeScriptProject (1)\\Protractor_typeScriptProject\\xyz_bank\\Specs\\test.js:14:21)\n    at C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\n    at schedulerExecute (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\n    at TaskQueue.execute_ (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\nFrom: Task: Run it(\"Verify Title\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\E001105.CIGNITIGLOBAL\\Desktop\\JbHunt\\Protractor_typeScriptProject (1)\\Protractor_typeScriptProject\\xyz_bank\\Specs\\test.js:12:5)\n    at addSpecsToSuite (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\E001105.CIGNITIGLOBAL\\Desktop\\JbHunt\\Protractor_typeScriptProject (1)\\Protractor_typeScriptProject\\xyz_bank\\Specs\\test.js:4:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "00e60031-00d3-00dc-00e6-00d7001600d9.png",
        "timestamp": 1539774970648,
        "duration": 60
    },
    {
        "description": "Launch XYZ|Launch URL",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 9000,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00060038-00bc-00b3-00cf-00e300980049.png",
        "timestamp": 1539775562778,
        "duration": 3408
    },
    {
        "description": "Open the browser|Launch URL",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 9000,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00ca0009-009f-0097-00d5-001d00300089.png",
        "timestamp": 1539775567314,
        "duration": 3882
    },
    {
        "description": "Verify Title|Launch URL",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 9000,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Expected 'XYZ Bank' to be 'mainHeading'.",
        "trace": "Error: Failed expectation\n    at UserContext.<anonymous> (C:\\Users\\E001105.CIGNITIGLOBAL\\Desktop\\JbHunt\\Protractor_typeScriptProject (1)\\Protractor_typeScriptProject\\xyz_bank\\Specs\\test.js:14:32)\n    at C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\n    at schedulerExecute (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\n    at TaskQueue.execute_ (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2974:25)\n    at C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7",
        "browserLogs": [],
        "screenShotFile": "00b90047-004a-00ee-007e-0043008100e2.png",
        "timestamp": 1539775571806,
        "duration": 145
    },
    {
        "description": "Launch XYZ|Launch URL",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8272,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00a0003d-004d-00bb-0043-0036004300ed.png",
        "timestamp": 1539775830589,
        "duration": 2967
    },
    {
        "description": "Open the browser|Launch URL",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8272,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "004d002f-00b9-003a-000d-00c500d900cd.png",
        "timestamp": 1539775834049,
        "duration": 6341
    },
    {
        "description": "Verify Title|Launch URL",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8272,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Expected 'XYZ Bank' to be 'mainHeading'.",
        "trace": "Error: Failed expectation\n    at UserContext.<anonymous> (C:\\Users\\E001105.CIGNITIGLOBAL\\Desktop\\JbHunt\\Protractor_typeScriptProject (1)\\Protractor_typeScriptProject\\xyz_bank\\Specs\\test.js:16:32)\n    at C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\n    at schedulerExecute (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\n    at TaskQueue.execute_ (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2974:25)\n    at C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7",
        "browserLogs": [],
        "screenShotFile": "000400f5-0015-00c6-00ff-0000006c009e.png",
        "timestamp": 1539775840823,
        "duration": 2196
    },
    {
        "description": "Launch XYZ|Launch URL",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 9608,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "003100c5-00c5-002d-00aa-00f8009800bd.png",
        "timestamp": 1539776011457,
        "duration": 2310
    },
    {
        "description": "Open the browser|Launch URL",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 9608,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "003f0074-0004-0025-000c-002900240058.png",
        "timestamp": 1539776014544,
        "duration": 6699
    },
    {
        "description": "Verify Title|Launch URL",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 9608,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Expected 'XYZ Bank' to be 'mainHeading'.",
        "trace": "Error: Failed expectation\n    at UserContext.<anonymous> (C:\\Users\\E001105.CIGNITIGLOBAL\\Desktop\\JbHunt\\Protractor_typeScriptProject (1)\\Protractor_typeScriptProject\\xyz_bank\\Specs\\test.js:19:32)\n    at C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\n    at schedulerExecute (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\n    at TaskQueue.execute_ (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2974:25)\n    at C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7",
        "browserLogs": [],
        "screenShotFile": "00e300e2-00f0-00ac-0047-00f200ac002f.png",
        "timestamp": 1539776021680,
        "duration": 1219
    },
    {
        "description": "Launch XYZ|Launch URL",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8092,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "006f0088-000d-000e-0019-00cf00e1006f.png",
        "timestamp": 1539776173880,
        "duration": 2880
    },
    {
        "description": "Open the browser|Launch URL",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8092,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00180068-002f-00c9-0069-009b00ca0097.png",
        "timestamp": 1539776177595,
        "duration": 6303
    },
    {
        "description": "Verify Title|Launch URL",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8092,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "009a00cc-007a-006b-0052-00c600f90051.png",
        "timestamp": 1539776184265,
        "duration": 1079
    },
    {
        "description": "Verify Title|Launch URL",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11664,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00db006f-001a-00eb-0059-004200a30019.png",
        "timestamp": 1539776349257,
        "duration": 1756
    },
    {
        "description": "Verify Title|Launch URL",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 2524,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00b500bd-00ab-00c9-0085-0047002800fa.png",
        "timestamp": 1539776544821,
        "duration": 1552
    },
    {
        "description": "Verify Title|Launch URL",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 6612,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "008100bc-0041-00ec-000e-00c9005c002f.png",
        "timestamp": 1539787319382,
        "duration": 2749
    },
    {
        "description": "Verify Title|Launch URL",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 10344,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Expected 'XYZ Bank' to be 'XYZ1 Bank'.",
        "trace": "Error: Failed expectation\n    at UserContext.<anonymous> (C:\\Users\\E001105.CIGNITIGLOBAL\\Desktop\\JbHunt\\Protractor_typeScriptProject (1)\\Protractor_typeScriptProject\\xyz_bank\\Specs\\test.js:17:32)\n    at C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\n    at schedulerExecute (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\n    at TaskQueue.execute_ (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2974:25)\n    at C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7",
        "browserLogs": [],
        "screenShotFile": "006200eb-0003-0037-00c3-00d000480016.png",
        "timestamp": 1539788347685,
        "duration": 4663
    },
    {
        "description": "Verify Title|Launch URL",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 19832,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Expected 'XYZ Bank' to be 'XYZ1 Bank'.",
        "trace": "Error: Failed expectation\n    at UserContext.<anonymous> (C:\\Users\\jisasa4\\Desktop\\JBhunt\\Code\\xyz_bank\\xyz_bank\\Specs\\test.js:17:32)\n    at C:\\Users\\jisasa4\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisasa4\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisasa4\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\n    at schedulerExecute (C:\\Users\\jisasa4\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\n    at TaskQueue.execute_ (C:\\Users\\jisasa4\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisasa4\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisasa4\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2974:25)\n    at C:\\Users\\jisasa4\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7",
        "browserLogs": [],
        "screenShotFile": "00620040-00dd-0071-003f-00fe007500bd.png",
        "timestamp": 1541050797453,
        "duration": 4194
    },
    {
        "description": "Verify Title|Launch URL",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 680,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Expected 'XYZ Bank' to be 'XYZ1 Bank'.",
        "trace": "Error: Failed expectation\n    at UserContext.<anonymous> (C:\\Users\\jisasa4\\Desktop\\JBhunt\\Code\\xyz_bank\\xyz_bank\\Specs\\test.js:17:32)\n    at C:\\Users\\jisasa4\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisasa4\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisasa4\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\n    at schedulerExecute (C:\\Users\\jisasa4\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\n    at TaskQueue.execute_ (C:\\Users\\jisasa4\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisasa4\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisasa4\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2974:25)\n    at C:\\Users\\jisasa4\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7",
        "browserLogs": [],
        "screenShotFile": "00ff00a6-0045-00f2-0045-003900aa007e.png",
        "timestamp": 1541053299096,
        "duration": 3738
    },
    {
        "description": "Open the browser|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8396,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "0064000f-00bf-00a0-007d-000c00550069.png",
        "timestamp": 1541053603758,
        "duration": 3725
    },
    {
        "description": "Verify Title|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8396,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "001b007f-009f-00c0-0096-00b800690073.png",
        "timestamp": 1541053607849,
        "duration": 633
    },
    {
        "description": "Color of Customer Login before MouseOver|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8396,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "009400d1-0059-0036-0098-00bb00bb001c.png",
        "timestamp": 1541053608832,
        "duration": 40
    },
    {
        "description": "click customer login button|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8396,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00bc0095-001b-006b-0045-009f00580084.png",
        "timestamp": 1541053609191,
        "duration": 90
    },
    {
        "description": "Select Customer from Drop Down|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8396,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "007b007e-000e-00a6-00e9-004900b1008c.png",
        "timestamp": 1541053609621,
        "duration": 657
    },
    {
        "description": "Click on Login button|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8396,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "009d00b6-00aa-00a1-00fa-001a000200f2.png",
        "timestamp": 1541053610619,
        "duration": 100
    },
    {
        "description": "verify customer title|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8396,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "008c00ed-004d-0047-0009-00e200ad00ba.png",
        "timestamp": 1541053611062,
        "duration": 176
    },
    {
        "description": "Click on Deposit Button|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8396,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "0043008e-003f-009d-004d-009d001d00d1.png",
        "timestamp": 1541053611514,
        "duration": 2099
    },
    {
        "description": "Deposit amount|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8396,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00520023-00a7-0087-0033-004900790003.png",
        "timestamp": 1541053613891,
        "duration": 105
    },
    {
        "description": "Click deposit button after entering amount|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8396,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00ef00c4-0011-00d5-001e-0016005b008d.png",
        "timestamp": 1541053614361,
        "duration": 96
    },
    {
        "description": "Verify Deposit Amount Message|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8396,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "00690051-0088-0018-002a-008f00b300b1.png",
        "timestamp": 1541053614778,
        "duration": 102
    },
    {
        "description": "Amount deposited Value is: |CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8396,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "004300ce-0085-009f-001b-00c5002b0037.png",
        "timestamp": 1541053615245,
        "duration": 68
    },
    {
        "description": "Click on WithDrawl Button|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8396,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "004f0096-0041-00e2-0028-004f000500b8.png",
        "timestamp": 1541053615751,
        "duration": 226
    },
    {
        "description": "WithDraw Amount|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8396,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "000d00f2-00ec-0015-00bc-003e00c000ba.png",
        "timestamp": 1541053616474,
        "duration": 151
    },
    {
        "description": "Click on WithDrawl Button after Entering Amount|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8396,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "007f0072-00e2-0058-0090-0017006800d5.png",
        "timestamp": 1541053616944,
        "duration": 139
    },
    {
        "description": "Verify Withdraw Amount Message|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8396,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "0083004a-0092-00ab-00bc-00a800f9009f.png",
        "timestamp": 1541053617515,
        "duration": 204
    },
    {
        "description": "Remaining Balance is |CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8396,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "0023004b-000e-0043-000b-00b3009f00dd.png",
        "timestamp": 1541053618047,
        "duration": 1060
    },
    {
        "description": "Amount Debited in Transactions page|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8396,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "001f0019-003c-0017-0056-00d900040008.png",
        "timestamp": 1541053619482,
        "duration": 4116
    },
    {
        "description": "Credited Amount is |CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8396,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "001300ce-0090-0009-00d2-00f200d100b1.png",
        "timestamp": 1541053623950,
        "duration": 69
    },
    {
        "description": "Debited Amount is |CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8396,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00df0046-00fa-00a8-0037-009b00c400cc.png",
        "timestamp": 1541053624350,
        "duration": 50
    },
    {
        "description": "Click On Logout Button|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8396,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00eb005b-004c-004e-0000-007800570038.png",
        "timestamp": 1541053624743,
        "duration": 185
    },
    {
        "description": "Click on Home Button|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8396,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00360064-001d-00d5-004b-00e200990061.png",
        "timestamp": 1541053625278,
        "duration": 1625
    },
    {
        "description": "verify title|launch XYZ",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 14260,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Failed: text.gettext is not a function",
        "trace": "TypeError: text.gettext is not a function\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\specs\\testlaunch.js:9:21)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\n    at schedulerExecute (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\n    at TaskQueue.execute_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2974:25)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\nFrom: Task: Run it(\"verify title\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\specs\\testlaunch.js:5:5)\n    at addSpecsToSuite (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\specs\\testlaunch.js:4:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "004e001f-0098-0015-0022-00b000c200f1.png",
        "timestamp": 1541099960315,
        "duration": 12
    },
    {
        "description": "verify title|launch XYZ",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 5908,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "009f0075-00e6-008c-0067-005b00f7006f.png",
        "timestamp": 1541100776497,
        "duration": 4925
    },
    {
        "description": "verify title|launch XYZ",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 22484,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "006400a8-00c4-00e1-0049-00f2006300f5.png",
        "timestamp": 1541101531029,
        "duration": 8617
    },
    {
        "description": "verify title|launch XYZ",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 16520,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Expected 'XYZ Bank' to be 'XYZ1 Bank'.",
        "trace": "Error: Failed expectation\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\specs\\testlaunch.js:9:32)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\n    at schedulerExecute (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\n    at TaskQueue.execute_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2974:25)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7",
        "browserLogs": [],
        "screenShotFile": "00e100a2-00a6-00dc-00e6-008a0017004d.png",
        "timestamp": 1541101625000,
        "duration": 4896
    },
    {
        "description": "launch and enter value Bankmanager|launch webpage",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 20704,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00bc000a-00f8-0001-00ca-00a10025008a.png",
        "timestamp": 1541542419963,
        "duration": 3867
    },
    {
        "description": "click on bank manager login button|launch webpage",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 20704,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "001400cf-0023-0051-00c8-00090072006d.png",
        "timestamp": 1541542424214,
        "duration": 93
    },
    {
        "description": "click add customer|launch webpage",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 20704,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00fd00d7-0046-002a-009f-006e00f8006d.png",
        "timestamp": 1541542424611,
        "duration": 85
    },
    {
        "description": "fname|launch webpage",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 20704,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00b200ef-009e-005f-0057-005a00fb00ec.png",
        "timestamp": 1541542425147,
        "duration": 223
    },
    {
        "description": "last name|launch webpage",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 20704,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "000d001f-000b-007c-0005-006f00540038.png",
        "timestamp": 1541542425789,
        "duration": 197
    },
    {
        "description": "post code|launch webpage",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 20704,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "005500ae-0007-00b2-008d-009c00af001c.png",
        "timestamp": 1541542426271,
        "duration": 91
    },
    {
        "description": "launch and enter value Bankmanager|launch webpage",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 5532,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "005200a9-000f-00fe-009f-0070003f00e2.png",
        "timestamp": 1541605069147,
        "duration": 4631
    },
    {
        "description": "click on bank manager login button",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 5532,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "001b0050-0015-0070-00ef-0048006c0091.png",
        "timestamp": 1541605074478,
        "duration": 140
    },
    {
        "description": "click add customer",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 5532,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "002500c2-00ee-00e3-00b3-00f9006500b5.png",
        "timestamp": 1541605074993,
        "duration": 115
    },
    {
        "description": "fname",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 5532,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "007e00fb-0095-0021-0025-005400380050.png",
        "timestamp": 1541605075434,
        "duration": 230
    },
    {
        "description": "last name",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 5532,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "006f00a9-00e4-00d5-00bb-004b002e0077.png",
        "timestamp": 1541605076147,
        "duration": 164
    },
    {
        "description": "post code",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 5532,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00350063-00cb-00fd-00e7-007800230086.png",
        "timestamp": 1541605076611,
        "duration": 127
    },
    {
        "description": "launch and enter value Bankmanager|launch webpage",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 18848,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "SEVERE",
                "message": "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css - Failed to load resource: net::ERR_CONNECTION_TIMED_OUT",
                "timestamp": 1541605329260,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js - Failed to load resource: net::ERR_CONNECTION_TIMED_OUT",
                "timestamp": 1541605329261,
                "type": ""
            }
        ],
        "screenShotFile": "007e0037-00d2-0022-00cb-003900ed0088.png",
        "timestamp": 1541605307447,
        "duration": 29672
    },
    {
        "description": "click on bank manager login button",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 18848,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "0005005e-001a-00f0-0099-0016001e0031.png",
        "timestamp": 1541605337395,
        "duration": 155
    },
    {
        "description": "click add customer",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 18848,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00000018-007d-00fb-0087-00ae004e0030.png",
        "timestamp": 1541605337836,
        "duration": 117
    },
    {
        "description": "fname",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 18848,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "0042004c-0086-00bc-0037-006100460014.png",
        "timestamp": 1541605338241,
        "duration": 188
    },
    {
        "description": "last name",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 18848,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00d8009b-0068-00bf-0044-0061005200ff.png",
        "timestamp": 1541605338776,
        "duration": 188
    },
    {
        "description": "post code",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 18848,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00090063-004e-00ae-0044-002000f700e7.png",
        "timestamp": 1541605339229,
        "duration": 123
    },
    {
        "description": "launch and enter value Bankmanager|launch webpage",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 12856,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00a70076-0080-00df-00e8-006e0016004b.png",
        "timestamp": 1541610200024,
        "duration": 9766
    },
    {
        "description": "click on bank manager login button",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 12856,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00fc002e-00a5-0064-0021-00c0002800f3.png",
        "timestamp": 1541610210154,
        "duration": 172
    },
    {
        "description": "click add customer",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 12856,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00f800ae-00bd-0094-00a3-004b00a70065.png",
        "timestamp": 1541610210685,
        "duration": 147
    },
    {
        "description": "fname",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 12856,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00140014-009a-0001-00fe-0085004300e0.png",
        "timestamp": 1541610211118,
        "duration": 309
    },
    {
        "description": "last name",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 12856,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00830016-0042-00bf-00e9-00f000f9000f.png",
        "timestamp": 1541610211904,
        "duration": 367
    },
    {
        "description": "post code",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 12856,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "0047006d-0094-002f-0042-00b500f30089.png",
        "timestamp": 1541610212549,
        "duration": 166
    },
    {
        "description": "second add customer",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 12856,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00480059-00fb-002b-0034-0007009c0072.png",
        "timestamp": 1541610212995,
        "duration": 163
    },
    {
        "description": "launch and enter value Bankmanager|launch webpage",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 22796,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "0047002d-00b1-0008-009a-0054008e0045.png",
        "timestamp": 1541610359122,
        "duration": 2913
    },
    {
        "description": "click on bank manager login button",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 22796,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "002300b5-00f2-00bb-0013-0024000d0023.png",
        "timestamp": 1541610362575,
        "duration": 188
    },
    {
        "description": "click add customer",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 22796,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "007400cc-006d-00f0-009f-009a008c0038.png",
        "timestamp": 1541610363126,
        "duration": 139
    },
    {
        "description": "fname",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 22796,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00bc00c2-001f-0051-004b-0020008a00c9.png",
        "timestamp": 1541610363568,
        "duration": 308
    },
    {
        "description": "last name",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 22796,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00c3001f-00e6-001f-0008-00f600100094.png",
        "timestamp": 1541610364315,
        "duration": 295
    },
    {
        "description": "post code",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 22796,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "0017002d-009b-0049-0072-0048004600de.png",
        "timestamp": 1541610364879,
        "duration": 201
    },
    {
        "description": "second add customer",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 22796,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "009b0024-0064-0081-0094-0096002200a1.png",
        "timestamp": 1541610365380,
        "duration": 196
    },
    {
        "description": "launch and enter value Bankmanager|launch webpage",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 14572,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00d300ff-00ce-00d8-00b8-00fc0031003e.png",
        "timestamp": 1541708545345,
        "duration": 2969
    },
    {
        "description": "click on bank manager login button|launch webpage",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 14572,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00710084-00ac-0030-00b8-00a4004e00d4.png",
        "timestamp": 1541708548707,
        "duration": 146
    },
    {
        "description": "click add customer|launch webpage",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 14572,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "003e00d9-00a1-00d7-00f3-007b00b6005d.png",
        "timestamp": 1541708549182,
        "duration": 140
    },
    {
        "description": "fname|launch webpage",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 14572,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00a2007c-007a-0057-0012-00d500e20061.png",
        "timestamp": 1541708549646,
        "duration": 263
    },
    {
        "description": "last name|launch webpage",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 14572,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "0005009a-00aa-0062-0022-00a1000b0039.png",
        "timestamp": 1541708550690,
        "duration": 192
    },
    {
        "description": "post code|launch webpage",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 14572,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00b70009-00ed-001b-0046-003700b30076.png",
        "timestamp": 1541708551330,
        "duration": 148
    },
    {
        "description": "second add customer|launch webpage",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 14572,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00c00087-00e9-00d2-0076-0012007b00f5.png",
        "timestamp": 1541708551782,
        "duration": 165
    },
    {
        "description": "launch and enter value Bankmanager|launch webpage",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 21440,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00070004-006a-00d6-00da-007300570009.png",
        "timestamp": 1541711445254,
        "duration": 1704
    },
    {
        "description": "click on bank manager login button|launch webpage",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 21440,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "002900d1-0057-002c-00b4-00fc004d0045.png",
        "timestamp": 1541711447280,
        "duration": 165
    },
    {
        "description": "click add customer|launch webpage",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 21440,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00b200ca-0048-0041-0095-0074004300a9.png",
        "timestamp": 1541711447850,
        "duration": 124
    },
    {
        "description": "fname|launch webpage",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 21440,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "002f0088-00a4-005b-0075-00c000ac000b.png",
        "timestamp": 1541711448499,
        "duration": 334
    },
    {
        "description": "last name|launch webpage",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 21440,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "000f0002-0022-00fb-00c6-000500aa00b5.png",
        "timestamp": 1541711449370,
        "duration": 184
    },
    {
        "description": "post code|launch webpage",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 21440,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "004c0046-00c4-0003-008a-005c00cf00a2.png",
        "timestamp": 1541711449890,
        "duration": 137
    },
    {
        "description": "second add customer|launch webpage",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 21440,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00ab008e-00b9-00db-001d-009f006d00b4.png",
        "timestamp": 1541711450333,
        "duration": 150
    },
    {
        "description": "launch and enter value Bankmanager|launch webpage",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 3356,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00e600b4-0063-00a0-00bf-0067004000c2.png",
        "timestamp": 1541715317211,
        "duration": 0
    },
    {
        "description": "click on bank manager login button|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 3356,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:31:21)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:26:51)\nFrom: Task: Run it(\"click on bank manager login button\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:26:9)\n    at addSpecsToSuite (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:13:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "00910096-0057-001c-00ac-009200420096.png",
        "timestamp": 1541715317675,
        "duration": 25
    },
    {
        "description": "click add customer|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 3356,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:49:21)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:47:34)\nFrom: Task: Run it(\"click add customer\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:47:9)\n    at addSpecsToSuite (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:13:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "00f600b6-002a-002e-0007-006400c300b6.png",
        "timestamp": 1541715317970,
        "duration": 27
    },
    {
        "description": "fname|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 3356,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "ReferenceError: data is not defined",
        "trace": "ReferenceError: data is not defined\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:65:34)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:60:20)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)",
        "browserLogs": [],
        "screenShotFile": "002000b4-0009-004d-004d-007f0094002a.png",
        "timestamp": 1541715318329,
        "duration": 0
    },
    {
        "description": "last name|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 3356,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "ReferenceError: data is not defined",
        "trace": "ReferenceError: data is not defined\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:77:33)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:72:24)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)",
        "browserLogs": [],
        "screenShotFile": "00c60073-0038-00f2-0045-00da00920030.png",
        "timestamp": 1541715318671,
        "duration": 0
    },
    {
        "description": "post code|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 3356,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "ReferenceError: data is not defined",
        "trace": "ReferenceError: data is not defined\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:90:37)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:85:24)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)",
        "browserLogs": [],
        "screenShotFile": "00c5001a-00dd-002e-002a-00a80059003c.png",
        "timestamp": 1541715319039,
        "duration": 8
    },
    {
        "description": "second add customer|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 3356,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:101:35)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:98:34)\nFrom: Task: Run it(\"second add customer\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:98:9)\n    at addSpecsToSuite (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:13:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "0029006d-002a-004b-0086-00a900d900e5.png",
        "timestamp": 1541715319372,
        "duration": 22
    },
    {
        "description": "launch and enter value Bankmanager|launch webpage",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 24288,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00f3000c-0077-00ae-0012-00ab00590050.png",
        "timestamp": 1541715677382,
        "duration": 15
    },
    {
        "description": "click on bank manager login button|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 24288,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:31:21)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:26:51)\nFrom: Task: Run it(\"click on bank manager login button\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:26:9)\n    at addSpecsToSuite (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:13:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "002900bd-00df-0080-0085-00e700ce0019.png",
        "timestamp": 1541715677791,
        "duration": 30
    },
    {
        "description": "click add customer|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 24288,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:49:21)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:47:34)\nFrom: Task: Run it(\"click add customer\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:47:9)\n    at addSpecsToSuite (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:13:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "003900a3-00c7-00d1-0088-00dc009d0002.png",
        "timestamp": 1541715678115,
        "duration": 25
    },
    {
        "description": "fname|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 24288,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "TypeError: Cannot read property 'firstname' of undefined",
        "trace": "TypeError: Cannot read property 'firstname' of undefined\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:65:47)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:60:20)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)",
        "browserLogs": [],
        "screenShotFile": "00b600bb-0015-0043-0096-002100030041.png",
        "timestamp": 1541715678468,
        "duration": 16
    },
    {
        "description": "last name|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 24288,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "TypeError: Cannot read property 'lastname' of undefined",
        "trace": "TypeError: Cannot read property 'lastname' of undefined\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:77:51)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:72:24)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)",
        "browserLogs": [],
        "screenShotFile": "008f000e-008e-00e2-007d-00fa00b300e0.png",
        "timestamp": 1541715678785,
        "duration": 15
    },
    {
        "description": "post code|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 24288,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "TypeError: Cannot read property 'postalcode' of undefined",
        "trace": "TypeError: Cannot read property 'postalcode' of undefined\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:90:55)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:85:24)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)",
        "browserLogs": [],
        "screenShotFile": "00df001c-008a-00bf-00bd-00c000e600be.png",
        "timestamp": 1541715679082,
        "duration": 15
    },
    {
        "description": "second add customer|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 24288,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:101:35)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:98:34)\nFrom: Task: Run it(\"second add customer\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:98:9)\n    at addSpecsToSuite (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:13:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "00fc005a-0055-004c-007f-00fe00560023.png",
        "timestamp": 1541715679435,
        "duration": 19
    },
    {
        "description": "launch and enter value Bankmanager|launch webpage",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 17744,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "002e003d-00d7-0063-0059-00f000ba0023.png",
        "timestamp": 1541716744118,
        "duration": 0
    },
    {
        "description": "click on bank manager login button|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 17744,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:30:21)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:25:51)\nFrom: Task: Run it(\"click on bank manager login button\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:25:9)\n    at addSpecsToSuite (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:12:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "00e800bd-0028-00c5-0076-009300af0087.png",
        "timestamp": 1541716744557,
        "duration": 24
    },
    {
        "description": "click add customer|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 17744,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:48:21)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:46:34)\nFrom: Task: Run it(\"click add customer\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:46:9)\n    at addSpecsToSuite (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:12:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "00c60039-00a2-008b-00ef-007100f5004a.png",
        "timestamp": 1541716744885,
        "duration": 19
    },
    {
        "description": "fname|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 17744,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "TypeError: Cannot read property 'firstname' of undefined",
        "trace": "TypeError: Cannot read property 'firstname' of undefined\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:64:52)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:59:20)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)",
        "browserLogs": [],
        "screenShotFile": "0038002e-0070-0055-0006-0004001100ad.png",
        "timestamp": 1541716745172,
        "duration": 15
    },
    {
        "description": "last name|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 17744,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "TypeError: Cannot read property 'lastname' of undefined",
        "trace": "TypeError: Cannot read property 'lastname' of undefined\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:76:51)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:71:24)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)",
        "browserLogs": [],
        "screenShotFile": "00e40067-009f-00dd-00cc-005f00c7009a.png",
        "timestamp": 1541716745535,
        "duration": 0
    },
    {
        "description": "post code|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 17744,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "TypeError: Cannot read property 'Code' of undefined",
        "trace": "TypeError: Cannot read property 'Code' of undefined\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:89:55)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:84:24)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)",
        "browserLogs": [],
        "screenShotFile": "0022008c-00eb-0021-00c4-002600210085.png",
        "timestamp": 1541716745818,
        "duration": 4
    },
    {
        "description": "second add customer|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 17744,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:100:35)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:97:34)\nFrom: Task: Run it(\"second add customer\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:97:9)\n    at addSpecsToSuite (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:12:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "00b500d3-0032-007f-00ea-001f00b100bd.png",
        "timestamp": 1541716746144,
        "duration": 16
    },
    {
        "description": "launch and enter value Bankmanager|launch webpage",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 22536,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "0095000d-00aa-00fe-0037-005200e50031.png",
        "timestamp": 1541786702119,
        "duration": 3
    },
    {
        "description": "click on bank manager login button|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 22536,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:30:21)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:25:51)\nFrom: Task: Run it(\"click on bank manager login button\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:25:9)\n    at addSpecsToSuite (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:12:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "00850088-00d2-0007-0087-002e00760064.png",
        "timestamp": 1541786702663,
        "duration": 25
    },
    {
        "description": "click add customer|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 22536,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:48:21)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:46:34)\nFrom: Task: Run it(\"click add customer\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:46:9)\n    at addSpecsToSuite (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:12:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "00db007b-0063-00a9-00f4-00c800170054.png",
        "timestamp": 1541786702969,
        "duration": 28
    },
    {
        "description": "fname|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 22536,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "TypeError: Cannot read property 'firstname' of undefined",
        "trace": "TypeError: Cannot read property 'firstname' of undefined\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:64:52)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:59:20)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)",
        "browserLogs": [],
        "screenShotFile": "00f1008d-0057-00fb-0019-001b005100fb.png",
        "timestamp": 1541786703273,
        "duration": 16
    },
    {
        "description": "last name|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 22536,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "TypeError: Cannot read property 'lastname' of undefined",
        "trace": "TypeError: Cannot read property 'lastname' of undefined\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:76:51)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:71:24)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)",
        "browserLogs": [],
        "screenShotFile": "00a900d0-0055-0004-008f-00b50089002d.png",
        "timestamp": 1541786703596,
        "duration": 8
    },
    {
        "description": "post code|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 22536,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "TypeError: Cannot read property 'Code' of undefined",
        "trace": "TypeError: Cannot read property 'Code' of undefined\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:89:55)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:84:24)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)",
        "browserLogs": [],
        "screenShotFile": "00d5009f-0001-00c6-0082-005e00cb00cc.png",
        "timestamp": 1541786703956,
        "duration": 0
    },
    {
        "description": "second add customer|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 22536,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:100:35)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:97:34)\nFrom: Task: Run it(\"second add customer\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:97:9)\n    at addSpecsToSuite (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:12:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "00ad00a6-0031-000e-00a1-002900320003.png",
        "timestamp": 1541786704238,
        "duration": 43
    },
    {
        "description": "launch and enter value Bankmanager|launch webpage",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 25944,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "004c0079-00dc-00ae-001b-009500190029.png",
        "timestamp": 1541787289782,
        "duration": 0
    },
    {
        "description": "click on bank manager login button|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 25944,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:33:21)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:28:51)\nFrom: Task: Run it(\"click on bank manager login button\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:28:9)\n    at addSpecsToSuite (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:12:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "0049004b-004f-00fc-008d-0045000200f7.png",
        "timestamp": 1541787290798,
        "duration": 45
    },
    {
        "description": "click add customer|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 25944,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:51:21)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:49:34)\nFrom: Task: Run it(\"click add customer\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:49:9)\n    at addSpecsToSuite (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:12:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "00a80006-0045-0035-003a-00ab002a004b.png",
        "timestamp": 1541787291153,
        "duration": 28
    },
    {
        "description": "fname|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 25944,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "TypeError: Cannot read property 'firstname' of undefined",
        "trace": "TypeError: Cannot read property 'firstname' of undefined\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:67:52)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:62:20)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)",
        "browserLogs": [],
        "screenShotFile": "00da00ed-00a4-0020-00b7-00b00081003c.png",
        "timestamp": 1541787291466,
        "duration": 0
    },
    {
        "description": "last name|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 25944,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "TypeError: Cannot read property 'lastname' of undefined",
        "trace": "TypeError: Cannot read property 'lastname' of undefined\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:79:51)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:74:24)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)",
        "browserLogs": [],
        "screenShotFile": "00f00004-00e7-00ad-0023-005e00d90054.png",
        "timestamp": 1541787291784,
        "duration": 15
    },
    {
        "description": "post code|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 25944,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "TypeError: Cannot read property 'Code' of undefined",
        "trace": "TypeError: Cannot read property 'Code' of undefined\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:92:55)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:87:24)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)",
        "browserLogs": [],
        "screenShotFile": "001b004f-0048-0009-0027-00f80063001f.png",
        "timestamp": 1541787292134,
        "duration": 15
    },
    {
        "description": "second add customer|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 25944,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:103:35)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:100:34)\nFrom: Task: Run it(\"second add customer\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:100:9)\n    at addSpecsToSuite (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:12:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "000a0099-009b-0001-00ee-00e5000e00d2.png",
        "timestamp": 1541787292460,
        "duration": 27
    },
    {
        "description": "launch and enter value Bankmanager|launch webpage",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8572,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00d400de-00c3-00b7-00f2-00bb00b700ce.png",
        "timestamp": 1541787373325,
        "duration": 0
    },
    {
        "description": "click on bank manager login button|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8572,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:33:21)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:28:51)\nFrom: Task: Run it(\"click on bank manager login button\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:28:9)\n    at addSpecsToSuite (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:12:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "00eb00c7-000d-0094-0072-003c007e00c7.png",
        "timestamp": 1541787373756,
        "duration": 31
    },
    {
        "description": "click add customer|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8572,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:51:21)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:49:34)\nFrom: Task: Run it(\"click add customer\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:49:9)\n    at addSpecsToSuite (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:12:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "00410066-009c-009f-0054-004800b700fa.png",
        "timestamp": 1541787374111,
        "duration": 15
    },
    {
        "description": "fname|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8572,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "TypeError: Cannot read property 'firstname' of undefined",
        "trace": "TypeError: Cannot read property 'firstname' of undefined\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:67:52)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:62:20)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)",
        "browserLogs": [],
        "screenShotFile": "00d600b9-0013-0048-0019-004200150066.png",
        "timestamp": 1541787374429,
        "duration": 15
    },
    {
        "description": "last name|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8572,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "TypeError: Cannot read property 'lastname' of undefined",
        "trace": "TypeError: Cannot read property 'lastname' of undefined\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:79:51)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:74:24)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)",
        "browserLogs": [],
        "screenShotFile": "003600ee-007e-009c-0069-007b0063005c.png",
        "timestamp": 1541787374751,
        "duration": 16
    },
    {
        "description": "post code|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8572,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "TypeError: Cannot read property 'Code' of undefined",
        "trace": "TypeError: Cannot read property 'Code' of undefined\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:92:55)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:87:24)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)",
        "browserLogs": [],
        "screenShotFile": "00580039-002f-00d0-0018-00ee00f400e9.png",
        "timestamp": 1541787375099,
        "duration": 6
    },
    {
        "description": "second add customer|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8572,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:103:35)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:100:34)\nFrom: Task: Run it(\"second add customer\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:100:9)\n    at addSpecsToSuite (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:12:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "00330055-00d8-000c-0087-000600e000c2.png",
        "timestamp": 1541787375387,
        "duration": 22
    },
    {
        "description": "launch and enter value Bankmanager|launch webpage",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 26084,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "000a00e7-0068-0004-007f-00cf001c00f0.png",
        "timestamp": 1541787460605,
        "duration": 0
    },
    {
        "description": "click on bank manager login button|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 26084,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:33:21)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:28:51)\nFrom: Task: Run it(\"click on bank manager login button\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:28:9)\n    at addSpecsToSuite (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:12:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "00c00077-00f0-00be-001f-00c800360079.png",
        "timestamp": 1541787461038,
        "duration": 38
    },
    {
        "description": "click add customer|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 26084,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:51:21)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:49:34)\nFrom: Task: Run it(\"click add customer\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:49:9)\n    at addSpecsToSuite (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:12:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "009a00a3-000a-00f4-0077-0010008b00c2.png",
        "timestamp": 1541787461454,
        "duration": 31
    },
    {
        "description": "fname|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 26084,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "TypeError: Cannot read property 'firstname' of undefined",
        "trace": "TypeError: Cannot read property 'firstname' of undefined\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:67:52)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:62:20)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)",
        "browserLogs": [],
        "screenShotFile": "00b400c2-0088-0036-004b-006700210064.png",
        "timestamp": 1541787461830,
        "duration": 0
    },
    {
        "description": "last name|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 26084,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "TypeError: Cannot read property 'lastname' of undefined",
        "trace": "TypeError: Cannot read property 'lastname' of undefined\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:79:51)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:74:24)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)",
        "browserLogs": [],
        "screenShotFile": "00a500d0-00c6-002f-00e7-003d00bc00a7.png",
        "timestamp": 1541787462176,
        "duration": 0
    },
    {
        "description": "post code|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 26084,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "TypeError: Cannot read property 'Code' of undefined",
        "trace": "TypeError: Cannot read property 'Code' of undefined\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:92:55)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:87:24)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)",
        "browserLogs": [],
        "screenShotFile": "00820084-006e-00b3-00d2-0076008d00f9.png",
        "timestamp": 1541787462514,
        "duration": 0
    },
    {
        "description": "second add customer|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 26084,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:103:35)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:100:34)\nFrom: Task: Run it(\"second add customer\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:100:9)\n    at addSpecsToSuite (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:12:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "006900dc-0045-00a6-0059-00b800ad0062.png",
        "timestamp": 1541787462829,
        "duration": 48
    },
    {
        "description": "launch and enter value Bankmanager|launch webpage",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 24640,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "007000f2-00a4-0074-0097-001b00a6003b.png",
        "timestamp": 1541787686453,
        "duration": 0
    },
    {
        "description": "click on bank manager login button|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 24640,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:33:21)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:28:51)\nFrom: Task: Run it(\"click on bank manager login button\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:28:9)\n    at addSpecsToSuite (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:12:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "009e00db-0014-007b-00a9-007a0040007d.png",
        "timestamp": 1541787686900,
        "duration": 22
    },
    {
        "description": "click add customer|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 24640,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:51:21)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:49:34)\nFrom: Task: Run it(\"click add customer\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:49:9)\n    at addSpecsToSuite (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:12:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "0049009f-006b-00eb-0008-0054002a0037.png",
        "timestamp": 1541787687223,
        "duration": 25
    },
    {
        "description": "fname|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 24640,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "TypeError: Cannot read property 'firstname' of undefined",
        "trace": "TypeError: Cannot read property 'firstname' of undefined\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:67:52)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:62:20)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)",
        "browserLogs": [],
        "screenShotFile": "00e00005-00af-00f7-0018-00c900740072.png",
        "timestamp": 1541787687576,
        "duration": 0
    },
    {
        "description": "last name|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 24640,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "TypeError: Cannot read property 'lastname' of undefined",
        "trace": "TypeError: Cannot read property 'lastname' of undefined\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:79:51)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:74:24)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)",
        "browserLogs": [],
        "screenShotFile": "004b00ee-0015-00eb-00cf-004200a300be.png",
        "timestamp": 1541787687890,
        "duration": 0
    },
    {
        "description": "post code|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 24640,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "TypeError: Cannot read property 'Code' of undefined",
        "trace": "TypeError: Cannot read property 'Code' of undefined\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:92:55)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:87:24)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)",
        "browserLogs": [],
        "screenShotFile": "001e007f-001c-002d-0035-00f300eb00af.png",
        "timestamp": 1541787688224,
        "duration": 29
    },
    {
        "description": "second add customer|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 24640,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:103:35)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:100:34)\nFrom: Task: Run it(\"second add customer\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:100:9)\n    at addSpecsToSuite (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:12:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "00830053-00f5-00fc-0043-00c8005b007e.png",
        "timestamp": 1541787688566,
        "duration": 19
    },
    {
        "description": "launch and enter value Bankmanager|launch webpage",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 16200,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00db00d8-008d-0074-0083-00c300630055.png",
        "timestamp": 1541787972525,
        "duration": 0
    },
    {
        "description": "click on bank manager login button|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 16200,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:33:21)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:28:51)\nFrom: Task: Run it(\"click on bank manager login button\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:28:9)\n    at addSpecsToSuite (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:12:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "00d2003c-0057-009d-001c-00ae00ad0044.png",
        "timestamp": 1541787972988,
        "duration": 40
    },
    {
        "description": "click add customer|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 16200,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:51:21)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:49:34)\nFrom: Task: Run it(\"click add customer\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:49:9)\n    at addSpecsToSuite (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:12:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "0037007d-0000-00b2-00c2-008900b10070.png",
        "timestamp": 1541787973366,
        "duration": 38
    },
    {
        "description": "fname|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 16200,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "TypeError: Cannot read property 'firstname' of undefined",
        "trace": "TypeError: Cannot read property 'firstname' of undefined\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:67:52)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:62:20)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)",
        "browserLogs": [],
        "screenShotFile": "001c0085-0001-00f2-008d-005600e60052.png",
        "timestamp": 1541787973726,
        "duration": 0
    },
    {
        "description": "last name|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 16200,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "TypeError: Cannot read property 'lastname' of undefined",
        "trace": "TypeError: Cannot read property 'lastname' of undefined\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:79:51)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:74:24)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)",
        "browserLogs": [],
        "screenShotFile": "003600de-00ce-0014-0002-003800380015.png",
        "timestamp": 1541787974044,
        "duration": 31
    },
    {
        "description": "post code|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 16200,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "TypeError: Cannot read property 'Code' of undefined",
        "trace": "TypeError: Cannot read property 'Code' of undefined\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:92:55)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:87:24)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)",
        "browserLogs": [],
        "screenShotFile": "007f00cc-0092-002f-0087-002600a700e2.png",
        "timestamp": 1541787974416,
        "duration": 8
    },
    {
        "description": "second add customer|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 16200,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:103:35)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:100:34)\nFrom: Task: Run it(\"second add customer\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:100:9)\n    at addSpecsToSuite (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:12:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "001800cd-00d4-004e-0075-00ae00f700ba.png",
        "timestamp": 1541787974726,
        "duration": 40
    },
    {
        "description": "launch and enter value Bankmanager|launch webpage",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 10264,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00d90099-009b-00c7-0091-0009009700db.png",
        "timestamp": 1541788413928,
        "duration": 21
    },
    {
        "description": "click on bank manager login button|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 10264,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:33:21)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:28:51)\nFrom: Task: Run it(\"click on bank manager login button\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:28:9)\n    at addSpecsToSuite (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:12:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "003b0036-00eb-0000-0004-004000ba00f4.png",
        "timestamp": 1541788414402,
        "duration": 23
    },
    {
        "description": "click add customer|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 10264,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:51:21)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:49:34)\nFrom: Task: Run it(\"click add customer\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:49:9)\n    at addSpecsToSuite (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:12:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "004600c4-00b1-002b-0062-000d005200de.png",
        "timestamp": 1541788414700,
        "duration": 45
    },
    {
        "description": "fname|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 10264,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "TypeError: Cannot read property 'firstname' of undefined",
        "trace": "TypeError: Cannot read property 'firstname' of undefined\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:67:52)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:62:20)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)",
        "browserLogs": [],
        "screenShotFile": "006a0089-003f-0016-00ee-00e40087008c.png",
        "timestamp": 1541788415062,
        "duration": 0
    },
    {
        "description": "last name|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 10264,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "TypeError: Cannot read property 'lastname' of undefined",
        "trace": "TypeError: Cannot read property 'lastname' of undefined\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:79:51)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:74:24)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)",
        "browserLogs": [],
        "screenShotFile": "00c400b0-00b6-0031-007e-0093009300c8.png",
        "timestamp": 1541788415416,
        "duration": 27
    },
    {
        "description": "post code|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 10264,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "TypeError: Cannot read property 'Code' of undefined",
        "trace": "TypeError: Cannot read property 'Code' of undefined\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:92:55)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:87:24)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)",
        "browserLogs": [],
        "screenShotFile": "004b00d8-001a-0040-004e-000800c40041.png",
        "timestamp": 1541788415798,
        "duration": 8
    },
    {
        "description": "second add customer|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 10264,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:103:35)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:100:34)\nFrom: Task: Run it(\"second add customer\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:100:9)\n    at addSpecsToSuite (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:12:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "008a00ee-00e9-0092-00e8-00e600580079.png",
        "timestamp": 1541788416113,
        "duration": 41
    },
    {
        "description": "launch and enter value Bankmanager|launch webpage",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 24916,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "008500e8-005e-00f6-00c5-00f2000b0097.png",
        "timestamp": 1541788529036,
        "duration": 15
    },
    {
        "description": "click on bank manager login button|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 24916,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:33:21)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:28:51)\nFrom: Task: Run it(\"click on bank manager login button\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:28:9)\n    at addSpecsToSuite (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:12:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "00670049-0012-003a-0081-0012009700bd.png",
        "timestamp": 1541788529504,
        "duration": 49
    },
    {
        "description": "click add customer|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 24916,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:51:21)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:49:34)\nFrom: Task: Run it(\"click add customer\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:49:9)\n    at addSpecsToSuite (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:12:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "00950085-0036-00a6-005e-009c008c009e.png",
        "timestamp": 1541788529836,
        "duration": 42
    },
    {
        "description": "fname|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 24916,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "TypeError: Cannot read property 'firstname' of undefined",
        "trace": "TypeError: Cannot read property 'firstname' of undefined\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:67:52)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:62:20)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)",
        "browserLogs": [],
        "screenShotFile": "00e700af-0077-00b6-0077-0090005c005b.png",
        "timestamp": 1541788530152,
        "duration": 0
    },
    {
        "description": "last name|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 24916,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "TypeError: Cannot read property 'lastname' of undefined",
        "trace": "TypeError: Cannot read property 'lastname' of undefined\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:79:51)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:74:24)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)",
        "browserLogs": [],
        "screenShotFile": "00cd003b-00b0-00e2-005c-006b0013001f.png",
        "timestamp": 1541788530482,
        "duration": 27
    },
    {
        "description": "post code|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 24916,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "TypeError: Cannot read property 'Code' of undefined",
        "trace": "TypeError: Cannot read property 'Code' of undefined\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:92:55)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:87:24)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)",
        "browserLogs": [],
        "screenShotFile": "00f30005-00f4-0078-0078-0006004e00c9.png",
        "timestamp": 1541788530863,
        "duration": 5
    },
    {
        "description": "second add customer|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 24916,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:103:35)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:100:34)\nFrom: Task: Run it(\"second add customer\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:100:9)\n    at addSpecsToSuite (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:12:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "003f007f-00f3-00bf-007c-004200680082.png",
        "timestamp": 1541788531219,
        "duration": 42
    },
    {
        "description": "launch and enter value Bankmanager|launch webpage",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 13008,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00e300b6-00ad-008a-00a2-00d700f1004f.png",
        "timestamp": 1541788872918,
        "duration": 5
    },
    {
        "description": "click on bank manager login button|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 13008,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:33:21)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:28:51)\nFrom: Task: Run it(\"click on bank manager login button\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:28:9)\n    at addSpecsToSuite (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:12:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "00280082-0046-004d-004b-009f009300c3.png",
        "timestamp": 1541788873349,
        "duration": 36
    },
    {
        "description": "click add customer|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 13008,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:51:21)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:49:34)\nFrom: Task: Run it(\"click add customer\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:49:9)\n    at addSpecsToSuite (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:12:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "000700e0-0021-00a6-0097-004100cf0048.png",
        "timestamp": 1541788873702,
        "duration": 41
    },
    {
        "description": "fname|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 13008,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "TypeError: Cannot read property 'firstname' of undefined",
        "trace": "TypeError: Cannot read property 'firstname' of undefined\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:67:52)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:62:20)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)",
        "browserLogs": [],
        "screenShotFile": "00240023-000b-00c1-00ca-000000120087.png",
        "timestamp": 1541788874039,
        "duration": 0
    },
    {
        "description": "last name|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 13008,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "TypeError: Cannot read property 'lastname' of undefined",
        "trace": "TypeError: Cannot read property 'lastname' of undefined\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:79:51)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:74:24)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)",
        "browserLogs": [],
        "screenShotFile": "00f40062-00c9-002a-0055-005c001e002b.png",
        "timestamp": 1541788874413,
        "duration": 44
    },
    {
        "description": "post code|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 13008,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "TypeError: Cannot read property 'Code' of undefined",
        "trace": "TypeError: Cannot read property 'Code' of undefined\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:92:55)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:87:24)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)",
        "browserLogs": [],
        "screenShotFile": "00f400c8-0066-0061-00ab-00af00d500ae.png",
        "timestamp": 1541788874752,
        "duration": 16
    },
    {
        "description": "second add customer|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 13008,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:103:35)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:100:34)\nFrom: Task: Run it(\"second add customer\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:100:9)\n    at addSpecsToSuite (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:12:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "005c008a-0051-00ba-00ad-00d5000f009c.png",
        "timestamp": 1541788875106,
        "duration": 37
    },
    {
        "description": "launch and enter value Bankmanager|launch webpage",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 22964,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "006c002a-0011-0056-00b4-006500fc00b9.png",
        "timestamp": 1541788883378,
        "duration": 4
    },
    {
        "description": "click on bank manager login button|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 22964,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:33:21)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:28:51)\nFrom: Task: Run it(\"click on bank manager login button\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:28:9)\n    at addSpecsToSuite (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:12:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "00ee0066-008d-006f-0008-0054005800e9.png",
        "timestamp": 1541788883821,
        "duration": 54
    },
    {
        "description": "click add customer|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 22964,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:51:21)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:49:34)\nFrom: Task: Run it(\"click add customer\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:49:9)\n    at addSpecsToSuite (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:12:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "00cb007b-0014-00c9-008b-00f1006700c3.png",
        "timestamp": 1541788884191,
        "duration": 37
    },
    {
        "description": "fname|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 22964,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "TypeError: Cannot read property 'firstname' of undefined",
        "trace": "TypeError: Cannot read property 'firstname' of undefined\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:67:52)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:62:20)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)",
        "browserLogs": [],
        "screenShotFile": "005b005b-008f-0007-0005-00cd002f0079.png",
        "timestamp": 1541788884574,
        "duration": 1
    },
    {
        "description": "last name|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 22964,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "TypeError: Cannot read property 'lastname' of undefined",
        "trace": "TypeError: Cannot read property 'lastname' of undefined\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:79:51)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:74:24)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)",
        "browserLogs": [],
        "screenShotFile": "009c006d-00fe-0078-00b5-00fb00b200ea.png",
        "timestamp": 1541788884890,
        "duration": 31
    },
    {
        "description": "post code|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 22964,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "TypeError: Cannot read property 'Code' of undefined",
        "trace": "TypeError: Cannot read property 'Code' of undefined\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:92:55)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:87:24)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)",
        "browserLogs": [],
        "screenShotFile": "002a0073-00da-0051-0008-00d800920060.png",
        "timestamp": 1541788885275,
        "duration": 0
    },
    {
        "description": "second add customer|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 22964,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:103:35)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:100:34)\nFrom: Task: Run it(\"second add customer\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:100:9)\n    at addSpecsToSuite (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:12:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "00b700f5-00d4-006d-0022-000500920020.png",
        "timestamp": 1541788885591,
        "duration": 54
    },
    {
        "description": "launch and enter value Bankmanager|launch webpage",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 26016,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "002900a8-007d-008c-0047-00e900cd0089.png",
        "timestamp": 1541789338679,
        "duration": 16
    },
    {
        "description": "click on bank manager login button|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 26016,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:33:21)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:28:51)\nFrom: Task: Run it(\"click on bank manager login button\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:28:9)\n    at addSpecsToSuite (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:12:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "001c00ad-007f-0077-008d-00d6004000d4.png",
        "timestamp": 1541789339151,
        "duration": 41
    },
    {
        "description": "click add customer|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 26016,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:51:21)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:49:34)\nFrom: Task: Run it(\"click add customer\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:49:9)\n    at addSpecsToSuite (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:12:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "00ff0026-00f3-0046-0082-00b2008000ba.png",
        "timestamp": 1541789339502,
        "duration": 43
    },
    {
        "description": "fname|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 26016,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "TypeError: Cannot read property 'firstname' of undefined",
        "trace": "TypeError: Cannot read property 'firstname' of undefined\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:67:52)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:62:20)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)",
        "browserLogs": [],
        "screenShotFile": "006400ae-005c-0075-0036-004800d200e8.png",
        "timestamp": 1541789339852,
        "duration": 16
    },
    {
        "description": "last name|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 26016,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "TypeError: Cannot read property 'lastname' of undefined",
        "trace": "TypeError: Cannot read property 'lastname' of undefined\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:79:51)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:74:24)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)",
        "browserLogs": [],
        "screenShotFile": "0058000e-00e7-0020-008d-000e0099005c.png",
        "timestamp": 1541789340171,
        "duration": 31
    },
    {
        "description": "post code|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 26016,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "TypeError: Cannot read property 'Code' of undefined",
        "trace": "TypeError: Cannot read property 'Code' of undefined\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:92:55)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:87:24)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)",
        "browserLogs": [],
        "screenShotFile": "00200032-0068-001c-0012-009b002a0074.png",
        "timestamp": 1541789340537,
        "duration": 0
    },
    {
        "description": "second add customer|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 26016,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:103:35)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:100:34)\nFrom: Task: Run it(\"second add customer\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:100:9)\n    at addSpecsToSuite (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:12:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "005a002b-0098-0001-0079-005d00e100d6.png",
        "timestamp": 1541789340906,
        "duration": 44
    },
    {
        "description": "launch and enter value Bankmanager|launch webpage",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 18168,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00d60015-0089-004d-009a-007c007e00f6.png",
        "timestamp": 1541789633525,
        "duration": 16
    },
    {
        "description": "click on bank manager login button|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 18168,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:33:21)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:28:51)\nFrom: Task: Run it(\"click on bank manager login button\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:28:9)\n    at addSpecsToSuite (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:12:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "00300043-00a1-00c0-00f6-002700f60015.png",
        "timestamp": 1541789634013,
        "duration": 27
    },
    {
        "description": "click add customer|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 18168,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:51:21)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:49:34)\nFrom: Task: Run it(\"click add customer\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:49:9)\n    at addSpecsToSuite (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:12:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "008000c0-0084-00aa-006a-00e5004400d2.png",
        "timestamp": 1541789634364,
        "duration": 40
    },
    {
        "description": "fname|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 18168,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "TypeError: Cannot read property 'firstname' of undefined",
        "trace": "TypeError: Cannot read property 'firstname' of undefined\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:67:52)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:62:20)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)",
        "browserLogs": [],
        "screenShotFile": "009d004f-005b-00a7-0080-0043008f00c8.png",
        "timestamp": 1541789634718,
        "duration": 0
    },
    {
        "description": "last name|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 18168,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "TypeError: Cannot read property 'lastname' of undefined",
        "trace": "TypeError: Cannot read property 'lastname' of undefined\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:79:51)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:74:24)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)",
        "browserLogs": [],
        "screenShotFile": "009a00b0-0052-0019-004b-00fd006400bd.png",
        "timestamp": 1541789635050,
        "duration": 39
    },
    {
        "description": "post code|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 18168,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "TypeError: Cannot read property 'Code' of undefined",
        "trace": "TypeError: Cannot read property 'Code' of undefined\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:92:55)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:87:24)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)",
        "browserLogs": [],
        "screenShotFile": "00d5006a-0068-0073-00e2-00f500cc00f4.png",
        "timestamp": 1541789635417,
        "duration": 8
    },
    {
        "description": "second add customer|launch webpage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 18168,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"",
        "trace": "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:103:35)\n    at step (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:34:23)\n    at Object.next (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:15:53)\n    at C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:9:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.js:5:12)\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:100:34)\nFrom: Task: Run it(\"second add customer\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:100:9)\n    at addSpecsToSuite (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqwb1\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqwb1\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\Specs\\Assignment.ts:12:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "00f70009-00c2-008a-0035-00b8007d0031.png",
        "timestamp": 1541789635745,
        "duration": 52
    }
];

    this.sortSpecs = function () {
        this.results = results.sort(function sortFunction(a, b) {
    if (a.sessionId < b.sessionId) return -1;else if (a.sessionId > b.sessionId) return 1;

    if (a.timestamp < b.timestamp) return -1;else if (a.timestamp > b.timestamp) return 1;

    return 0;
});
    };

    this.sortSpecs();
});

app.filter('bySearchSettings', function () {
    return function (items, searchSettings) {
        var filtered = [];
        var prevItem = null;

        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            item.displaySpecName = false;

            countLogMessages(item);

            var hasLog = searchSettings.withLog && item.browserLogs && item.browserLogs.length > 0;
            if (searchSettings.description === '' ||
                (item.description && item.description.toLowerCase().indexOf(searchSettings.description.toLowerCase()) > -1)) {

                if (searchSettings.passed && item.passed || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    var prevItem = item;
                } else if (searchSettings.failed && !item.passed && !item.pending || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    var prevItem = item;
                } else if (searchSettings.pending && item.pending || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    var prevItem = item;
                }

            }
        }

        return filtered;
    };
});

var checkIfShouldDisplaySpecName = function (prevItem, item) {
    if (!prevItem) {
        item.displaySpecName = true;
        return;
    }

    if (getSpec(item.description) != getSpec(prevItem.description)) {
        item.displaySpecName = true;
        return;
    }
};

var getSpec = function (str) {
    var describes = str.split('|');
    return describes[describes.length-1];
};

var countLogMessages = function (item) {
    if ((!item.logWarnings || !item.logErrors) && item.browserLogs && item.browserLogs.length > 0) {
        item.logWarnings = 0;
        item.logErrors = 0;
        for (var logNumber = 0; logNumber < item.browserLogs.length; logNumber++) {
            var logEntry = item.browserLogs[logNumber];
            if (logEntry.level === 'SEVERE') {
                item.logErrors++;
            }
            if (logEntry.level === 'WARNING') {
                item.logWarnings++;
            }
        }
    }
};