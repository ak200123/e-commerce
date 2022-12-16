import { createContext, useContext, useEffect, useReducer } from "react";
import axios from 'axios';
import reducer from "../myreducer/MyProductreducer";


const MyContext = createContext();
const MY_API = 'https://api.pujakaitem.com/api/products'
const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProducts: {},
    isSingleError: false,
}

const MyProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const GetProductData = async (url) => {
        dispatch({ type: "SET_LOADING" });
        try {
            const res = await axios.get(url);
            const products = res.data;
            console.log(products);
            dispatch({ type: "SET_API_DATA", payload: products });
        } catch (error) {
            dispatch({ type: "API_ERROR" });
        }
    };

    const GetSingleProducts = async (url) => {
        dispatch({ type: "SET_SINGLE_LOADING" });
        try {
            const mydata = await axios.get(url);
            const singleProduct = await mydata.data;
            dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
        } catch (error) {
            dispatch({ type: "SET_SINGLE_ERROR" });
        }
    }

    useEffect(() => {
        GetProductData(MY_API);
    }, [])
    return <MyContext.Provider value={{ ...state, GetSingleProducts }}>
        {children}
    </MyContext.Provider>
}

const MyGlobalProviderApi = () => {
    return useContext(MyContext);
}

export { MyContext, MyProvider, MyGlobalProviderApi };