import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ReactTestUtils from 'react-dom/test-utils';

import LocalizedNumericInput from './index'
import { dump } from './helpers'

describe('LocalizedNumericInput', function() {
	let component;
	let onError;
	let onUpdate;

	beforeEach(function() {
		onError = jest.fn()
		onUpdate = jest.fn()
		component = mount(<LocalizedNumericInput onError={onError} onUpdate={onUpdate}></LocalizedNumericInput>)
	})

	test('renders', function() {
		expect(shallow(<LocalizedNumericInput />).contains('<input '))
	})

	test('state.value is undefined after invalid input', function() {
		component.value = 'foo bar'
		change(component)
		expect(component.state.value).toBeUndefined()
	})

	test('calls onError handler when test detects invalid input', function() {
		component.value = 'foo bar'
		change(component)
		expect(onError.mock.calls.length).toBeGreaterThan(0)
		expect(onUpdate.mock.calls.length).toBe(0)
	})

	test('state.value is defined after valid input', function() {
		component.value = '123,456.78'
		change(component)
		expect(component.state.value).toBe(123456.78)
	})

	test('calls onUpdate handler when it detects valid input', function() {
		component.value = '123,456.78'
		expect(onError.mock.calls.length).toBe(0)
		expect(onUpdate.mock.calls.length).toBeGreaterThan(0)
	})
})

function change(component) {
	ReactTestUtils.Simulate.change(component.getDOMNode());
}
