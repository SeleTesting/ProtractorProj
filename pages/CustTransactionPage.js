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
var Transaction=function()
{
    let reset=element(by.buttonText('Reset'));
    let backbtn=element(by.buttonText('Back'));
    var transTable=element.all(by.repeater('transactions | orderBy:sortType:sortReverse | sDate:startDate:end'));
    

    this.ValidateTransactionamt=function(amt,type)
    {
      browser.sleep(5000);
      transTable.then(function(text){
        var i=text.length-1;
        expect(text[i].getText()).toContain(amt);
        expect(text[i].getText()).toContain(type);
      });
            console.log('Verified updated row');
            logger.info('verified updated row');   
    }
    this.validateTransaction=function(){
      expect(transTable.isPresent()).toBe(false);
      return this;
    }

    this.resetButton=function()
    {
        reset.click();
        console.log('Reset Clicked');
        logger.info('reset button clicked');
        return this;
    }
    this.BackBtn=function(){
        backbtn.click();
        console.log('Back button Clicked');
        logger.info('Back  button clicked');
        return require('./customerAccountPage.js'); 
    }
}
module.exports=new Transaction();