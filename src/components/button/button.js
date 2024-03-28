import React, {Component} from 'react'
import './button.css'

const Button = ({label}) => {
    const valueLabel = label
    
    function like({label}) {
        alert(`Você acabou de dar ${valueLabel} na minha quest. Obrigado!`)
   }
    return(
        <div className='btn-container'>
            <button className='btn' onClick={like}>{label}</button>
        </div>
    )
}

export default Button