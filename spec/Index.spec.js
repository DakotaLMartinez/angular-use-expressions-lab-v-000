var path = require('path');

describe('Expressions Test', function() {
	browser.get('https://learn-angular-dakotalmartinez.c9users.io/angular-expressions/angular-use-expressions-lab-v-000/index.html');

	it('should say "You have no emails" if emails is empty', function() {
		expect(element(by.css('h6')).getInnerHtml()).toEqual('You have no emails');
	});

	it('should say the number of emails if emails is not empty', function() {
		element(by.css('button')).click();

		expect(element(by.css('h6')).getInnerHtml()).toEqual('You have 1 emails');

		element(by.css('button')).click();

		expect(element(by.css('h6')).getInnerHtml()).toEqual('You have 2 emails');
	});
});
