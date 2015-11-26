// spec.js
describe('Test login form', function() {	

	var Email = 'loc@go1.com.au';
	var Pass = '123456a';
	var FirstName = 'Nguyen';
	var LastName = 'Loc';
	var mainURL = 'http://locnguyen.mygo1.com/webapp/#';


	beforeEach(function(){
		browser.get(mainURL + '/access/signin');
		element(by.model('user.username')).sendKeys(Email);
	    element(by.model('user.password')).sendKeys(Pass);
	    element(by.buttonText('Sign in')).click();
	    browser.waitForAngular();
	    
	    expect(browser.getTitle()).toEqual('- Dashboard | GO1');
	    var welcome = element(by.css('#box-inner > div > div.text-white.inline > div.padding.p-v-lg > div > div > h1')).getText();
		expect(welcome).toEqual('Welcome, ' + FirstName + '!');
	   
	});

/*	//assert profile information
	it('check user profile', function() {
		browser.get('http://localhost:9000/#/app/profile');
		
		var get_FirstName = element(by.model('user.profile.field_first_name')).getAttribute('value');
		var get_LastName = element(by.model('user.profile.field_last_name')).getAttribute('value');
		var get_Email = element(by.model('user.mail')).getAttribute('value');
		expect(get_FirstName).toEqual(FirstName);
		expect(get_LastName).toEqual(LastName);
		expect(get_Email).toEqual(Email);
	});

	//test logout feature
	it('Test logout feature', function() {
		browser.get('http://localhost:9000/#/access/logout');
		
		expect(browser.getCurrentUrl()).toContain('access/signin');
	});

	it('Change password, but missing confirm password', function() {
		browser.get('http://localhost:9000/#/app/profile');

		//change new password, but miss confirm pass, so new pass is inactive
		var newpass = '123abc';
		element(by.model('user.pass')).sendKeys(newpass);
		element(by.buttonText('Submit')).click()
		browser.waitForAngular();
		browser.get('http://localhost:9000/#/access/logout');

		//login unsuccessful with new pass
		element(by.model('user.username')).sendKeys(Email);
	    element(by.model('user.password')).sendKeys(newpass);
	    element(by.buttonText('Sign in')).click();

	    //cannot login in with new pass
	    var message = element(by.xpath('/html/body/div[1]/div[2]/div/div[2]/div[2]/div[1]/div/p')).getText();
		expect(message).toEqual('Invalid username and/or password');

	});
	

	it('Change password', function() {

		var name;
		function getName(){
			name = element(by.xpath('//*[@id="navbar"]/ul/li/a/span')).getText();	
		}
		//change password
		getName();
		expect(name).toEqual(FirstName + ' ' + LastName);

		browser.get('http://localhost:9000/#/app/profile');
		var newpass = '123abc';

		element(by.model('user.profile.field_first_name')).clear().sendKeys(LastName);
		element(by.model('user.profile.field_last_name')).clear().sendKeys(FirstName);
		element(by.model('user.pass')).sendKeys(newpass);
		element(by.model('user.pass2')).sendKeys(newpass);
		element(by.buttonText('Submit')).click();
		browser.waitForAngular();
		browser.get('http://localhost:9000/#/access/logout');

		//Login with new password
		element(by.model('user.username')).sendKeys(Email);
	    element(by.model('user.password')).sendKeys(newpass);
	    element(by.buttonText('Sign in')).click();
	    getName();
	    expect(browser.getTitle()).toEqual('- Dashboard | GO1');
	    expect(name).toEqual(LastName + ' ' + FirstName);

	    //Change to old profile
	    browser.get('http://localhost:9000/#/app/profile');
	    element(by.model('user.profile.field_first_name')).clear().sendKeys(FirstName);
		element(by.model('user.profile.field_last_name')).clear().sendKeys(LastName);
		element(by.model('user.pass')).sendKeys(Pass);
		element(by.model('user.pass2')).sendKeys(Pass);
		element(by.buttonText('Submit')).click();
		browser.waitForAngular();
	},500000);
	
	it('check sitebar menu', function() {
		element(by.xpath('//*[@id="nav"]/nav/ul/li[1]/a/i')).click();
		browser.waitForAngular();
		expect(browser.getCurrentUrl()).toContain('app/dashboard');

		element(by.xpath('//*[@id="nav"]/nav/ul/li[2]/a/i')).click();
		browser.waitForAngular();
		expect(browser.getCurrentUrl()).toContain('app/courses');

		element(by.xpath('//*[@id="nav"]/nav/ul/li[3]/a/i')).click();
		browser.waitForAngular();
		expect(browser.getCurrentUrl()).toContain('app/company-courses');		

		element(by.xpath('//*[@id="nav"]/nav/ul/li[4]/a/i')).click();
		browser.waitForAngular();
		expect(browser.getCurrentUrl()).toContain('app/marketplace');
	},500000);

	it('Check links on Dashboard', function() {
		element(by.linkText(' - View All')).click();
		expect(browser.getCurrentUrl()).toContain('app/courses');
		browser.waitForAngular();
		browser.get('http://localhost:9000/#/app/dashboard');
		element(by.linkText('Browse Marketplace')).click();
		expect(browser.getCurrentUrl()).toContain('app/marketplace');
		browser.waitForAngular();
	});*/

	//Compare number of Company Course from 2 users have same portal
/*	it('Compare numbuer of Company Course from 2 users have same portal', function() {
		//count number of courses display for user

		var courseList1 = countCourse(mainURL);		
	
		browser.get(mainURL + '/access/logout');

		expect(browser.getCurrentUrl()).toBe(mainURL + '/access/signin');
		element(by.model('user.username')).sendKeys('nhulee93@gmail.com');
	    element(by.model('user.password')).sendKeys('dvs-dv8');
	    element(by.buttonText('Sign in')).click();
	    browser.waitForAngular();
	    expect(browser.getTitle()).toEqual('- Dashboard | GO1');

	   	var courseList2 = countCourse(mainURL);

		expect(courseList1).toEqual(courseList2);
	},500000);*/

/*	function countCourse(){
		var userMenu = element(by.xpath('//*[@id="navbar"]/ul/li/a'));
		userMenu.click();
		browser.actions().mouseMove(userMenu, {x: 100, y: 130}).perform();
		browser.sleep(5000);
		element(by.linkText('nhu.mygo1.com')).click();
		browser.waitForAngular();
		browser.get(mainURL + '/app/company-courses');
		browser.waitForAngular();
		return element.all(by.repeater('item in courseList.item')).count();
	}

/*	it('Compare Company Course in 2 different portal', function() {

		var courseList1 = countCourse();
		expect(courseList1).toEqual(3);

		browser.get('http://locnguyen.mygo1.com/webapp/#/access/signin');

		element(by.model('user.username')).sendKeys(Email);
	    element(by.model('user.password')).sendKeys(Pass);
	    element(by.buttonText('Sign in')).click();
	    browser.waitForAngular();
	    browser.sleep(10000);
	    
	    expect(browser.getTitle()).toEqual('- Dashboard | GO1');
	    var welcome = element(by.css('#box-inner > div > div.text-white.inline > div.padding.p-v-lg > div > div > h1')).getText();
		expect(welcome).toEqual('Welcome, ' + FirstName + '!');

		var userMenu = element(by.xpath('//*[@id="navbar"]/ul/li/a/span'));
		userMenu.click();
		browser.actions().mouseMove(userMenu, {x: 50, y: 100}).perform();
		browser.sleep(5000);
		element(by.linkText('content.adurolms.com')).click();
		browser.waitForAngular();
		browser.get('http://locnguyen.mygo1.com/webapp/#/app/company-courses');
		browser.waitForAngular();
		var courseList2 = element.all(by.repeater('item in courseList.item')).count();
		expect(courseList1).toEqual(courseList2);

	},500000);

/*	it('count', function() {
		var counter;
		var userMenu = element(by.linkText(FirstName + ' ' + LastName));
		userMenu.click();
		browser.actions().mouseMove(userMenu,{x: 100, y: 130}).perform();
		browser.waitForAngular();
		browser.sleep(5000);
		element(by.linkText('nhu.mygo1.com')).click();
		browser.get('http://localhost:9000/#/app/company-courses');
		browser.waitForAngular();
		var numberCourse;
		var courseList1 = element.all(by.repeater('item in courseList.items')).count();
		expect(courseList1).toEqual(2);
		var courseList2 = element.all(by.repeater('item in courseList.items')).count();
		expect(courseList2).toEqual(2);
		expect(courseList1).toEqual(courseList2);
		userMenu.click();
		browser.actions().mouseMove(userMenu,{x: 100, y: 130}).perform();
		browser.waitForAngular();
		browser.sleep(5000);
		element(by.linkText('locnguyen.mygo1.com')).click();
		browser.waitForAngular();
		browser.get('http://localhost:9000/#/app/company-courses');
		browser.waitForAngular();
		var courseList3 = element.all(by.repeater('item in courseList.items')).count();
		expect(courseList3).toEqual(1);
		expect(courseList1).toEqual(courseList3);
//		expect(courseList1.count()).toEqual(courseList3());
/*		courseList.count().then(function(numberCourse){
			for(var i = 0; i < numberCourse; i++){
				courseList.get(i).element(by.tagName('h5')).getText().then(function(courseName){
					console.log(courseName);
				});
			}
		});

//		browser.sleep(10000);
	},500000);*/
	

/*	it('Invite User', function() {
		element(by.buttonText('Send Invite')).click();
		browser.waitForAngular();
	},50000);*/
	
/*	it('should show course title', function() {
		browser.get(mainURL + '/app/company-courses');
		expect(element(by.xpath('//*[@id="box-inner"]/div[3]/div[1]/figure/figcaption/h5')).getText()).not.toBeNull();
	});*/

	it('should show course description', function() {
		browser.get(mainURL + '/app/company-courses');
		element(by.xpath('//*[@id="box-inner"]/div[3]/div[1]/figure/figcaption/h5')).click();
		browser.waitForAngular();
		console.log(element(by.xpath('//*[@id="module-2"]/div[1]/p/p')).getText());
	});

	it('should lickable on continue', function() {
		browser.get(mainURL + '/app/courses');
		element(by.id('enrolment-72810')).click();
		expect(browser.getLocationAbsUrl()).toBe(/.*app\/course?id=72810/);
	});
});