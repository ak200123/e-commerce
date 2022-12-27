import { createContext, useContext, useEffect, useReducer } from "react";
import { MyGlobalProviderApi } from "./Contextapi";
import reducer from "../myreducer/FilterReducer"

const FilterContext = createContext();
const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: false,
    sorting_value: "lowest"
}


export const FilterContextProvider = ({ children }) => {
    const { products } = MyGlobalProviderApi();
    // console.log(products);
    const [state, dispatch] = useReducer(reducer, initialState);
    // set to the grid view 
    const setGridView = () => {
        return dispatch({ type: "SET_GRIDVIEW" })
    }
    const setListView = () => {
        return dispatch({ type: "SET_LISTVIEW" })
    }

    // sorting functon 
    const sorting = () => {
        dispatch({ type: "GET_SORT_VALUE" });
    };


    // to sort the products 
    useEffect(() => {
        dispatch({ type: "SORTING_PRODUCTS", payload: products })
    }, [state.sorting_value])

    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
    }, [products]);


    return (
        <FilterContext.Provider value={{ ...state, setGridView, setListView, sorting }} >
            {children}
        </FilterContext.Provider>
    );
};

export const useFilterContext = () => {
    return useContext(FilterContext);
}
