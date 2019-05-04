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
var Customer=function()
{
   //var dropdown=element.all(by.model('custId'));
    var Logincust=element(by.buttonText('Login'));
    var username=element(by.xpath("//span[@class='fontBig ng-binding']"));
   
    this.SelectOption=function ()
    {
        element.all(by.tagName('option')).get(2).click();
        console.log('Selected HarryPotter from dropdown');
        logger.info('Selected HarryPotter from dropdown');
         return this;
    }


    this.CustomerLogin=function()
    {
        Logincust.click();
        expect(username.getText()).toEqual('Harry Potter');
        console.log('login clicked');
        logger.info('login clicked');
       return require('./customerAccountPage.js');
    }

  

   
}
module.exports=new Customer();