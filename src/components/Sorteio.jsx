import React from 'react'

import { connect } from 'react-redux'
import Card from './Card'

const Sorteio = props => {
    const {min, max} = props
    const aleatorio = Math.round(Math.random() * (max - min) + min)
    return (
        <Card title='Sorteio de um numero' red>
            <div className="Intervalo">
                <span>
                    <strong>Resultado:</strong>
                    <strong>{aleatorio}</strong>
                </span>
            </div>
        </Card>
    )
}

const mapStateToProps = state => {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}
export default connect(mapStateToProps)(Sorteio)