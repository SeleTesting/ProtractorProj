
var data=require(process.cwd()+'/utility/bankingdata.json');
var clogin=require(process.cwd()+'/pages/LoginPage.js');

describe('Customer Deposit', () => {
    beforeEach(function(){
        browser.get(data.url);
    })
    afterEach(function(){
        browser.sleep(3000);
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Testcase completed~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
        
    })
    it('Tc3',function(){
        let selectop=clogin.clickcustomer();
        selectop.SelectOption();  
        let Accpg=selectop.CustomerLogin();
        Accpg.verifyCustName();
        Accpg.verifyAccountNumCurrency();
    });
    it('Tc4',function(){
        selectop=clogin.clickcustomer();
        selectop.SelectOption();  
        let Accpg=selectop.CustomerLogin();
        Accpg.verifyCustName();
        Accpg.select1006Acc();
        let depo=Accpg.clickDeposit();
        depo.enterDepositamt(data.deposit.amt);
        depo.submitDeposit();
        depo.sucessmsg();
        browser.sleep(2000);
        depo.verifyBalance(data.deposit.amt1);  
    })
    it('Tc5',function(){
        selectop=clogin.clickcustomer();
        selectop.SelectOption();  
        let Accpg=selectop.CustomerLogin();
        Accpg.verifyCustName();
        Accpg.select1006Acc();
        let trns=Accpg.clickTransaction();
        //trns.ValidateTransactionamt(data.deposit.amt1,"Credit");
    })
    it('Tc6',function(){
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
    it('Tc7',function(){
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
    it('Tc8',function(){
        selectop=clogin.clickcustomer();
        selectop.SelectOption();  
        let Accpg=selectop.CustomerLogin();
        Accpg.verifyCustName();
        Accpg.select1006Acc();
        let trnspg=Accpg.clickTransaction();
        trnspg.ValidateTransactionamt(data.withdraw.amt3,"Debit");
    });
    it('Tc9',function(){
        selectop=clogin.clickcustomer();
        selectop.SelectOption();  
        let Accpg=selectop.CustomerLogin();
        Accpg.verifyCustName();
        Accpg.select1006Acc();
        let trns=Accpg.clickTransaction();
        trns.resetButton();
        trns.validateTransaction();
    });
});