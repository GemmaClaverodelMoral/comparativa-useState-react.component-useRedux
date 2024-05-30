# PRACTICA DE MANEJO DE CLAVES Iterando formato De React Hooks o con Clases con React Content
# comparativa-useState-react.component-useRedux

https://gemmaclaverodelmoral.github.io/comparativa-useState-react.component-useRedux/

Proyecto de codigos de seguridad donde se debe poder pedir un codigo de seguridad para
confirmar poder hacer la accion.
Pide codigo. Bien o mal
Pide confirmacion . Si o no
Y se hace la accion tener un undo para recuperar el estado anterior.

Se va a probar con hook y con clases en paralelo para ver las similitures y diferencias
Caracteristicas de los estados en clases comparados con react hooks.
Para saber que se puede seguir usando en estados complejos y declarativos usando Redux.

- 01- Props   vs. objeto de estados
- 02- Efectos vs. ciclos de vida de las clases 
(con los metodos del ciclo de vida: 
    - ComponentWillMount (se renderizara en el futuro), 
    - ComponentWillUnmount (ya se desrenderizó en el pasado), 
    - ComponentDidMount (se renderizó en el pasado))
    - ComponentUpdate (se renderiza en cualquie cambio del estado excepto la carga inicial)
- 03- Estados independientes vs. estados en un mismo objeto
- 04- Estados compuestos con React.useState cuando el valor de un estado cambia otros estados. Se van todos paseando juntitos en un objeto . 
    - No olvidar al cambiar el estado que se hace asi:
    {...state
    setState({ atrubutoquecambia: nuevo_valor})
    }
- 05- Estados Imperativos vs. declarativos.
    - imperativos: Definiendo el valor de cada uno de los estados
    - semiDeclarativos: Abrtrayendo el codigo de cambio de estado a métodos con nombres bien descriptivos y asi volver mas lejible el codigo
- 06- Estados Declarativos con reducer
    - requiere que todos los estados esten compuestos en un objeto y metodos/acciones. Action Type y Action payload.
- 07- uso de dispatch (para enviar acciones de cambio de estado al store de Redux que se haya creado actualizando el estado de la aplicación.)
- 08- uso de actionTypes (para evitar errores de escritura de strings no detectadas por el compilador)

# Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts
In the project directory, you can run:

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**
If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.
You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting
This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size
This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App
This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration
This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment
This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify
This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
