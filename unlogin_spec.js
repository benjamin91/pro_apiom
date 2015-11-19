//unlogin_spec.js
describe('Test features dont need login', function() {

	beforeEach(function(){
		browser.get('http://localhost:9000/#/access/signin');
	});

	/*	it('I registry an account', function() {
		element(by.buttonText('Create an account')).click();
		element(by.model('user.data.profile.field_first_name')).sendKeys('Nguyen');
		element(by.model('user.data.profile.field_last_name')).sendKeys('Loc');
		element(by.model('user.email')).sendKeys('loc@go1.com.au');
		element(by.model('agree')).click();
	});*/
	
	//action: login with invalid username and password
	//result: cannot login, show error message
	it('Singin with invalid username and password', function() {
		element(by.buttonText('Sign in')).click();
		
		var message = element(by.xpath('/html/body/div[1]/div[2]/div/div[2]/div[2]/div[1]/div/p')).getText();
		expect(message).toEqual('Invalid username and/or password');
	});

/*	it('request new password', function() {
		element(by.buttonText('Forgot password?')).click();
		expect(browser.getCurrentUrl()).toContain('/forgot-password');
		element(by.model('user.mail')).sendKeys('loc@go1.com.au');
		element(by.buttonText('Send')).click();
		
		var text = element(by.css('#alerts-container > div > span')).getText();
		expect(text).toEqual('Instructions sent to your email');
	});*/
});