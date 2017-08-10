import React from 'react';
import { shallow, mount, render } from 'enzyme';

import LocalizedNumericInput from './localized-numeric-input'

describe('LocalizedNumericInput', function() {
	it('renders', function() {
		expect(shallow(<LocalizedNumericInput />).contains('<input '))
	})
})