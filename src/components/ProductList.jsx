import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView';
import ListView from './ListView';
// import ListView from './ListView';

const ProductList = () => {
    const { filter_products, grid_view } = useFilterContext();
    console.log(grid_view);


    if (grid_view === false) {
        return <GridView products={filter_products} />
    } else {
        return <ListView products={filter_products} />
    }



}

export default ProductList
