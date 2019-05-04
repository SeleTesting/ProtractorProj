var data=require(process.cwd()+'/utility/bankingdata.json');
var clogin=require(process.cwd()+'/pages/LoginPage.js');

describe('Banking e2e Automation', () => {
    beforeEach(function(){
        browser.get(data.url);
    })
    afterEach(function(){
        browser.sleep(3000);
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Testcase completed~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    })
    it('Tc1',function(){
      clogin.customerloginPresent();
        let selectop=clogin.clickcustomer();
        selectop.SelectOption();  
        selectop.CustomerLogin();
     
    });
    it('Tc2',function(){
        let selectop=clogin.clickcustomer();
        selectop.SelectOption();  
        selectop.CustomerLogin();  
    });
});