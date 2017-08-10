import React from 'react';
import PropType from 'prop-types'
import LocalizedNumberParser from 'localized-number-parser'

export default class LocalizedNumberInput extends React.Component {
	constructor(props) {
		super(props)
		this.onError = typeof props.onError === 'function' ? props.onError.bind(this) : (() => {})
		this.onUpdate = typeof props.onUpdate === 'function' ? props.onUpdate.bind(this) : (() => {})
	}

	render() {
		return <input type="text" onChange={this.onChange}></input>
	}

	onChange(ev) {
		this.onError()
	}
}

LocalizedNumberParser.propTypes = {
	onError: PropType.func,
	onUpdate: PropType.func,
}
