import React, { useState } from 'react'
import styled from 'styled-components';
import { FaCheck } from "react-icons/fa";
import CartAmountToggle from './CartAmountToggle';
import Cart from '../Cart';
import { NavLink } from 'react-router-dom';

const AddToCart = ({ product }) => {
  const { id, colors, stock } = product;
  const [color, setColor] = useState(colors[0]);

  const [amount, setAmount] = useState(1);


  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  }



  return (
    <Wrapper>
      <div className="colors">
        <p>
          Colors:
          {
            colors.map((curColor, index) => {
              return <button key={index} style={{ backgroundColor: curColor }}
                className={color === curColor ? "btnStyle active" : "btnStyle"}
                onClick={() => setColor(curColor)}>
                {color === curColor ? <FaCheck className="checkStyle" /> : null}
              </button>
            })
          }
        </p>
      </div>


      {/* add to cart  */}

      <CartAmountToggle amount={amount} setIncrease={setIncrease} setDecrease={setDecrease} />
      <NavLink to="/cart">
        <button className='add-to-cart'>Add to Cart</button>
      </NavLink>

    </Wrapper>
  )
}

export default AddToCart;

const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;
    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }
    .amount-style {
      font-size: 2.4rem;
      color:hsl(191 53% 59% / 1);
    }
  }
  .add-to-cart{
    border-radius:10px;
    color:hsl(191 53% 59% / 1);
    border:none;
    font-size:1.4rem;
    background-color: #f1ffff;
    border:1px solid hsl(191 53% 59% / 1);

  
  }
`;
