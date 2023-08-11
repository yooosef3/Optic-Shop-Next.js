import React, {createContext} from 'react';

import data from '../../data/data.json';

export const ProductsContext = createContext();


const ProductsContextProvider = ({children}) => {
    const products = data.products
    return (
        <ProductsContext.Provider value={products}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsContextProvider;