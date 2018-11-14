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
var AddCustomer = /** @class */ (function (_super) {
    __extends(AddCustomer, _super);
    function AddCustomer() {
        var _this = _super.call(this) || this;
        _this.clickAddCustomer = "//button[ng-click ='addCust()]";
        _this.firstName = "//input[@ng-model = 'fname']";
        _this.lastName = "//input[@ng-model = 'lname']";
        _this.postcode = "//input[@ng-model = 'postCd']";
        _this.generateCustomerID = "//button[@type ='submit']";
        return _this;
    }
    AddCustomer.prototype.clickAddCustomerButton = function () {
        this.myClick(this.clickAddCustomer, "Click on add Customer");
    };
    AddCustomer.prototype.enterfirstName = function (keys) {
        this.sendKey(this.firstName, "enter first name", keys);
    };
    AddCustomer.prototype.enterLastName = function (keys) {
        this.sendKey(this.lastName, "enter first name", keys);
    };
    return AddCustomer;
}(Actions_1.Actions));
exports.AddCustomer = AddCustomer;
//# sourceMappingURL=addcustomer.js.map