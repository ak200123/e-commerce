import React from 'react'
import { MyGlobalProviderApi } from '../context/Contextapi'
import styled from "styled-components";
import Product from '../Product';


const FeatureProducts = () => {
    const { isLoading, featureProducts } = MyGlobalProviderApi();
    console.log(featureProducts);
    if (isLoading) {
        return (
            <>
                <div className="container text-center">
                    <h3>......loading</h3>
                </div>
            </>
        )
    }
    return (
        <Wrapper className="section">
            <div className="container">
                <h3>Check Now</h3>
                <h2>Featured Products</h2>
                <div className="grid grid-column py-4">
                    {featureProducts.map((ele) => {
                        return (
                            <Product image={ele.image}
                                id={ele.id}
                                name={ele.name}
                                price={ele.price}
                                company={ele.company} />
                        );
                    })}
                </div>
            </div>
        </Wrapper>
    )
}

export default FeatureProducts;
const Wrapper = styled.section`
padding:4rem 0; 
text-align: center;
margin-bottom: 4rem;
background-color: #eaeaea;
.grid-column{
    display:grid;
    grid-template-columns: repeat(3,1fr);
}
.container{
h3,h2{
    font-weight: 500;
}
h2{
    font-size: 3rem;
}
max-width: 120rem;
.grid{
    justify-items: center;
    
}
}
` ;    