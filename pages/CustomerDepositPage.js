let winston = require('winston');
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
      new winston.transports.File({ filename: './reports/winstonBasicLog.log', level: 'info' }),
    ]
  });
  // this will give logs into console
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
var Deposit=function()
{
    var deposit=element(by.buttonText('Deposit'));
    var depositeSubmit=element(by.xpath("//button[@type='submit']"));  
    let input=element(by.model('amount'));
    var balance=element(by.xpath("//strong[contains(text(),'2000')]"));
    let msg=element(by.xpath("//span[@class='error ng-binding']"));

    this.clickDeposit=function()
    {
        deposit.click();
        console.log('deposit clicked');
        logger.info('deposit clicked');
        return this;
    }

    this.enterDepositamt=function(amt)
    {
    browser.sleep(3000);
    input.sendKeys(amt);
    console.log("entered amount");
    logger.info('Amount entered');
    return this;
    }

    this.submitDeposit=function()
    {
        depositeSubmit.click();
        console.log("deposited amount");
    logger.info('deposited money');
        return this;
    }

    this.verifyBalance=function(amt)
    {
    expect(balance.getText()).toBe(amt);
    console.log('verified entered amount');
    logger.info('verified entered amount');
    return this;
    }

    this.sucessmsg=function(){
      let m=msg.getText();
      expect(m).toEqual('Deposit Successful');
      console.log('Success msg validated');
      logger.info('Success msg validated');
    }
}
module.exports=new Deposit();