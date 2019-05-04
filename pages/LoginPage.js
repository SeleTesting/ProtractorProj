
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
var Login=function(){
    var custButton=element(by.partialButtonText('Customer'));

    this.clickcustomer=function()
    {
        custButton.click();
        console.log('Clicked Customer login');
        logger.info('Clicked Customer login')
        expect(custButton.isPresent());
       return require('./CustomerPage.js');
    }
    
    this.customerloginPresent=function()
    {
        expect(custButton.isPresent());
        console.log('Customer Login Button Present');
        logger.info('Customer Login Button Present');
        return this;
    }
    

}
module.exports=new Login();