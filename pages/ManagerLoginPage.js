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
var Manager=function()
{   let managerButton=element(by.partialButtonText('Bank Manager'));

    
    this.managerloginPresent=function()
    {
      expect(managerButton.getText()).toBe('Bank Manager Login');
        console.log('Manager Login Button Present');
        logger.info('Manager Login Button Present')
        return this;
    }  
    this.clickmanager=function()
    {   expect(managerButton.getText()).toBe('Bank Manager Login');
        managerButton.click();
        console.log('Clicked Manager login');
        logger.info('Clicked Manager login');
        return require('./ManagerHomePage.js');
    }
    
    }
    
module.exports=new Manager();