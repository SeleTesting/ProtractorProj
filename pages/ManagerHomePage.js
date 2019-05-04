
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
var ManagerHome=function(){
    let Addcust=element(by.buttonText('Add Customer'));
    let openAcc=element(by.buttonText('Open Account'));
    let customer=element(by.buttonText('Customers'));
   
    
    this.verifyoption=function()
    {
        Addcust.isPresent();
        console.log('Add Customer Present on Manager Home Page');
        logger.info('Add Customer Present on Manager Home Page');
        openAcc.isPresent();
        console.log('Open Account Present on Manager Home Page');
        logger.info('Open Account Present on Manager Home Page');
        customer.isPresent();
        console.log(' Customer Present on Manager Home Page');
        logger.info('Customer Present on Manager Home Page');
        return this;
    }
    this.clickAddCust=function(){
        Addcust.click();
        console.log('Clicked Add customer');
        logger.info('Clicked Add customer');
        return require('./ManagerAddCustomerPage.js');
    }
    this.clickopenCustomer=function(){
        openAcc.click();
        console.log('clicked Open Account');
        logger.info('clicked Open Account');
        return require('./ManagerOpenAccountPage.js');
    }
    this.clickcustomer=function(){
        customer.click();
        console.log('clicked Customer');
        logger.info('clicked Customer');
        return require('./ManagerCustomerPage.js');
    }
}

module.exports=new ManagerHome();