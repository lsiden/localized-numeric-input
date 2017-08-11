import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ReactTestUtils from 'react-dom/test-utils';

import LocalizedNumericInput from './index'
import { dump } from './helpers'

describe('LocalizedNumericInput', function() {
	let component;
	const onUpdate = jest.fn();

	beforeEach(function() {
		component = mount(<LocalizedNumericInput onUpdate={onUpdate}></LocalizedNumericInput>)
	})

	it('renders', function() {
		expect(component).toBeTruthy()
	})

	it('sets invalid classname to false when first rendered with no value', function() {
		expect(component.hasClass('invalid')).toBeFalsy()
	})

	it('sets invalid classname to true after given invalid input', function() {
		changeValue(component, '123 456')
		expect(component.hasClass('invalid')).toBeTruthy()
	})

	it('does not call component.onUpdate after given invalid input', function() {
		changeValue(component, '456 789')
		expect(onUpdate.mock.calls.length).toBe(0)
	})

	it('calls component.onUpdate wtih new value after given valid input', function() {
		changeValue(component, '1,123,456.78')
		expect(onUpdate.mock.calls.length).toBe(1)
		expect(onUpdate.mock.calls[0][0]).toBe(1123456.78)
	})

	it('sets invalid classname to false after given valid input', function() {
		changeValue(component, '1,123,456.78')
		expect(component.hasClass('invalid')).toBeFalsy
	})

	it('sets invalid classname to true after updated with empty input', function() {
		changeValue(component, '1')
		changeValue(component, '')
		expect(component.hasClass('invalid')).toBeTruthy()
	})

})

function changeValue(component, value) {
	component.simulate('change', {target: {value: value}})
}
