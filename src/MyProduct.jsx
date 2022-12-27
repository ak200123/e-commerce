import React from 'react'
import styled from 'styled-components';
import FilterSection from './components/FilterSection';
import ProductList from './components/ProductList';
import Sort from './components/Sort';

// import { MyGlobalProviderApi } from './context/Contextapi'
// import Product from './Product';

export default function MyProduct() {

    // const { isLoading, products } = MyGlobalProviderApi();
    // console.log(products);
    // if (isLoading) {
    //     return (
    //         <>
    //             <div className="container text-center">
    //                 <h3>.......loading</h3>
    //             </div>
    //         </>
    //     );
    // }
    return (
        <Wrapper>
            {/* <div className="container py-4">
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
            </div> */}

            <div className="container grid grid-filter-column">

                <div>
                    <FilterSection />
                </div>

                <section className='product-view--sort'>
                    <div className="sort-filter">
                        <Sort />
                    </div>

                    <div className="main-product">
                        <ProductList />
                    </div>
                </section>



            </div>

        </Wrapper>
    )
}

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }
  .grid {
    display: grid;
    gap: 9rem;
  }
/* .container {
  max-width: 120rem;
  margin: 0 auto;
}

.grid-three-column {
  grid-template-columns: repeat(3,1fr);
} */
`