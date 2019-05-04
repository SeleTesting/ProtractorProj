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
    var CustomerAccount=function(){
   var verifyname=element(by.xpath("//span[@class='fontBig ng-binding']"));
    var Acc1004=element(by.xpath("//strong[contains(text(),'1004')]"));
    var Acc1004currency=element(by.xpath("//strong[contains(text(),'Dollar')]"));
    var Acc1005=element(by.xpath("//strong[contains(text(),'1005')]"));
    var Acc1005currency=element(by.xpath("//strong[contains(text(),'Pound')]"));
    var Acc1006=element(by.xpath("//strong[contains(text(),'1006')]"));
    var Acc1006currency=element(by.xpath("//strong[contains(text(),'Rupee')]"));
    let withdrawbutton=element(by.buttonText('Withdrawl'));
    var deposit=element(by.buttonText('Deposit'));
    var trasaction=element(by.buttonText('Transactions'));
    let logout=element(by.buttonText('Logout'));
   

    this.verifyCustName=function()
    {
     verifyname.isDisplayed();
     console.log('Selected Customer Name displayed');
     logger.info('Selected Customer Name displayed');
     return this;
    }
    this.verifyAccountNumCurrency=function()
    {
       element.all(by.tagName('option')).get(0).click();
       console.log('1004 a/c selected');
       logger.info('1004 a/c selected');
       Acc1004.isPresent();
       console.log('Account 1004 information displayed');
       logger.info('Account 1004 information displayed');
       expect(Acc1004currency.getText()).toEqual('Dollar');
       console.log("currrency displayed as dollar");
       logger.info("currrency displayed as dollar");
       browser.sleep(4000);
       element.all(by.tagName('option')).get(1).click();
       console.log('1005 a/c selected');
       logger.info ('1005 a/c selected');
       Acc1005.isPresent();
       console.log('Account 1005 information displayed');
       logger.info('Account 1005 information displayed');
       expect(Acc1005currency.getText()).toEqual('Pound');
       console.log("currrency displayed for 1005 a/c is Pound");
       logger.info("currrency displayed for 1005 a/c is Pound");
       browser.sleep(4000);
       element.all(by.tagName('option')).get(2).click();
       console.log('1006 a/c selected');
       logger.info('1006 a/c selected');
       Acc1006.isPresent();
       console.log('Account 1006 information displayed');
       logger.info('Account 1006 information displayed');
       expect(Acc1006currency.getText()).toEqual('Rupee');
       console.log
       logger.info("currrency displayed for 1005 a/c is Rupee");
       browser.sleep(4000);
       return this;
    }
 
    this.select1006Acc=function()
    {
       element.all(by.tagName('option')).get(2).click();
       console.log('1006 a/c selected');
       logger.info('1006 a/c selected');
       return this;
    }
    this.clickTransaction=function()
    {
        trasaction.click();
        console.log('transaction clicked');
        logger.info('transaction clicked');
        return require('./CustTransactionPage.js');
    }
    this.clickDeposit=function()
    {
        deposit.click();
        console.log('deposit clicked');
        logger.info('deposit clicked');
        return require('./CustomerDepositPage');
    }
    this.clickWithdrawl=function()
    {
        withdrawbutton.click();
        logger.info('Withdraw clicked');
        return require('./CustomerWithdrawlPage.js');
    }

    this.logoutbtn=function(){
       logout.click();
       logger.info('Logout clicked');
       return require('./LoginPage.js');
    }
}
module.exports=new CustomerAccount();