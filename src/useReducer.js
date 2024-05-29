import React from "react";

const SECURITY_CODE = "paradigma"

const initialState = {
    value: '',
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
  };

const actionTypes = {
    load:   'LOAD',
    check:  'CHECK',
    error:  'ERROR',
    action: 'ACTION',
    change: 'CHANGE',
    reset:  'RESET',
}
const reducerObject = (state, playLoad) => ({ 
    [actionTypes.load]: {
        ...state,
        error: false,
        loading: true, 
    },
    [actionTypes.check]: {
        error: false,
        loading: false, 
        done: false, 
        confirmed: true,
    },
    [actionTypes.error]: {
        ...state,
        loading: false,
        error: true,
    },
    [actionTypes.action]: {
        ...state, 
        confirmed: false,
        done: true,
        value: '',
    },
    [actionTypes.change]: {
        ...state,
        value: playLoad,
    },
    [actionTypes.reset]: {
            initialState
    },
    default: {
        ...state,
    }
})

const reducer = (state, action) => {
    if (reducerObject(state)[action.type]) {
        return reducerObject(state, action.playLoad)[action.type]
    } else {
        return state
    }
}

function UseReducer({ name }) {
  const [state, dispatch] = React.useReducer(reducer,initialState)

  function onError()  {dispatch({ type: actionTypes.error  })}
  function onLoad()   {dispatch({ type: actionTypes.load   })}
  function onCheck()  {dispatch({ type: actionTypes.check  })}
  function onAction() {dispatch({ type: actionTypes.action })}
  function onReset()  {dispatch({ type: actionTypes.reset  })}
  function onChange({target: {value}}) {dispatch({ type: actionTypes.change, playLoad: value })}

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
      <>
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
            onChange={onChange}
        ></input>
        <button 
            onClick={onLoad}
        >Comprobar
        </button>
      </>
    )
  } else if (!!state.confirmed && !state.done) { //pantalla de confirmacion de decision con la opcion de arepentimiento
    return (
      <>
        <p>Acción pendiente de confirmación</p>
        <p>¿ Tas segurx ?</p>
        <button
            onClick={onAction}
        >Sí, eliminar</button>
        <button 
            onClick={onReset}
        >No, me arrepentí
        </button>
      </>
    )
  } else { // pantalla de aviso de ejecucion de la accion con la opcion de reseteo
    return (
      <>
        <p>Acción ejecutada con exito</p>
        <button
            onClick={onReset}
        >Voler al inicio</button>
      </>       
    )
  }
}

export { UseReducer }