describe('test apiom', function() {

	var Email = 'loc@go1.com.au';
	var Pass = '123456a';
	var FirstName = 'Nguyen';
	var LastName = 'Loc';
	var mainURL = 'http://locnguyen.mygo1.com/webapp/#';

	beforeEach(function() {
		browser.get(mainURL + '/access/signin');
	    browser.waitForAngular();

		element(by.model('user.username')).sendKeys('loc@go1.com.au');
	    element(by.model('user.password')).sendKeys('123456a');
	    element(by.buttonText('Sign in')).click();	    
	    expect(browser.getTitle()).toEqual('- Dashboard | GO1');	
	});

	//testcase pass
	/*it('change LastName', function() {
		browser.get(mainURL + '/app/user/account');
		element(by.model('user.profile.field_last_name')).clear().sendKeys('admin');
		element(by.buttonText('Submit')).click();
		browser.waitForAngular();
		expect(element(by.css('#box-inner span')).getText()).toEqual('Nguyen admin');;	
	},50000);*/

/*	it('change password', function() {
		browser.get(mainURL + '/app/user/account');
		element(by.model('user.pass')).sendKeys('password1');
		element(by.model('user.pass2')).sendKeys('password1');
		element(by.buttonText('Submit')).click();
		browser.waitForAngular();
		browser.get(mainURL + '/access/logout');
		browser.get(mainURL + '/access/signin');
		element(by.model('user.username')).sendKeys('student');
	    element(by.model('user.password')).sendKeys('password1');
	    element(by.buttonText('Sign in')).click();	    
	    expect(browser.getLocationAbsUrl()).toMatch('/app/dashboard');
	});*/
	
	it('login fail', function() {
		browser.get(mainURL + '/access/logout');
		expect(browser.getLocationAbsUrl()).toBe('/access/signin');
		element(by.model('user.username')).sendKeys('loc@gohg1.com.au');
	    element(by.model('user.password')).sendKeys('123456a');
	    element(by.buttonText('Sign in')).click();	    
	    expect(element(by.css('p.ng-binding')).getText()).toBe('Invalid username and/or password');
	});
});
