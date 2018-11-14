import {browser,by,element} from 'protractor';
import {Actions} from '../Actions/Actions';

export class OpenAccount extends Actions {
   openAccountbtn: string;
   currency: string; 
   processClick: string;
   customerName: string;

   constructor(name,value1) {
    super();
    this.openAccountbtn = "//button[@ng-click='openAccount()']"
    this.customerName = "//*[contains(text(),'"+name+"')]"
    this.currency = "//*[contains(text(),'"+value1+"')]"
    this.processClick = "//button[@type='submit']"

   }

public clickonOpenAccountbutton(){
    this.myClick(this.clickonOpenAccountbutton
        ,"click on open account");

    }
selectCustomerName() {
    this.dropDown(this.customerName,"select customer name");

    }

selectCurrency() {
    this.dropDown(this.currency,"select currency name");

    }

clickOnProcessButton() {
    this.dropDown(this.currency,"click on process button");


    }   
}

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


