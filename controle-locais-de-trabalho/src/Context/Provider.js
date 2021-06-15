import React from 'react';
import Context from './Context';
function Provider({ children }) {

const contextValue = {

}
return (
  <Context.Provider value={ contextValue }>
    { children }
  </Context.Provider>
);
}

export default Provider;