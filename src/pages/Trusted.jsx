import React from 'react';
import styled from 'styled-components';

const Trusted = () => {
    return (
        <Wrapper className="brand-section">
            <div className="container">
                <h3>Trusted by 1000+ Companies</h3>
                <div className='brand-section-slider'>
                    <div className='slide'>
                        <img src="./meesho.png" alt="trusted-brands" />
                    </div>
                    <div className='slide'>
                        <img src="./Flipkart.png" alt="trusted-brands" />
                    </div>
                    <div className='slide'>
                        <img src="./shopsy.png" alt="trusted-brands" />
                    </div>
                    <div className='slide'>
                        <img src="./amazon.png" alt="trusted-brands" />
                    </div>
                    <div className='slide'>
                        <img src="./myntra.png" alt="trusted-brands" />
                    </div>

                </div>
            </div>
        </Wrapper>
    )
};

const Wrapper = styled.section`
 padding: 5rem 0;
 background-color: #eaeaea;
 .brand-section{
     padding: 12rem 0 0 0;
     
    }
 h3{
  text-align: center;
  text-transform: capitalize;
  color: red;
  font-size: 2rem;
  font-weight: bold;
}
img{
    min-width: 8rem;
    height: 8rem;
    
}
.brand-section-slider{
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    
    
    /* .slide{
        width:20rem;
        height:4rem;
    } */
}
`




export default Trusted;
