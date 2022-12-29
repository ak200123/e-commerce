import { createContext, useContext, useEffect, useReducer } from "react";
import { MyGlobalProviderApi } from "./Contextapi";
import reducer from "../myreducer/FilterReducer"

const FilterContext = createContext();
const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: false,
    sorting_value: "lowest",
    filters: {
        text: "",
        category: "all",
        company: "all",
    }
}


export const FilterContextProvider = ({ children }) => {
    const { products } = MyGlobalProviderApi();
    // console.log(products);
    const [state, dispatch] = useReducer(reducer, initialState);
    // set to the grid view let 
    const setGridView = () => {
        return dispatch({ type: "SET_GRIDVIEW" })
    }
    const setListView = () => {
        return dispatch({ type: "SET_LISTVIEW" })
    }

    // sorting functon 
    const sorting = (event) => {
        let userValue = event.target.value;
        dispatch({ type: "GET_SORT_VALUE", payload: userValue });
    };
    // update the filter values 

    const updateFilterValue = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        return dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } })
    }

    // to sort the products 
    useEffect(() => {
        dispatch({ type: "SORTING_PRODUCTS" })
        dispatch({ type: "FILTER_PRODUCT" })

    }, [products, state.sorting_value, state.filters])

    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
    }, [products]);


    return (
        <FilterContext.Provider value={{ ...state, setGridView, setListView, sorting, updateFilterValue }} >
            {children}
        </FilterContext.Provider>
    );
};

export const useFilterContext = () => {
    return useContext(FilterContext);
}
