import React, {Component} from 'react'
import './transforma-texto.css'

/*SOLUÇÃO USANDO FUNÇÃO */
// const TransformaTexto = ({text,textColor}) => {
//         return(
//             <div className='card'>
//                 <p className='text' style={{color:textColor}} >{text}<p>
//             </div>
//         )
// }

/*SOLUÇÃO USANDO CLASSE*/ 

class TransformaTexto extends Component {
    render(){
        return(
            <div className='card'>
                <p className='text' style={{color:this.props.textColor}} >{this.props.text}</p>
             </div>
        )
    }
}

export default TransformaTexto