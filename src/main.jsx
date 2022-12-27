import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { MyProvider } from './context/Contextapi'
import { FilterContextProvider } from './context/filter_context'


import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(


    <MyProvider>
        <FilterContextProvider>
            <App />
        </FilterContextProvider>
    </MyProvider>



)
