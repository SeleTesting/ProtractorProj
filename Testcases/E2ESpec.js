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
let clogin=require(process.cwd()+'/pages/LoginPage.js');
var mlogin=require(process.cwd()+'/pages/ManagerLoginPage.js');

describe('Manager Homepage', () => {
    beforeEach(function(){
        browser.get(data.url);
    })
    afterEach(function(){
        browser.sleep(3000);
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Testcase completed~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
        logger.info('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Testcase completed~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    })
    it('TC1',function(){
        clogin.customerloginPresent();
        mlogin.managerloginPresent();
    });
    it('TC2',function(){
        let managerHpage=mlogin.clickmanager();
        managerHpage.verifyoption();
        console.log('Verified homepages options');
        return this;
    });
    it('TC3',function(){
        let managerHpage=mlogin.clickmanager();
        let addcust=managerHpage.clickAddCust();
        addcust.enterFirstName(data.formdata.fname);
        addcust.enterLastName(data.formdata.lname);
        addcust.enterPostcode(data.formdata.Postcode);
        browser.sleep(5000);
        addcust.clickSubmit();
        addcust.verifyAlert();
    });
    it('TC4',function()
    {
        let managerHpage=mlogin.clickmanager();
        let openAcc=managerHpage.clickopenCustomer();
        openAcc.slectuser();
        browser.sleep(3000);
        openAcc.selectCurrDoller();
        openAcc.clickProcess();
        openAcc.verifyPopup();
    })
    it('TC5',function(){
        let managerHpage=mlogin.clickmanager();
        let openAcc=managerHpage.clickopenCustomer(); 
        openAcc.slectuser();
        browser.sleep(3000);
        openAcc.selectCurrPound();
        openAcc.clickProcess();
        openAcc.verifyPopup();
        
    })
    it('TC6',function(){
        let managerHpage=mlogin.clickmanager();
        let openAcc=managerHpage.clickopenCustomer(); 
        openAcc.slectuser();
        browser.sleep(3000);
        openAcc.selectCurrRupee();
        openAcc.clickProcess();
        openAcc.verifyPopup();
        
    })
   
    it('TC7',function(){
        let managerHpage=mlogin.clickmanager();
        let openAcc=managerHpage.clickcustomer(); 
        openAcc.deleteAcc();
    });
     
    it('Tc8',function(){
       clogin.customerloginPresent
       let selectop= clogin.clickcustomer();
        selectop.SelectOption();  
        selectop.CustomerLogin()  
    });
    it('Tc9',function(){
        let selectop=clogin.clickcustomer();
        selectop.SelectOption();  
        let Accpg=selectop.CustomerLogin();
        Accpg.verifyCustName();
        Accpg.verifyAccountNumCurrency();
    });
    it('Tc10',function(){
        let selectop=clogin.clickcustomer();
        selectop.SelectOption();  
        let Accpg=selectop.CustomerLogin();
        Accpg.verifyCustName();
        Accpg.clickTransaction();
       
    });
    it('Tc11',function(){
        selectop=clogin.clickcustomer();
        selectop.SelectOption();  
        let Accpg=selectop.CustomerLogin();
        Accpg.verifyCustName();
        Accpg.select1006Acc();
        let depo=Accpg.clickDeposit();
        depo.enterDepositamt(data.deposit.amt);
        depo.submitDeposit();
        browser.sleep(2000);
        depo.verifyBalance(data.deposit.amt1);  
    })
    it('Tc12',function(){
        selectop=clogin.clickcustomer();
        selectop.SelectOption();  
        let Accpg=selectop.CustomerLogin();
        Accpg.verifyCustName();
        Accpg.select1006Acc();
        let trnspg=Accpg.clickTransaction();
        //trnspg.ValidateTransactionamt(data.deposit.amt1,"Credit");
    })
    it('Tc13',function(){
        selectop=clogin.clickcustomer();
        selectop.SelectOption();  
        let Accpg=selectop.CustomerLogin();
        Accpg.verifyCustName();
        Accpg.select1006Acc(); 
        let withd=Accpg.clickWithdrawl();
        browser.sleep(4000);
        withd.enteramt(data.withdraw.amt);
        withd.submit();
        withd.errmsgvalidation();
    })
    it('Tc14',function(){
        selectop=clogin.clickcustomer();
        selectop.SelectOption();  
        let Accpg=selectop.CustomerLogin();
        Accpg.verifyCustName();
        Accpg.select1006Acc(); 
        let withd=Accpg.clickWithdrawl();
        browser.sleep(4000);
        withd.enteramt(data.withdraw.amt2);
        withd.submit();
        withd.Succmsgvalidation();
    });
    it('Tc15',function(){
        selectop=clogin.clickcustomer();
        selectop.SelectOption();  
        let Accpg=selectop.CustomerLogin();
        Accpg.verifyCustName();
        Accpg.select1006Acc();
        let trnspg=Accpg.clickTransaction();
        trnspg.ValidateTransactionamt(data.withdraw.amt3,"Debit");
    });
    it('Tc16',function(){
        selectop=clogin.clickcustomer();
        selectop.SelectOption();  
        let Accpg=selectop.CustomerLogin();
        Accpg.verifyCustName();
        Accpg.select1006Acc();
        let trns=Accpg.clickTransaction();
        trns.resetButton();
        trns.validateTransaction();
    });
    it('Tc17',function(){
        selectop=clogin.clickcustomer();
        selectop.SelectOption();  
        let Accpg=selectop.CustomerLogin();
        Accpg.verifyCustName();
        Accpg.select1006Acc();
        let trns=Accpg.clickTransaction();
        trns.BackBtn();
        Accpg.verifyCustName();
    });
    it('Tc18',function(){
        selectop=clogin.clickcustomer();
        selectop.SelectOption();  
        let Accpg=selectop.CustomerLogin();
        Accpg.verifyCustName();
        Accpg.logoutbtn();
        clogin.customerloginPresent();
    });

});