import assert = require('assert');
import { NameFinder } from './NameFinder';

describe('NameFinder#get', function() {
	it('When the class is without namespace', function() {
		const text = 'test = MyTest.new';
		const charPosition = 9;
		const finder = new NameFinder(text, charPosition);

		assert.equal(finder.get, 'MyTest');
	});

	it('When the class is without namespace and the focus over the method', function() {
		const text = 'test = MyTest.new';
		const charPosition = 15;
		const finder = new NameFinder(text, charPosition);

		assert.equal(finder.get, 'new');
	});

	it('When the method have namespace', function() {
		const text = 'test = Double::MyTest.new';
		const charPosition = 9;
		const finder = new NameFinder(text, charPosition);

		assert.equal(finder.get, 'Double::MyTest');
	});

	it('When the focus is over the variable', function() {
		const text = 'test = Double::MyTest.new';
		const charPosition = 2;
		const finder = new NameFinder(text, charPosition);

		assert.equal(finder.get, 'test');
	});
});
