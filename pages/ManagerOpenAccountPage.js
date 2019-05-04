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
var openAcc=function()
{ let custname=element.all(by.repeater('cust in Customers'));
    let process=element(by.buttonText('Process'));
    let currency=element(by.model('currency'));
    let doller=element(by.model('currency')).$('[value="Dollar"]');
    let Pound=element(by.model('currency')).$('[value="Pound"]');
    let Rupee=element(by.model('currency')).$('[value="Rupee"]');

    this.slectuser=function(){
       custname.click();
       custname.get(5).click();
       console.log('Selected customer');
       logger.info('Selected customer');
        return this;
    }
    this.selectCurrDoller=function(){
        currency.click();
        doller.click();
        console.log('Doller selected');
        logger.info('Doller selected');
        return this;
    }

    this.selectCurrPound=function(){
        Pound.click();
        console.log('Pound selected');
        logger.info('Pound selected');
        return this;
    }

    this.selectCurrRupee=function(){
        Rupee.click();
        console.log('Rupee selected');
        logger.info('Rupee selected');
        return this;
        }

    this.clickProcess=function(){
        process.click();
        console.log('Processed account ');
        logger.info('Processed account ');
    }
    this.verifyPopup=function()
    {
     browser.switchTo().alert().accept();
     console.log('Pop-up window Success Message displayed');
     logger.info('Pop-up window Success Message displayed');
     browser.sleep(3000);
     return this;
    }

   
}
module.exports=new openAcc();
