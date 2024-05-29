import React from "react";

const SECURITY_CODE = "paradigma"

function PruebaUseState({ name }) {
  const [state, setState] = React.useState({
    error: false,   //Estado de error en la validacion de la clave
    loading: false, //para estar pendientes de estados de carga
    value: '',     // valor de la clave entrada
    done: false, 
    confirmed: false, //estado de confirmacion de de la accion a tomar
  })

  function onLoading () { //LOAD
    setState({
      ...state,
      error: false,
      loading: true, 
    })
  }

  function onCheck () { //CHECK
    setState({
      error: false,
      loading: false, 
      done: false, 
      confirmed: true,
    })
  }

  function onError () { //ERROR
    setState({
      ...state,
      loading: false,
      error: true,
    })
  }

  function onAction () { //ACTION
    setState({
      ...state, 
      confirmed: false,
      done: true,
      value: '',
    })
  }

  function onReset () { //RESET
    setState({
      confirmed: false,
      done: false,
      delete: false,
      error: false,
      value: '',
    })
  }

  function onChangeValue(newValue) { //CHANGEVALUE
    setState({
      ...state,
      value: newValue})
  }

//  console.log(state)
  React.useEffect(() => {
       
    if (!!state.loading) { //para que no ejecute la carga en la inicializacion(que tambien es cambio)
      
      setTimeout(() => {
     
          if (state.value !== SECURITY_CODE) {
            onError()
          } else {
            onCheck()
          }

      }, 3000)
    } 
   
  },[state.loading]) // para que solo ejecute el useEffect en cambios del loading

  if (!state.done && !state.confirmed) { //pantalla de introduccion de password. con control de error
    return (
      <div>
          <h2>Validación de Acción X usando { name }</h2>
          <p>Por favor ingresa el código de seguridad</p>
          <p>Puedes ingresarlo bien, mal, confirmar la acción y deshacer la acción</p>
  
          {(state.error && !state.loading) && (
            <p>Error: El código ingresado es incorrecto</p>
          )}
          {state.loading && (
            <p>Cargando ...</p>
          )}
  
          <input 
            placeholder="Código de seguridad"
            value={state.value}
            onChange={ (event) => 
              onChangeValue(event.target.value) 
            }
          ></input>
          <button 
              onClick={() => {
                onLoading()
              }}
          >Comprobar</button>
      </div>
    )
  } else if (!!state.confirmed && !state.done) { //pantalla de confirmacion de decision con la opcion de arepentimiento
    return (
      <>
        <p>Acción pendiente de confirmación</p>
        <p>¿ Tas segurx ?</p>
        <button
          onClick={()=> {
            onAction()
          }}
          >Sí, eliminar</button>
        <button 
          onClick={()=> {
            onReset()
        }}
        >No, me arrepentí</button>
      </>
    )
  } else { // pantalla de aviso de ejecucion de la accion con la opcion de reseteo
    return (
      <>
      <p>Acción ejecutada con exito</p>
      <button
          onClick={()=> {
            onReset()
          }}
          >Resetear, volver atrás</button>
      </>
    )
  }
}

export { PruebaUseState }