import React from 'react';
import PropType from 'prop-types'
import classnames from 'classnames'

import LocalizedNumberParser from 'localized-number-parser'
import { dump } from './helpers'

export default class LocalizedNumberInput extends React.Component {
	constructor(props) {
		super(props)
		this.onUpdate = props.onUpdate
		this.state = {
			isValid: true,
		}
		this.onChange = this.onChange.bind(this)
		this.parser = new LocalizedNumberParser('en-US')
	}

	render() {
		const cn = classnames({ invalid: !this.state.isValid })
		return <input type="text" onChange={this.onChange} className={cn}></input>
	}

	onChange(ev) {
		let n = this.parser.parse(ev.target.value)
		let isValid = Number.isFinite(n)
		this.setState({ isValid: isValid })
		if (isValid) {
			this.onUpdate(n)
		}
	}
}

LocalizedNumberParser.propTypes = {
	source: PropType.number.isRequired,
}
