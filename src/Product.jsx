import React from 'react'
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Formatprice from './helper/FormatPrice';




const Product = (props) => {
    const { id, image, name, price, company } = props;
    return (

        <NavLink to={`/products/${id}`}>
            <Wrapper>

                <div className="products-card">
                    <div className="products-image">

                        <span className='company'>{company}</span>
                        <img src={image} alt="" className='myimage' />
                    </div>
                    <div className='d-flex justify-content-between p-3 text-dark'>
                        <span>{name}</span>
                        <span className="price">{<Formatprice price={price} />}</span>
                    </div>
                </div>
            </Wrapper>
        </NavLink>

    );
}

export default Product;
const Wrapper = styled.section`
.products-card{
    background-color: white;
    border-radius: 1.5rem;
    padding: 1rem;
    width: 14rem;
    span{
        font-size: 0.9rem;
    }
    .price{
        color: #b41010;

    }
    height: 14rem;
    .products-image{
        overflow: hidden;
        border-radius: 0.5rem;
        .myimage{
            width: 100%;
            transition: all 0.2s linear;
            &:hover{
                transform: scale(1.1);
        }
    }
    .company{
        font-size: 0.9rem;
        border: none;
        text-transform: capitalize;
        color: black;
        padding: 3px 10px;
        position: absolute;
        border-radius: 1.5rem;
        background: #f1f0f0;
        z-index:2;
        display: block;
        margin: 1.2rem;
    }

}
}
`;
