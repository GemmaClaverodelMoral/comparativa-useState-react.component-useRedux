import { PruebaClassState } from './PruebaClassState.js'
import { PruebaUseState } from './PruebaUseState.js'
import { UseReducer } from './useReducer.js';

import './App.css'

function App() {
  return (
    <div className="App">
     <PruebaUseState name="Use State"/>
     <PruebaClassState name ="Class State"/>
     <UseReducer name="Use Reducer"/>
    </div>
  );
}

export default App;
