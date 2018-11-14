//* Author: Swaydizzle* //
//* Creation Date: 11/7/2018* //

import {element,by,browser, ExpectedConditions} from "protractor" ;
//import {DataProvider } from '..//dataProvider/dataProvider';
import {async} from "q";
//let using = require('jasmine-data-provider');
import {AddCustomer} from '../pages/BankManagerTest/bankmanager';
import {OpenAccount} from '../pages/OpenAccount';
//import { AngularWaitBarrier } from "blocking-proxy/built/lib/angular_wait_barrier";

let jsd= require('../../xyz_bank/Data/testData'); 

var customerdetails = new AddCustomer();
var openaccountdetails = new OpenAccount
(jsd.CustomerData1.firstname+" "+jsd.CustomerData1.lastname,jsd.CustomerData1.currency);


//using(DataProvider.Common, async function (data)
//{
describe('bankmanager',function(){

    it('launch and enter value in Bankmanager',async()=>
    {console.log(" I made it past the first stop");
        try{    
        await browser.get(jsd.CustomerData1.url);    
        console.log("I done did it");
        }
        catch(error){
            console.log("I got an error");
        }
    });
    
    it('click on Bank manager Login button', async()=>{
        await customerdetails.clickonBankmanagerLoginButton();
    });
    
    it('Click on Add customer button', async()=>{
        await customerdetails.clickonAddCustomerButton();
    });

    it('enter the first name value', async()=>{
        await customerdetails.enterFirstName(jsd.CustomerData1.firstname);
    });    
    
    it('enter the last name value', async()=>{
        await customerdetails.enterLastName(jsd.CustomerData1.lastname);      
    });

    it('enter the Pstal code value', async()=>{
        await customerdetails.enterPostcode(jsd.CustomerData1.Code);
    });
    it('Click on add customer button', async()=>{
        await customerdetails.addCustomerButtonClick(); 

    });

    //*it(Click on Open Customer button) 
    it('Click on Open customer button', async()=>{ 
        await openaccountdetails.clickonOpenAccountbutton();
    });

     //*it(Click and select Customer dropdown*//
          it('Click and select customer dropdown', async()=>{ 
        await openaccountdetails.selectCustomerName();
    });

    it("select currency ", () => {
        openaccountdetails.selectCurrency();
        
    });

    it("click on Process button to generact account no", () => {
        openaccountdetails.clickOnProcessButton();
        var alertValidate = browser.switchTo().alert();
        expect(alertValidate.accept).toBeDefined();
        alertValidate.getText().then((text) => {
            console.log(text);
            alertValidate.accept();
        })


    })


});
//}
