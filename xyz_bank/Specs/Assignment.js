"use strict";
//* Author: Swaydizzle* //
//* Creation Date: 11/7/2018* //
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
//let using = require('jasmine-data-provider');
var bankmanager_1 = require("../pages/BankManagerTest/bankmanager");
var OpenAccount_1 = require("../pages/OpenAccount");
//import { AngularWaitBarrier } from "blocking-proxy/built/lib/angular_wait_barrier";
var jsd = require('../../xyz_bank/Data/testData');
var customerdetails = new bankmanager_1.AddCustomer();
var openaccountdetails = new OpenAccount_1.OpenAccount(jsd.CustomerData1.firstname + " " + jsd.CustomerData1.lastname, jsd.CustomerData1.currency);
//using(DataProvider.Common, async function (data)
//{
describe('bankmanager', function () {
    var _this = this;
    it('launch and enter value in Bankmanager', function () { return __awaiter(_this, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log(" I made it past the first stop");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, protractor_1.browser.get(jsd.CustomerData1.url)];
                case 2:
                    _a.sent();
                    console.log("I done did it");
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.log("I got an error");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
    it('click on Bank manager Login button', function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, customerdetails.clickonBankmanagerLoginButton()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('Click on Add customer button', function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, customerdetails.clickonAddCustomerButton()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('enter the first name value', function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, customerdetails.enterFirstName(jsd.CustomerData1.firstname)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('enter the last name value', function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, customerdetails.enterLastName(jsd.CustomerData1.lastname)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('enter the Pstal code value', function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, customerdetails.enterPostcode(jsd.CustomerData1.Code)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('Click on add customer button', function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, customerdetails.addCustomerButtonClick()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    //*it(Click on Open Customer button) 
    it('Click on Open customer button', function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, openaccountdetails.clickonOpenAccountbutton()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    //*it(Click and select Customer dropdown*//
    it('Click and select customer dropdown', function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, openaccountdetails.selectCustomerName()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("select currency ", function () {
        openaccountdetails.selectCurrency();
    });
    it("click on Process button to generact account no", function () {
        openaccountdetails.clickOnProcessButton();
        var alertValidate = protractor_1.browser.switchTo().alert();
        expect(alertValidate.accept).toBeDefined();
        alertValidate.getText().then(function (text) {
            console.log(text);
            alertValidate.accept();
        });
    });
});
//}
//# sourceMappingURL=Assignment.js.map