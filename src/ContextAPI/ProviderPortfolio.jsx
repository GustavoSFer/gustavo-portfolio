import React, { useEffect, useState } from 'react';
import datainfo from '../data';
import myContext from './MyContext';

function ProviderPortfolio({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(datainfo);
  },[]);

  const context = {
    data,
  }

  return(
    <myContext.Provider value={ context }>
      { children }
    </myContext.Provider>
  );
}

export default ProviderPortfolio;
