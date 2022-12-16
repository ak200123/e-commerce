import React from 'react'
import styled from 'styled-components';
import { MyGlobalProviderApi } from './context/Contextapi'
import Product from './Product';

export default function MyProduct() {
    const { isLoading, products } = MyGlobalProviderApi();
    console.log(products);
    if (isLoading) {
        return (
            <>
                <div className="container text-center">
                    <h3>.......loading</h3>
                </div>
            </>
        );
    }
    return (
        <Wrapper>
            <div className="container py-4">
                <p className="text-center h1">All Products</p>
                <div className="grid grid-three-column">
                    {products.map((ele) => {
                        return (
                            <Product
                                image={ele.image}
                                id={ele.id}
                                name={ele.name}
                                price={ele.price}
                                company={ele.company}
                            />
                        );

                    })}
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`

.container {
  max-width: 120rem;
  margin: 0 auto;
}
.grid {
  display: grid;
  gap: 9rem;
}

.grid-three-column {
  grid-template-columns: repeat(3,1fr);
}
`