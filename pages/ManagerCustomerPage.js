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
let mangrCust=function(){
    let del=element(by.xpath("//tr[6]//td[5]//button[1]"));

    this.deleteAcc=function(){
        del.click();
        console.log('deleted Account');
        logger.info('deleted Account');
        return this;
    }
}
module.exports=new mangrCust();