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
var data=require(process.cwd()+'/utility/bankingdata.json');
var Withdraw=function(){
   
    let withdrawamt=element(by.model('amount'));
    let submit=element(by.buttonText('Withdraw'));
    let msg=element(by.xpath("//span[@class='error ng-binding']"));
    let balamt=element(by.xpath("//strong[contains(text(),'1000')]"));
   
    this.enteramt=function(amt)
    {
        withdrawamt.sendKeys(amt);
        console.log('entered withdraw amount');
        logger.info('entered withdraw amount');
        return this;
    }

    this.submit=function()
    {
        submit.click();
        console.log('withdraw Submit button amount');
        logger.info('withdraw Submit button amount');
        return this;
    }

    this.errmsgvalidation=function()
    {
        expect(msg.getText()).toBe("Transaction Failed. You can not withdraw amount more than the balance.");
        console.log('Validated error Message :Transaction Failed. You can not withdraw amount more than the balance.');
        logger.error('Validated error Message  :Transaction Failed. You can not withdraw amount more than the balance.');
        return this;
    }

    this.Succmsgvalidation=function()
    {
        expect(msg.getText()).toBe("Transaction successful");
        expect(balamt.getText()).toBe(data.withdraw.amt3);
        console.log('Validated withdrwal amount :Transaction successful displayed');
        logger.info('Validated withdrwal amount :Transaction successful displayed');
       return this;
    }

    
    
}
module.exports=new Withdraw();