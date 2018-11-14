"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var Actions_1 = require("../../Actions/Actions");
//import {Actions} from '../../Actions/Action';
var AddCustomer = /** @class */ (function (_super) {
    __extends(AddCustomer, _super);
    function AddCustomer() {
        var _this = _super.call(this) || this;
        _this.bankmanagerloginbtn = "//button[contains(text(),'Bank Manager Login')]";
        _this.addcustomerbtn = "//button[@ng-class ='btnClass1']";
        _this.firstName = "//input[@ng-model ='fName']";
        _this.lastName = "//input[@ng-model ='lName']";
        _this.postcode = "//input[@ng-model ='postCd']";
        _this.generateCustomerID = "//button[@type ='submit']";
        return _this;
    }
    AddCustomer.prototype.clickonBankmanagerLoginButton = function () {
        try {
            var btnlogin = protractor_1.element(protractor_1.by.xpath(this.bankmanagerloginbtn));
            if (btnlogin.isDisplayed()) {
                btnlogin.click();
                console.log("bank manager button is clicked");
            }
            else {
                console.log("element not displayed");
            }
        }
        catch (error) {
            console.log("error as been displayed");
        }
    };
    AddCustomer.prototype.clickonAddCustomerButton = function () {
        var custbtn = protractor_1.element(protractor_1.by.xpath(this.addcustomerbtn));
        if (custbtn.isDisplayed()) {
            custbtn.click();
        }
        else {
            console.log("customer button is not displayed");
        }
    };
    AddCustomer.prototype.enterFirstName = function (keys) {
        var frstname = protractor_1.element(protractor_1.by.xpath(this.firstName));
        if (frstname.isDisplayed()) {
            frstname.sendKeys(keys);
        }
        else {
            console.log("first name field is not displaying");
        }
    };
    AddCustomer.prototype.enterLastName = function (keys) {
        var lstname = protractor_1.element(protractor_1.by.xpath(this.lastName));
        if (lstname.isDisplayed()) {
            lstname.sendKeys(keys);
        }
        else {
            console.log("last name field is not displaying");
        }
    };
    AddCustomer.prototype.enterPostcode = function (keys) {
        var pstlcode = protractor_1.element(protractor_1.by.xpath(this.postcode));
        if (pstlcode.isDisplayed()) {
            pstlcode.sendKeys(keys);
        }
        else {
            console.log("postal code field is not displaying");
        }
    };
    AddCustomer.prototype.addCustomerButtonClick = function () {
        var custbtn = protractor_1.element(protractor_1.by.xpath(this.generateCustomerID));
        if (custbtn.isDisplayed()) {
            custbtn.click();
        }
        else {
            console.log("submit button is not displaying");
        }
        var alertDialog = protractor_1.browser.switchTo().alert();
        alertDialog.accept();
        var text = alertDialog.getText();
        console.log(text);
    };
    return AddCustomer;
}(Actions_1.Actions));
exports.AddCustomer = AddCustomer;
//# sourceMappingURL=bankmanager.js.map