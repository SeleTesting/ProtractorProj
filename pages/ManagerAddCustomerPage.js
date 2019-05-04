let winston = require('winston');
const logger = winston.createLogger({
    level: 'error',
    format: winston.format.json(),
    transports: [
      new winston.transports.File({ filename: './reports/winstonBasicLog.log', level: 'info' }),
    ]
  });
  // this will give logs into console
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
let AddCust=function()
{
    let firstname=element(by.model('fName'));
    let lastname=element(by.model('lName'));
    let postcode=element(by.model('postCd'));
    let submitform=element(by.xpath("//button[@type='submit']"));
    this.enterFirstName=function(name){
        firstname.sendKeys(name);
        console.log('entered Firstname');
        logger.info('entered Firstname');
        return this;
    }
    this.enterLastName=function(lname){
        lastname.sendKeys(lname);
        console.log('last name entered');
        logger.info('last name entered');
        return this;
    }
    this.enterPostcode=function(pcode){
        postcode.sendKeys(pcode);
        console.log('Postcode enetered');
        logger.info('Postcode enetered');
        return this;
    }
    this.clickSubmit=function(){
        submitform.click();
        console.log('Added Customer');
        logger.info('Added Customer');
        return this;
    }
    this.verifyAlert=function(){
        browser.sleep(4000);
//    let al=browser.switchTo().alert();
//    let al1=al.getText();
//    console.log(al1);
 //   expect(al1).toEqual("Customer added successfully with customer id :6");  
    browser.switchTo().alert().accept();
    console.log('pop up success Message displayed');
    logger.info('pop up success Message displayed');
    }
}
module.exports=new AddCust();