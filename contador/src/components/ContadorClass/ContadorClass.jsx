import React, { Component } from 'react'
import { Button } from '../Button/Button'
import '../Contador/Contador'

export default class ContadorClass extends Component {

    constructor(props) {
        super(props)

        this.incrementar = this.incrementar.bind(this)
        this.decrementar = this.decrementar.bind(this)
        this.reset = this.reset.bind(this)
    }

    incrementar = () => {
        this.props.setCount(this.props.count + 1)
    }

    decrementar = () => {
        this.props.setCount(this.props.count - 1)
    }

    reset = () => {
        this.props.setCount(0)
    }

    render() {
        return (
            <div className='contador-container'>
                <div>
                    <Button texto={'-'} operacion handleClick={this.decrementar} />
                    <span>
                        {this.props.count}
                    </span>
                    <Button texto={'+'} operacion handleClick={this.incrementar} />
                </div>
                <div>
                    <Button texto={'Reset'} operacion={false}
                        handleClick={this.reset}
                        disabled={(this.props.count !== 0) ? false : true} />
                </div>
            </div>
        )
    }
}
