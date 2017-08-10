import React from 'react';
import PropType from 'prop-types'

import LocalizedNumberParser from 'localized-number-parser'
// import { dump } from './helpers'

export default class LocalizedNumberInput extends React.Component {
	constructor(props) {
		super(props)
		this.props = props
		this.onChange = this.onChange.bind(this)
	}

	render() {
		return <input type="text" onChange={this.onChange}></input>
	}

	onChange(ev) {
		// if (typeof this.props.onError === 'function') {
			this.props.onError()
		// }
	}
}

LocalizedNumberParser.propTypes = {
	onError: PropType.func,
	onUpdate: PropType.func,
}
