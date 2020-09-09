import React from 'react'
import './Intervalo.css'
import Card from './Card'
import { connect } from 'react-redux'
import { alterarNumeroMinimo, alterarNumeroMaximo } from '../store/actions/numeros'

const Intervalo =  props => {
    const {min, max} = props
    return (
        <Card title='Intervalo de numeros' red>
            <div className="Intervalo">
                <span>
                    <strong>Minimo:</strong>
                    <input type="number" value={min} 
                        onChange={e => props.alterarMinimo(+e.target.value)}/>
                </span>
                <span>
                    <strong>Maximo:</strong>
                    <input type="number" value={max} 
                    onChange={e => props.alterarMaximo(+e.target.value)}/>
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
const mapDispatchToProp = (dispatch) => {
    return {
        alterarMinimo(novoNumero) {
            //  action creator -> action
            const action =  alterarNumeroMinimo(novoNumero)
            dispatch(action)
        },
        alterarMaximo(novoNumero) {
            //  action creator -> action
            const action =  alterarNumeroMaximo(novoNumero)
            dispatch(action)
        }
    }
}
export default connect(
    mapStateToProps, 
    mapDispatchToProp
)(Intervalo)