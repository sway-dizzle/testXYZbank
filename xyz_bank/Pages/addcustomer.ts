import {browser,by,element} from 'protractor';
import {Actions} from '../Actions/Actions';

export class AddCustomer extends Actions {
    clickAddCustomer : string;
    firstName : string;
    lastName : string;
    postcode : string;
    generateCustomerID : string;

    constructor() {
        super();
        this.clickAddCustomer = "//button[ng-click ='addCust()]"
        this.firstName = "//input[@ng-model = 'fname']";
        this.lastName = "//input[@ng-model = 'lname']";
        this.postcode = "//input[@ng-model = 'postCd']"
        this.generateCustomerID = "//button[@type ='submit']"

    }

    public clickAddCustomerButton()
    {
    this.myClick(this.clickAddCustomer ,"Click on add Customer");
    }
    
    enterfirstName(keys)
    {
        this.sendKey(this.firstName, "enter first name",keys);
    }

    enterLastName(keys)
    {
        this.sendKey(this.lastName, "enter first name",keys);


    }
}