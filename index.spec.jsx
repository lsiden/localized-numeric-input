import React from 'react';
import { shallow, mount, render } from 'enzyme';

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
		expect(component.state.value).toBeUndefined()
	})

	test('calls onError handler when test detects invalid input', function() {
		component.value = 'foo bar'
		expect(onError.called).toBeTruthy()
		expect(onUpdate.called).toBeFalsy()
	})

	test('state.value is defined after valid input', function() {
		component.value = '123,456.78'
		expect(component.state.value).toBe(123456.78)
	})

	test('calls onUpdate handler when it detects valid input', function() {
		component.value = '123,456.78'
		expect(onError.called).toBeFalsy()
		expect(onUpdate.called).toBeTruthy()
	})
})
