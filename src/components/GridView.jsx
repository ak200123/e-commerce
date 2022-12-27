import React from 'react'
import styled from 'styled-components'
import Product from '../Product';

const GridView = ({ products }) => {
    return (
        <Wrapper className='section'>
            <div className="container mygrid grid-three-column">
                {products.map((curEle, id) => {
                    return <Product key={curEle.id} {...curEle} />;
                })}
            </div>
        </Wrapper>
    )
}

export default GridView

const Wrapper = styled.section`
 .mygrid {
    display: grid;
    gap: 2rem;
  }


.grid-three-column {
  grid-template-columns: repeat(3,1fr);
} 
`