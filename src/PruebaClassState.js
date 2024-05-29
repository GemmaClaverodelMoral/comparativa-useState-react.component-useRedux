import React from "react";
import { Loading } from './loading.js';

const SECURITY_CODE = "paradigma"

class PruebaClassState extends React.Component {
    constructor(props) {
        super();

        this.state = {
            error: false,
            loading: false,
            value: '',
    }}

    componentDidUpdate() { //Se ejecuta cada vez que se actualiza el estado
   
        if (!!this.state.loading) { //para que no ejecute la carga en cada actualizacion
            setTimeout(() => {
              
              this.setState({ loading: false})
       
              if (this.state.value !== SECURITY_CODE) {
                this.setState({ error: true })
              }
            
            }, 3000)
        } 
    }

    render() {
        const { error, value, loading } = this.state  //desestructuracion para no tener que this.state.xxx cada rato}
        return (
            <div>
                <h2>Validación de Acción X usando { this.props.name }</h2>
                <p>Por favor ingresa el código de seguridad</p>
                <p>Puedes ingresarlo bien, mal, confirmar la acción y deshacer la acción</p>

                {(error && !loading) && (
                    <p>Error: El código ingresado es incorrecto</p>
                )}
                {loading && (
                    < Loading />
                )}
                <input 
                    placeholder="Código de seguridad"
                    value={ value }
                    onChange = {(event) => {
                        this.setState({ value: event.target.value })
                    }}
                ></input>
                <button
                  onClick= { () => {
                    this.setState(({ loading : true, error : false})) /** this.setState(({ error : true}))*/
                  }
                    
                  }                
                >Comprobar</button>
            </div>
        )
    }
}

export { PruebaClassState }