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
var Actions_1 = require("../Actions/Actions");
var OpenAccount = /** @class */ (function (_super) {
    __extends(OpenAccount, _super);
    function OpenAccount(name, value1) {
        var _this = _super.call(this) || this;
        _this.openAccountbtn = "//button[@ng-click='openAccount()']";
        _this.customerName = "//*[contains(text(),'" + name + "')]";
        _this.currency = "//*[contains(text(),'" + value1 + "')]";
        _this.processClick = "//button[@type='submit']";
        return _this;
    }
    OpenAccount.prototype.clickonOpenAccountbutton = function () {
        this.myClick(this.clickonOpenAccountbutton, "click on open account");
    };
    OpenAccount.prototype.selectCustomerName = function () {
        this.dropDown(this.customerName, "select customer name");
    };
    OpenAccount.prototype.selectCurrency = function () {
        this.dropDown(this.currency, "select currency name");
    };
    OpenAccount.prototype.clickOnProcessButton = function () {
        this.dropDown(this.currency, "click on process button");
    };
    return OpenAccount;
}(Actions_1.Actions));
exports.OpenAccount = OpenAccount;
//const btnlogin = element(by.xpath(this.openAccountbtn));
//if (btnlogin.isDisplayed());
//{
//btnlogin.click();  
//   this.myClick(btnlogin, "able to click");   
//}
//  else
//        console.log("element not displayed");
//public clickCustomerdropdown()
// }
//this.dropDown(this.CustomerSelectionXpath, 'Selecting Drop Down');
//{
//}
//# sourceMappingURL=OpenAccount.js.map